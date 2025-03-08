export class Business{
    _id?: string;
    e_mail: string;
    name: string;
    password: string;
    address: string;
    phone_number: string;
    category: string;
    approve: boolean;
    entry_date: Date;

    constructor(e_mail: string, name: string, password: string, address: string, phone_number: string, category: string, approve: boolean, entry_date: Date){
        this.e_mail = e_mail;
        this.name = name;
        this.password = password;
        this.address = address;
        this.phone_number = phone_number;
        this.category = category;
        this.approve = approve;
        this.entry_date = entry_date;
    }
}