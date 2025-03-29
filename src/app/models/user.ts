export class User{
    _id?: string;
    e_mail: string;
    firstName: string;
    lastName: string;
    password: string;
    birthdate: Date;
    approve: boolean;
    entry_date: Date;

    constructor(e_mail:string, firstName: string, lastName: string, password: string, birthdate: Date, approve: boolean, entry_date: Date){
        this.e_mail= e_mail;
        this.firstName= firstName;
        this.lastName= lastName;
        this.password=password;
        this.birthdate=birthdate;
        this.approve=approve;
        this.entry_date=entry_date;
    }
}