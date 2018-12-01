const express = require('express');
const router = express.Router();
const {provider} = require('../models')


router.get('/jabar',async(req,res)=>{
    try {
        const data = await provider.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.post('/jabar',async(req,res)=>{
    try {
        const {name,place,phone} = req.body
        const data = await provider.create({
            name,
            place,
            phone
        })
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.put('/jabar/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const {name,place,phone} = req.body
        const data = await provider.update(
            {
                name,
                place,
                phone
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

router.delete('/jabar/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const data = await provider.destroy({
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