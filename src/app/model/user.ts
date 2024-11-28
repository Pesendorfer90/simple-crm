export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCpde: number;
    city: string;
    email: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCpde = obj ? obj.zipCpde : '';
        this.city = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCpde: this.zipCpde,
            city: this.city,
            email: this.email,
        }
    }
}
