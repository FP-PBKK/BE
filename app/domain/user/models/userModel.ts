export class UserModel{
    constructor(
        public id: string,
        public role_id: string,
        public name: string,
        public email: string,
        public password: string,
        public phone_number: string,
        public created_at?: string,
        public updated_at?: string
    ){}

    getDataUserArr(){
        return [
            this.id,
            this.role_id,
            this.name,
            this.email,
            this.password,
            this.phone_number,
            new Date(),
            new Date()
        ]
    }
}