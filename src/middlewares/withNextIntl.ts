import {MiddlewareFactory} from "@/types/middleware";
import {NextFetchEvent, NextRequest} from "next/server";
import createMiddleware from "next-intl/middleware";


const locales = ['en', 'de'];
const withMiddlewareFactory:MiddlewareFactory = (next)=>{
    return async (request:NextRequest, _next:NextFetchEvent)=>{
        if( request.nextUrl.pathname.includes("_next")
            || request.nextUrl.pathname.includes("assets"))
            return next(request, _next);

        return createMiddleware({locales, defaultLocale: 'en', localePrefix:"always"})(request);
    }
}


export default withMiddlewareFactory;
