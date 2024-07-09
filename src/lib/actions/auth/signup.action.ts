import {IUser} from "@/lib/db/types";
import {registerSchema} from "@/shared/schema";
import {ValidationError} from "yup";
import response, {StatusCode} from "@/lib/response";
import prisma from "@/lib/db/prisma";
import {getTranslations} from "next-intl/server";
import {container} from "@/services/container";
import {DITypes} from "@/services";
import AuthorizationService from "@/services/common/AuthorizationService";
import {DbUserNotFoundError, PasswordEqualityError} from "@/model/errors";

const SignupAction = async (user:IUser)=>{
    const t = await getTranslations();
    const auth = container.get<AuthorizationService>(DITypes.authorization);
    try{
       await registerSchema.validate(user);
       const {email, password} = user;
       const foundUser = await prisma.user
           .findUniqueOrThrow({where:{email}, select:{email:true, salt:true}})
           .catch(()=>{throw new DbUserNotFoundError()})
       const hash = await auth.passwordToHash(password);
       auth.isHashEqual(hash.salt, foundUser.salt)
    }catch (e){
        if(e instanceof ValidationError) return response.error(StatusCode.BadRequest, e.inner.map(e => e.message));
        if(e instanceof PasswordEqualityError) return response.error(StatusCode.Conflict, t("server.passwords-equality-error"));
        if(e instanceof DbUserNotFoundError) return response.error(StatusCode.Conflict, t("server.user-not-exists"));

        return response.error(StatusCode.InternalServerError, t("server.unexpected-error"));
    }
}


export default SignupAction;
