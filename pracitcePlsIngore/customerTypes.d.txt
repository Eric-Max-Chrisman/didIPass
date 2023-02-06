// d.ts = type delecartion file
type Product = {
  name: string;
  price: number;
  quantity: number;
};

type Cart = Array<Products>;

type Customer = {
  name: string;
  cart: Cart;
  subtotal: number;
};

type CustomerManager = Record<string, Customer>;

type NewCustomerRequest = {
  name: string;
  cart: Cart;
};
