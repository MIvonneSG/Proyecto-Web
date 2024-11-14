export const productList: Product[] = [
    { id: 1, name: "Cuaderno", price: 70, description: "Cuaderno de raya de 100 hojas" },
    { id: 2, name: "Libro", price: 560, description: "Learning Java for dummies" },
    { id: 3, name: "Cartulina", price: 30, description: "De colores de temporada" },
    { id: 4, name: "Lapiz", price: 15, description: "HB No 2 Marca Pelícano" },
    { id: 5, name: "Crayones", price: 70, description: "Marca Bic de varios colores" },
]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description: string;
}