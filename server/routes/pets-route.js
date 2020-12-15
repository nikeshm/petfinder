// Import express
const express = require('express')

// Import users controller
const petsController = require('../controllers/pets-controller.js')

// Create express router
const router = express.Router()


router.get('/all', petsController.petsGetAll)

// Export router
module.exports = router