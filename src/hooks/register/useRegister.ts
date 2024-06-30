import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerSchema} from "@/shared/schema";
import registerAction from "@/lib/actions/auth/register.action";
import {IUser} from "@/lib/db/types";
import {useCreateRegister} from "@/hooks";
import {handleActionResponse} from "@/lib/response";
import templates from "@/lib/response/templates";


const useRegister = ()=>{
    const [handleCreateUser, {loading}] = useCreateRegister<IUser, IUser>(registerAction);
    const {register, formState:{errors}, handleSubmit}
        = useForm<IUser>({resolver:yupResolver(registerSchema)});

    const onSubmit = async (result:IUser)=>{
      handleActionResponse(await handleCreateUser(result))
      .useTemplate(templates.primary);
    }

    return {
        loading,
        register,
        errors,
        onSubmit:handleSubmit(onSubmit),
    }
}


export default useRegister;
