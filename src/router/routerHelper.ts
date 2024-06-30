

class RouterHelper {
    public static readonly  routes = {
        initial:"/",
        register:"/register",
        home:"/home",
    }
    public static getDefaultPrivate(){
        return RouterHelper.routes.home;
    }
    public static getDefaultPublic(){
        return RouterHelper.routes.initial
    }
    public static readonly privateRoutes:string[] = [RouterHelper.routes.home] as const;

    //-------Static------

    public url;
    constructor(url:string) {
        this.url = url;
    }

    isPrivate(){
        if(this.url === RouterHelper.routes.initial) return false;
        for(let route of RouterHelper.privateRoutes){
            if(this.url.includes(route)) return true;
        }
        return false;
    }

}



export default RouterHelper;
