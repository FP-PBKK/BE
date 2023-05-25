export class RoleModel{
    constructor(
        public id: string,
        public name: string,
        public created_at?: string,
        public updated_at?: string
    ){}

    getDataRoleArr(){
        return [
            this.id,
            this.name,
            new Date(),
            new Date()
        ]
    }
}