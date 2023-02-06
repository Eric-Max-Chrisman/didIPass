import { Request, Response } from 'express';
import { getCustomerData, addCustomer } from '../models/CustomerModel';

function getAllCustomers(req: Request, res: Response): void {
  res.json(getCustomerData());
}

function validateShoppingCart(cart: Cart): boolean {
  for (const product of cart) {
    if (product.quantity <= 0) {
      return false;
    }
  }
  return true;
}

function calculateSubtotal(cart: Cart): number {
  let subtotal = 0;

  for (const product of cart) {
    subtotal += product.price * product.quantity;
  }

  return subtotal;
}

function createNewCustomer(req: Request, res: Response): void {
  console.log('\nPOST /api/customers');
  console.log(req.body); // 1

  const { name, cart } = req.body as NewCustomerRequest;
  if (!validateShoppingCart(cart)) {
    res.sendStatus(400); // bad request
    return;
  }

  const subtotal: number = calculateSubtotal(cart);
  const newCustomer: Customer = { name, cart, subtotal };

  const didAddCustomer = addCustomer(name, newCustomer);
  if (!didAddCustomer) {
    res.sendStatus(409); // the customer already exist // confilct
    return;
  }

  res.json(req.body); // code 200
}

export default { getAllCustomers, createNewCustomer, calculateSubtotal, validateShoppingCart };
