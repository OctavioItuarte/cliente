export interface User{
    _id: string;
    email: string;
    name: {
        firstName:string,
        lastName:string
    };
    birthdate: Date;
    registration_date: Date;
}