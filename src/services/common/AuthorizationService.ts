import {injectable} from "inversify";
import crypto from "crypto";

@injectable()
class AuthorizationService{
    public passwordToHash(password:string):Promise<{salt:string, key:string}>{
        return new Promise((res, rej)=>{
            const salt = crypto.randomBytes(password.length).toString('hex');
            crypto.pbkdf2(password, salt, 1000, 32, "sha512", (err, key)=>{
                if(err) throw err;
                res({salt, key:key.toString("hex")});
            })
        })
    }

    /**
     * @throws {PasswordEquality}
     */
    public isHashEqual(hash1:string, hash2:string){
        if(hash1 === hash2) return true
    }
}



export default AuthorizationService;
