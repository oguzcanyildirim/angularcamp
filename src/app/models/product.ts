export interface Product {

    id: number;

    supplier_ids: string;

    product_code: string;

    product_name: string;

    description: string;

    standard_cost: number;

    list_price: number;

    reorder_level: number;

    target_level: number;

    quantity_per_unit: string;

    discontinued: number;

    minimum_reorder_quantity: number;

    category: string;

    attachments: string;
}
