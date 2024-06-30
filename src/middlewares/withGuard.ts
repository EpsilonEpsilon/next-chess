import {MiddlewareFactory} from "@/types/middleware";
import {NextFetchEvent, NextRequest, NextResponse} from "next/server";
import {container} from "@/services/container";
import {DITypes, JsonTokenService} from "@/services";
import RouterHelper from "@/router/routerHelper";


const withGuard:MiddlewareFactory = (next)=>{
    return async (request:NextRequest, _next:NextFetchEvent)=>{
        if( request.nextUrl.pathname.includes("_next")
            || request.nextUrl.pathname.includes("assets"))
            return next(request, _next);

        //prevent inversify constructor error
        Object.getPrototypeOf(JsonTokenService.prototype).constructor = Object;
        const jwt = container.get<JsonTokenService>(DITypes.jwt);

        const nextUrl = request.nextUrl.pathname;
        const routerHelper = new RouterHelper(nextUrl);

        if(!routerHelper.isPrivate()) return next(request, _next);
        const userToken = request.cookies.get("token")?.value;
        if(!userToken) return NextResponse.redirect(new URL(RouterHelper.getDefaultPublic(), request.url));
        const isValid = await jwt.verify(userToken);
        if(!isValid) return NextResponse.redirect(new URL(RouterHelper.getDefaultPublic(), request.url));
        return next(request, _next);
    }
}

export default withGuard;
