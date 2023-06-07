export class AuthDTO{
    constructor(
        public id: string,
        public email: string,
        public role: string,
        public password: string,
        public name: string,
        public phone: string,
    ){}
}