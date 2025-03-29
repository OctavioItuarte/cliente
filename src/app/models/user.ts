export interface User{
    _id: string;
    email: string;
    name: {
        firstName:string,
        lastName:string
    };
    birthdate: Date;
    phoneNumber: string;
    registration_date: Date;
}