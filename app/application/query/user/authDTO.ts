export class AuthDTO{
    constructor(
        public email: string,
        public role: string,
        public password: string
    ){}
}