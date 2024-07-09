const  DITypes = {
    jwt: Symbol.for("JsonTokenService"),
    token:Symbol.for("tokenSecret"),
    authorization:Symbol.for("authorizationService")
} as const


export default DITypes;
