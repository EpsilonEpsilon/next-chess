import {Paths} from "@/types/next-int";
import Router from "@/routes/router";




const items:{name:Paths<IntlMessages>, position:string, href:keyof typeof Router.routes}[] = [
    {
        name:"sidebar.play",
        position:"-22px -78px",
        href:"initial"
    },
    {
        name:"sidebar.puzzle",
        position:"-23px -115px",
        href:"initial"
    },
    {
        name:"sidebar.learn",
        position:"-23px -153px",
        href:"initial"
    },
    {
        name:"sidebar.watch",
        position:"-23px -190px",
        href:"initial"
    },
]

export default items;
