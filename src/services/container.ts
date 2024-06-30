import "reflect-metadata"
import {Container} from "inversify";
import {DITypes, JsonTokenService} from "@/services/index";




const container = new Container();
container.bind<Uint8Array>(DITypes.token).toConstantValue(new TextEncoder().encode(process.env.JWT_SECRET!));
container.bind<JsonTokenService>(DITypes.jwt).to(JsonTokenService)

export {container};




