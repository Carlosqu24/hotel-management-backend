const express = require('express');
const router = express.Router();

const { 
      getCustomers,
      saveCustomer,
      editCustomer,
      deleteCustomer
} = require('../controllers/customer.controllers');

router.get('/', getCustomers);
router.post('/save-customer', saveCustomer)
router.put('/edit-customer/:id',  editCustomer);
router.delete('/delete-customer/:id', deleteCustomer);

module.exports = router;