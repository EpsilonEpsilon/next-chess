import {describe, expect, test} from 'vitest'
import {container} from "@/services/container";
import {DITypes, JsonTokenService} from "@/services";

describe("Services test", function(){
    describe("common", function(){
        describe("JsonTokenService", function (){
            test("sign / verify - success", async ()=>{
                const promise = async ()=>{
                    const jwt = container.get<JsonTokenService>(DITypes.jwt);
                    const token = await jwt.sign({username:"username", password:"password"});
                    return await jwt.verify(token);
                };

                expect(promise()).resolves.not.toThrow();
                expect(promise()).resolves.toBe(true);
            })
        })
    })
})
