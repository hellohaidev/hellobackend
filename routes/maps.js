const express = require('express')
const router = express.Router();
const {tblmap} = require('../models');




router.get('/',async(req,res)=>{
    try {
        const data = await tblmap.findAll()
        res.json(data);
    } catch (error) {
        res.json(error)
    }
    
})

router.post('/',async(req,res)=>{
    try {
        const {name,latitude,longtitude,kode} = req.body
        const data = await tblmap.create(
            {
                name,
                latitude,
                longtitude,
                kode
            }
        )
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id',async(req,res) => {

    try {
        const id = req.params.id
        const {name,latitude,longtitude,kode} = req.body

        const data = await tblmap.update(
            {
                name,
                latitude,
                longtitude,
                kode
            },
            {
                where : {
                    id : id
                }
            }       
        )
        res.json(data)    
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id',async(req,res)=>{
    
    try {    
        const id = req.params.id
        const data = await tblmap.destroy(
            {
                where : {
                    id : id
                }
            }
        )
        res.json('sukses hapus data ' + data)   
    } catch (error) {
        console.log(error)
    }
})

module.exports = router
