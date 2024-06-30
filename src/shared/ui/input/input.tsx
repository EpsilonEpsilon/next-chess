import {styled} from "@panda/jsx";
import React, {FC, forwardRef, ReactElement} from "react";
import { MdEmail } from "react-icons/md";
interface IProps extends React.HTMLProps<HTMLInputElement>{
    error?:{
        message?:string,
    },
    startIcon?:ReactElement,
    endIcon?:ReactElement,
}
const Input:FC<IProps> = forwardRef<HTMLInputElement, IProps>((props, ref)=>{
    const {endIcon, startIcon, error, ...rest} = props;
    return (
        <Wrapper>
            <Container>
                {startIcon}
                <StyledInput {...rest} ref = {ref}/>
                {endIcon}
            </Container>
            {error && <Error>{error?.message}</Error>}
        </Wrapper>
    )
})


export default Input;


const Container = styled("div", {
    base:{
        padding:"5px",
        width:"100%",
        height:"50px",
        background:"#454240",
        border:"1px solid #737270",
        borderRadius:"5px",
        display:"flex",
        alignItems:"center",
    }
});

const StyledInput = styled("input", {
    base:{
        width:"100%",
        height:"100%",
        color:"#CBCACA",
        fontWeight:500,
        _placeholder:{
            color:"#b9b4b4",
            fontWeight:500,
        },
        _focus:{
            outline:"none",
        },
    }
})

const Wrapper = styled("div", {
    base:{
        width:"100%",
    }
})

const Error = styled("div", {
    base:{
        color:"red",
        mt:"5px",
        height:"18px",
        fontSize:"12px",
        userSelect:"none",
    }
})
