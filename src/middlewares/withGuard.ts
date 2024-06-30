import {MiddlewareFactory} from "@/types/middleware";
import {NextFetchEvent, NextRequest} from "next/server";

const withGuard:MiddlewareFactory = (next)=>{
    return async (request:NextRequest, _next:NextFetchEvent)=>{
        const nextUrl = request.nextUrl.pathname;

    }
}

export default withGuard;
