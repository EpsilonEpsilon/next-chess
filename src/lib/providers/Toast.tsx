import {HasChildren} from "@/types/base";
import {FC} from "react";
import {ToastContainer, Bounce} from "react-toastify";

interface IProps extends HasChildren{}

const ToastProvider:FC<IProps> = ({children})=>{
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition = {Bounce}
            />
            {children}
        </>
    )
}


export default ToastProvider;
