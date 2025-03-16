export type Product = {
    id?:number;
    title?: string;
    image?: string;
    price?: number;
    description?: string | null;
}

export type IndivualProduct = {
    id?:number;
    title?: string;
    image?: string;
    price?: number;
    description?: string | null;
} | null;