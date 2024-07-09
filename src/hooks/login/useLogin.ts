import {useForm} from "react-hook-form";
import {IUser} from "@/lib/db/types";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerSchema} from "@/shared/schema";

const useLogin = ()=>{
    const {register, formState:{errors}, handleSubmit}
        = useForm<IUser>({resolver:yupResolver(registerSchema)});

    const onSubmit = handleSubmit(()=>{

    })

    return {
        register,
        errors,
        onSubmit
    }
}


export default useLogin;
