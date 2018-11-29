const express = require('express');
const router = express.Router();
const {quote} = require('../models')
/* GET Quote. */
router.get('/', async(req,res) => {

  try {
    const data = await quote.findAll();
    res.json(data)  
    
  } catch (error) {
    res.json(error)
  }
 
});

/* ADD Quote. */
router.post('/',async(req,res)=>{
  
  try {
    const {description} = req.body  
    const data = await quote.create({
      
      description
    })
    
    res.json(data)
  } catch (error) {
    res.json(error)
  }
})


/* UPDATE Quote. */
router.put('/:id',async(req,res)=>{

  try {
    const id = req.params.id
    const {description} = req.body
    const data = await quote.update(
      {
        
          
          description
      },
      {
        where : {
          id : id
        }
      }
    )
    res.json(data)
  } catch (error) {
    res.json(error)
  }


})


/* DELETE Quote. */
router.delete('/:id',async(req,res)=> {
    
    try {
      const id = req.params.id
      const data = await quote.destroy({
        where : {
          id : id
        }
      })
      res.json(data)
      
    } catch (error) {
      res.json(error)
    }
})

module.exports = router;
