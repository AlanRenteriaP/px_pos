// types.ts
export interface RawMaterial {
    id: number;
    product_name: string;
    abbreviation: string;
}

export interface MaterialType {
    material: RawMaterial;
    quantity: number;
}

export interface MenuItem {
    id?: string; // Optional because it will be set when creating a new menu item
    name: string;
    description: string;
    materials: MaterialType[];
}