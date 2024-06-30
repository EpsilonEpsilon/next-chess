import {styled} from "@panda/jsx";
import Link from "next/link";


const Logo = styled(Link, {
    base:{
        display:"flex",
        height:"56px",
        width:"115px",
        _before: {
            content: '""',
            bgImage:"url(/assets/img/sprites.png)",
            display:"block",
            bgPosition:"-25px 0",
            height:"34px",
            width:"100%",
            backgroundSize:"155px auto",
            backgroundRepeat:"no-repeat",
        }
    },
})


export default Logo;




