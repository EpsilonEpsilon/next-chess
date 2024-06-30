import {NextMiddleware, NextResponse} from "next/server";
import {MiddlewareFactory} from "@/types/middleware";

export default function stackMiddlewares(
    functions: MiddlewareFactory[] = [],
    index = 0
): NextMiddleware {

    const current = functions[index];
    if (!current) return () => NextResponse.next();
    const next = stackMiddlewares(functions, index + 1);
    return current(next);
}
