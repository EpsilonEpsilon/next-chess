import {object, string} from "yup";
import getTypedMessage from "@/shared/helpers/getTypedMessage";

const passwordRegex = /^(?=.*[a-zA-Z]).{8,}$/;

const registerSchema = object({
    email:string()
        .email(getTypedMessage("errors.email-not-valid"))
        .required(getTypedMessage("errors.email-required")),
    password:string()
        .min(8, getTypedMessage("errors.password-min"))
        .required(getTypedMessage("errors.password-required"))
        .matches(passwordRegex, getTypedMessage("errors.password-not-valid"))
})


export default registerSchema;
