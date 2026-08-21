export interface ProductModel {
    readonly _id: number;
    name: string;
    price: number;
    quantity: number;
    category: string;
    photo?: string;
}
