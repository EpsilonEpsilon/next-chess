import {styled} from "@panda/jsx";

const Primary = styled("button", {
    base:{
        userSelect:"none",
        borderRadius:"5px",
        fontWeight:600,
        transition:".2s linear",
        cursor:"pointer",
        _active:{
            transform:"scale(.9)"
        }
    },
    variants:{
        variant:{
            dark:{
                bg:"#3C3937",
                color:"#9E9B9A",
                _hover:{
                    bg:"#514d4a"
                }
            },
            light:{
                bg:"#80B64B",
                color:"#fff",
                _hover:{
                    bg:"#8dbd5d"
                }
            }
        },
        size:{
            small:{
                width:"125px",
                height:"40px"
            },
            medium:{
                width:"200px",
                height:"64px",
            },
            large:{
                width:"400px",
                height:"clamp(4.875rem, 4.125rem + 1.5625vw, 6rem)"
            },
        },
        type:{
            lightShadow:{
                boxShadow: "0px 6px 0px 0px #5d9948;",
            },
            darkShadow:{
                boxShadow: "0px 6px 0px 0px rgba(0,0,0,.14);",
            }
        }
    }
})


export default Primary;
