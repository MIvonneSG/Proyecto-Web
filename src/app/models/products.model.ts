
/*export interface IProduct {
    id:          number;
    name:       string;
    price:       number;
    description: string;
}*/

//app.quicktype.io para hacer la interfaz a partir del objeto


export interface IProduct {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}
