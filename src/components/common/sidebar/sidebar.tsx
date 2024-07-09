import {styled} from "@panda/jsx";
import {LogoComponent, PrimaryButtonComponent} from "@/shared/ui";
import RouterHelper from "@/router/routerHelper";
import Link from "next/link";
import items from "@/components/common/sidebar/items";
import {getTranslations} from "next-intl/server";

const Sidebar = async ()=>{
    const t = await getTranslations();
    return (
        <Container>
            <SidebarItem>
                <StyledLogo href = {RouterHelper.routes.initial}/>
            </SidebarItem>
            <SidebarLinkList>
                {items.map(item => <SidebarListItem key = {item.name}>
                    <Icon style = {{backgroundPosition:item.position}}/>
                    <SidebarLink href={RouterHelper.routes[item.href]}>{t(item.name)}</SidebarLink>
                </SidebarListItem>)}
            </SidebarLinkList>
            <ButtonContainer>
                <StyledButton
                    size = "small"
                    variant = "dark"
                >
                    <Link href={RouterHelper.routes.register}>
                        {t("general.signUp")}
                    </Link>
                </StyledButton>
                <StyledButton
                    size = "small"
                    variant = "light"
                >
                    <Link href={RouterHelper.routes.login}>
                        {t("general.logIn")}
                    </Link>
                </StyledButton>
            </ButtonContainer>
        </Container>
    )
}
export default Sidebar;


const Container = styled("aside", {
    base:{
        position:"fixed",
        height:"100vh",
        top:0,
        left:0,
        bg:"#262522",
        width:145,
        display:"flex",
        flexDir:"column",
        "@media(max-width:768px)":{
            display:"none"
        }
    }
})


const SidebarLinkList = styled("ul", {});

const SidebarItem = styled("div", {
     base:{
         pl:"12px",
         minHeight:"30px",
         display:"flex",
         cursor:"pointer",
         alignItems:"center",
         _hover:{
             background:"grayish",
         },
     }
})

const SidebarLink = styled(Link, {
    base:{
        display:"flex",
        alignItems:"flex-end",
        userSelect:"none",
        color:"#efe8e8",
        fontWeight:"bold",
        transition:".2s linear",
        _hover:{
            color:"#fff"
        }
    }
})

const StyledLogo = styled(LogoComponent, {
    base:{
        pt:"11px",
    }
})

const Icon = styled("p", {
    base:{
        content: '""',
        bgImage:"url(/assets/img/sprites.png)",
        display:"block",
        marginRight:"5px",
        height:"30px",
        width:"30px",
        backgroundSize:"155px auto",
        backgroundRepeat:"no-repeat",
    }
})

const SidebarListItem = styled(SidebarItem, {
    base:{
        py:"10px"
    }
})

const StyledButton = styled(PrimaryButtonComponent, {
    base:{}
})

const ButtonContainer = styled("div", {
    base:{
        mt:"25px",
        width:"100%",
        display:"flex",
        flexDir:"column",
        alignItems:"center",
        gap:"20px"
    }
})
