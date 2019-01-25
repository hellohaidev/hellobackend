const express = require('express')
const router = express.Router();
const request = require('request')
const axios = require('axios')
const {tblmap} = require('../models');



/**
 * =================================================
 * @author Adi Rahman                               
 * @description List All service API google maps
 * =================================================
 */

/**
 * @description Service Google Maps API place marker  
 */

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

/**
 * @description Service distance google maps Api
 */

router.get('/route',async(req,res)=>{

    try {

        let idorigin = req.query.origin
        let iddestination = req.query.destination
        let url = `https://maps.googleapis.com/maps/api/directions/json?origin=${idorigin}&destination=${iddestination}&key=AIzaSyDI6V_nRIn8zAzfJuBNpzdQbV33jWWb4Ps`
        const data = await axios.get(url)
        let hasildata = data.data
        res.json(hasildata)

    } catch (error) {
        res.json(error)
    }
})

module.exports = router
