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

    getDataUser(){
        return {
            id: this.id,
            role_id: this.role_id,
            name: this.name,
            email: this.email,
            password: this.password,
            phone_number: this.phone_number,
            created_at: new Date(),
            updated_at: new Date()
        }
    }
}