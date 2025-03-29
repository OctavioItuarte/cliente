export class Product{
    _id?: string;
    name: string;
    price: number;
    description: string;
    stock: number;
    quantity: number;
    img: string;


    constructor(name: string, price: number, description: string, stock: number, quantity: number, img: string){
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.quantity = quantity;
        this.img = img;
    }
}