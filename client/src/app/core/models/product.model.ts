export interface ProductModel {
    readonly id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
    photo?: string;
}
