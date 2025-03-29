export interface User{
    _id: string;
    email: string;
    name: {
        firstName:string,
        lastName:string
    };
    birthdate: Date;
    phone_number: string;
    approve: boolean;
    entry_date: Date;

    constructor(e_mail:string, name: string, password: string, birthdate: Date, phone_number: string, approve: boolean, entry_date: Date){
        this.e_mail= e_mail;
        this.name=name;
        this.password=password;
        this.birthdate=birthdate;
        this.phone_number=phone_number;
        this.approve=approve;
        this.entry_date=entry_date;
    }
}