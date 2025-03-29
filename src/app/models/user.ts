export interface User{
    _id?: string;
    email: string;
    name: {
        firstName:string,
        lastName:string
    };
    birthdate: Date;
    entry_date: Date;
}