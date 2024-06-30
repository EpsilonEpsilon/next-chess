import {MiddlewareFactory} from "@/types/middleware";
import withNextIntl from "@/middlewares/withNextIntl";
import stackMiddlewares from "@/middlewares/stackMiddleware";

const middlewares:MiddlewareFactory[] = [withNextIntl];
export default stackMiddlewares(middlewares)
