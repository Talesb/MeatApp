export class User {

    constructor(public email: string, public name: string, private password: string) {

    }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: { [key: string]: User } = {
    'isabele@gmail.com': new User('isabele@gmail.com', 'Isabele', '123'),
    'joao@gmail.com': new User('joao@gmail.com', 'Joao', '1234')
}

