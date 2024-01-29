const express = require('express');
const User= require('../model/UserModel');

const router = express.Router();  // Use express.Router() to create a router instance

router.get('/', (req, res) => {
    res.status(200).send("hello world working");
});

module.exports = router;
