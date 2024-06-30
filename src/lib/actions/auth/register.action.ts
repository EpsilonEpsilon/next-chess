"use server"

import {ValidationError} from "yup";
import response, {ActionResponseType, StatusCode} from "@/lib/response";
import {registerSchema} from "@/shared/schema";
import prisma from "@/lib/db/prisma";
import {hashHelper} from "@/shared/helpers";
import {cookies} from "next/headers";
import {IUser} from "@/lib/db/types";
import getTypedMessage from "@/shared/helpers/getTypedMessage";
import {getTranslations} from "next-intl/server";
import {container} from "@/services/container";
import {JsonTokenService} from "@/services";


type Response = ActionResponseType<IUser>
const registerAction = async (user:IUser):Promise<Response>=>{
    const t = await getTranslations();
    try{
        await registerSchema.validate(user);
        const existingUser = await prisma.user.findFirst({where:{email:user.email}});
        if(existingUser) return response.error(StatusCode.Conflict, t(getTypedMessage("server.user-exists")));
        const {id, ...copiedUser} = {...user};
        const {key:password, salt} = await hashHelper(copiedUser.password);
        const {salt:secret, password:pass, id:uid,
            ...createdUser}
            = await prisma.user.create({data:{...copiedUser, salt, password}})

        const jwt = container.get<JsonTokenService>("JWT");
        const token = await jwt.sign(createdUser);
        cookies().set("token", token);
        return response.success(t(getTypedMessage("server.user-created")), createdUser as IUser);
    }catch (e){
        if(e instanceof ValidationError){
            return response.error(StatusCode.BadRequest, e.inner.map(e => e.message));
        }
        return response.error(StatusCode.InternalServerError, t(getTypedMessage("server.unexpected-error")));
    }
}


export default registerAction;
