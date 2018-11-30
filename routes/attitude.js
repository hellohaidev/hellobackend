const express = require('express');
const router = express.Router();
const {attitude} = require('../models')


router.get('/',async(req,res)=>{
    try {
        const data = await attitude.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.post('/',async(req,res)=>{
    try {
        const {description} = req.body
        const data = await attitude.create({
            description
        })
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.put('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const {description} = req.body
        const data = await attitude.update(
            {
                description
            },
            {where : {
                    id : id
                }
            }
        )
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const data = await attitude.destroy({
            where : {
                id : id
              }
        })
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router