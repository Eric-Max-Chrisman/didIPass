import express, { Express } from 'express';
import { notUsed } from './controllers/controllerTest';
import CustomerController from './controllers/CustomerController';

const app: Express = express();
const PORT = 8091;

// Enable JSON Request body parsing
app.use(express.json());

app.get('/api/customers', CustomerController.getAllCustomers);
app.post('/api/customers', CustomerController.createNewCustomer);

app.get('/api/customers/:customerName', notUsed);
// GET http://localhost:8091/api/customer/Alice
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
