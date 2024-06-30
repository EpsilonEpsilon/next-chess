import {getTranslations} from 'next-intl/server';
import {styled} from "@panda/jsx";
import chessboard from "@/../public/assets/img/chess-board.png"
import Image from "next/image";
import {PrimaryButtonComponent} from "@/shared/ui";
import Link from "next/link";

const Root = async ()=>{
    const t = await getTranslations()
    return (
        <Container>
            <Content>
                <StyledImage
                    loading={"eager"}
                    priority
                    src={chessboard}
                    alt={"chess-board"}/>
                <Group>
                    <Header>
                        <span>{t("root.subHeader-p1")}</span>
                        <span>{t("root.subHeader-p2")} </span>
                        <span>{t("root.subHeader-p3")}</span>
                    </Header>
                    <SubheaderContainer>
                        <Subheader>
                            NaN
                            <span>{t("root.gamesToday")}</span>
                        </Subheader>
                        <Subheader>
                            NaN
                            <span>{t("root.playingNow")}</span>
                        </Subheader>
                    </SubheaderContainer>
                    <ButtonContainer>
                        <StyledButton type = "lightShadow" size = "large" variant = "light">{t("root.playingNow")}</StyledButton>
                        <StyledButton type = "darkShadow" size = "large" variant = "dark">{t("root.playComputer")}</StyledButton>
                    </ButtonContainer>
                </Group>
            </Content>
        </Container>
    )
}
export default Root;




const Container = styled("div", {
    base:{
        padding:"50px",
        width:"100%",
        height:"100dvh",
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
    }
})

const Content = styled("main", {
    base:{
        maxWidth:"1080px",
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        "@media(max-width:928px)":{
            justifyContent:"center",
        }
    }
})

const StyledImage = styled((props)=><Image {...props}/>, {
    base:{
        width:"clamp(15.625rem, 5.375rem + 21.3542vw, 31rem)",
        height:"clamp(15.625rem, 5.375rem + 21.3542vw, 31rem)",
        borderRadius:"5px",
        "@media(max-width:924px)":{
            display:"none",
        }
    }
})

const Group = styled("div",{
    base:{
        display:"flex",
        flexDir:"column",
        minH:"320px",
    }
})
const Header = styled("h1", {
    base:{
        fontSize:"clamp(2rem, 1.8rem + 1vw, 3rem)",
        fontWeight:"bold",
        textAlign:"center",
        color:"#fff",
        width:"100%",
        maxWidth:"400px",
        lineHeight:1.3,
    }
})

const SubheaderContainer = styled("div", {
    base:{
        display:"flex",
        mt:"20px",
        justifyContent:"space-between",
        "@media(max-width:565px)":{
            flexDir:"column",
            justifyContent:"center",
            alignItems:"center"
        }
    }
})

const Subheader = styled("h4", {
    base:{
        fontSize:"18px",
        color:"#fff",
        fontWeight:"bold",
        "& span":{
            ml:"5px",
            color:"hsla(0,0%,100%,.5)"
        },
        "@media(max-width:565px)":{
            fontSize:"15px",
        }
    }
})

const ButtonContainer = styled("div", {
    base:{
        display:"flex",
        flexDir:"column",
        gap:"40px",
        mt:"20px",
    }
})

const StyledButton = styled(PrimaryButtonComponent, {
    base:{
        fontSize:"28px",
        "@media(max-width:768px)":{
            width:"100%",
        },
        "@media(max-width:470px)":{
            width:"100%",
            height:"50px",
            fontSize:"18px"
        }
    }
})
