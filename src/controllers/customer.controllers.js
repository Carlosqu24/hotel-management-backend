const customerController = {};

const Customer = require('../models/Customer')

customerController.getCustomers = async (req, res) => {
      const customers = await Customer.find().sort({ date: 'desc' }).lean()

      res.json(customers);
};

customerController.saveCustomer = async (req, res) => {
      const { 
            firstName, 
            lastName, 
            email, 
            phoneNumber,
            address
      } = req.body;

      const newCustomer = new Customer({ 
            firstName, 
            lastName, 
            email, 
            phoneNumber,
            address
      });
      const savedCustomer = await newCustomer.save();

      res.json(savedCustomer);
};

customerController.editCustomer = async (req, res) => {
      const { 
            firstName, 
            lastName, 
            email, 
            phoneNumber,
            address
      } = req.body;

      const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, { firstName, lastName, email, phoneNumber, address });

      res.json(updatedCustomer)
};

customerController.deleteCustomer = async (req, res) => {
      const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);

      res.json(deletedCustomer);
};

module.exports = customerController;