var express = require('express');
var router = express.Router();
const {users} = require('../models');

/* GET users listing. */
router.get('/', async(req,res)=> {
  let data = await users.findAll();
  res.json(data)
});

module.exports = router;
