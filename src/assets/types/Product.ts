export interface TProduct {
  id: string;
  name: string;
  uri: string;
  description: string;
  image_source: string;
  sub_category_id: string;
  price: number;
  flash_sale: boolean,
  flash_price: number,
  created_at: number,
  modified_at: number;
}