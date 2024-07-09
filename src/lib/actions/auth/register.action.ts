"use server"

import {ValidationError} from "yup";
import response, {ActionResponseType, StatusCode} from "@/lib/response";
import {registerSchema} from "@/shared/schema";
import prisma from "@/lib/db/prisma";

import {cookies} from "next/headers";
import {IUser} from "@/lib/db/types";
import {getTranslations} from "next-intl/server";
import {container} from "@/services/container";
import {DITypes, JsonTokenService} from "@/services";
import AuthorizationService from "@/services/common/AuthorizationService";
import {DbUserNotFoundError} from "@/model/errors";


type Response = ActionResponseType<IUser>
const registerAction = async (user:IUser):Promise<Response>=>{
    const t = await getTranslations();
    const jwt = container.get<JsonTokenService>(DITypes.jwt);
    const auth = container.get<AuthorizationService>(DITypes.authorization)
    try{
        await registerSchema.validate(user);
        await prisma.user
            .findFirstOrThrow({where:{email:user.email}, select:{}})
            .catch(()=>{throw new DbUserNotFoundError()});

        const {id, ...copiedUser} = {...user};
        const {key:password, salt} = await auth.passwordToHash(copiedUser.password);
        const {salt:secret, password:pass, id:uid,
            ...createdUser}
            = await prisma.user.create({data:{...copiedUser, salt, password}});

        const token = await jwt.sign(createdUser);
        cookies().set("token", token);

        return response.success(t("server.user-created"), createdUser as IUser);
    }catch (e){
        if(e instanceof ValidationError) return response.error(StatusCode.BadRequest, e.inner.map(e => e.message));
        if(e instanceof DbUserNotFoundError) return response.error(StatusCode.Conflict, t("server.user-exists"));
        return response.error(StatusCode.InternalServerError, t("server.unexpected-error"));
    }
}


export default registerAction;
