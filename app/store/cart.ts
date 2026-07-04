export type CartItem = {
  id: number;
  name: string;
  price: number;
};

export let cart: CartItem[] = [];

export function addToCart(item: CartItem) {
  cart.push(item);
}

export function getCart() {
  return cart;
}

export function clearCart() {
  cart = [];
}