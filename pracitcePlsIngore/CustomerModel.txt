const customersManager: CustomerManager = {};

function getCustomerData(): CustomerManager {
  return customersManager;
}

function addCustomer(customerName: string, customer: Customer): boolean {
  if (customerName in customersManager) {
    return false;
  }
  customersManager[customerName] = customer;
  return true;
}

export { getCustomerData, addCustomer };
