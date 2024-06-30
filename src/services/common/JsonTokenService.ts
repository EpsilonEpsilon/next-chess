import * as jose from "jose"
import {JWTPayload} from "jose"
import "reflect-metadata"
import {injectable, inject} from "inversify";
import DITypes from "./../types"



@injectable()
class JsonToken {
    @inject(DITypes.token)
    private readonly secretKey!:Uint8Array

    async sign(payload:JWTPayload){
        const jwt =await new jose.SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('7d')
            .sign(this.secretKey);

        return jwt;
    }

    async verify(jwt:string){
        try{
            await jose.jwtVerify(jwt, this.secretKey);
            return true
        }catch (e){
            return false;
        }
    }
}


export default JsonToken;
