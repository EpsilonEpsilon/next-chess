import {HasChildren} from "@/types/base";
import {FC} from "react";
import ToastProvider from "@/lib/providers/Toast";


interface IProps extends HasChildren{}

const Root:FC<IProps> = ({children})=>{
    return(
        <ToastProvider>
            {children}
        </ToastProvider>
    )
}


export default Root;
