export interface PizzaModel {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface CartItem {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  size: number;
  type: number;
}
