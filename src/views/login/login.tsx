"use client"

import {styled} from "@panda/jsx";
import {InputComponent, LogoComponent, PrimaryButtonComponent} from "@/shared/ui";
import RouterHelper from "@/router/routerHelper";
import {MessageKeys, useTranslations} from "use-intl";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import {useLogin} from "@/hooks";
type Message = MessageKeys<any, any>

const Login = ()=>{
    const t = useTranslations();
    const {errors, register, onSubmit} = useLogin();
    return (
        <Container>
            <Content>
                <LogoComponent href = {RouterHelper.routes.initial}/>
                <Header>{t("login.header")}</Header>
                <Form onSubmit={onSubmit}>
                    <InputContainer>
                        <InputComponent
                            {...register("email")}
                            error={{message: errors.email?.message && t(errors.email?.message as Message)}}
                            startIcon={<Icon><MdEmail/></Icon>}
                            placeholder="Email"/>
                        <InputComponent
                            type = "password"
                            error={{message: errors.password?.message && t(errors.password?.message as Message)}}
                            {...register("password")}
                            startIcon={<Icon><RiLockPasswordFill/></Icon>}
                            placeholder="Password"/>
                    </InputContainer>
                    <StyledButton
                        width ="100%"
                        type = "lightShadow"
                        size = "medium"
                        variant = "light"
                    >
                        {t("login.submit")}
                    </StyledButton>
                </Form>
            </Content>
        </Container>
    )
}

export default Login;


const Container = styled("div", {
    base:{
        mt:"20px",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        p:"20px"
    }
});

const Content = styled("div", {
    base:{
        width:"100%",
        maxWidth:"460px",
        display:"flex",
        flexDir:"column",
        alignItems:"center",
    }
});

const Header = styled("h1", {
    base:{
        fontSize:"30px",
        fontWeight:"bold",
        color:"#fff",
        textAlign:"center",
    }
});

const Form = styled("form", {
    base:{
        width:"100%",
        mt:"20px",
    }
});

const StyledButton = styled(PrimaryButtonComponent, {
    base:{
        mt:"40px",
    }
})

const InputContainer = styled("div", {
    base:{
        display:"flex",
        flexDir:"column",
        gap:"10px",
    }
})

const Icon = styled("div", {
    base:{
        "& svg":{
            fontSize:"25px",
            mr:"15px",
            color:"#A2A09F",
        }
    }
})

