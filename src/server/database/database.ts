import bcrypt from 'bcrypt'

interface User {
    id: number,
    password: string,
    name: string,
    email: string
}


let DB: User[] = []


export class DATABASE_ACTIONS {
    email: string
    name: string
    password: string

    constructor(email: string, name: string, password: string) {
        this.email = email,
        this.name = name,
        this.password = password
    }


    async Create() {
        this.password = await bcrypt.hash(this.password, 10)

        const newUser = {
            id: DB.length,
            password: this.password,
            name: this.name,
            email: this.email
        }

        DB.push(newUser)
    }

    Delete(id: number) {
        const index = DB.findIndex(account => account.id == id)

        DB.splice(index, 1)
    }
    
    Read() {
        return DB
    }
}