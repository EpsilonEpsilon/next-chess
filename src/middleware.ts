import {MiddlewareFactory} from "@/types/middleware";
import withNextIntl from "@/middlewares/withNextIntl";
import stackMiddlewares from "@/middlewares/stackMiddleware";
import withGuard from "@/middlewares/withGuard";

const middlewares:MiddlewareFactory[] = [withGuard, withNextIntl];
export default stackMiddlewares(middlewares)
