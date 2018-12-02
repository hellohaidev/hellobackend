const express = require('express');
const router = express.Router();
const {provider,lampung,jakarta,jateng,yogyakarta,jatim,bali,ntb} = require('../models')


/**
 * @description Jabar API
 */

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

/**
 * @description Lampung API
 */

 router.get('/lampung',async(req,res)=>{
     try {
        const data = await lampung.findAll()
        res.json(data)
     } catch (error) {
         res.json(error)
     }
 })

 router.post('/lampung',async(req,res)=>{
     try {
         const {name,place,phone} = req.body
         const data = await lampung.create(
             {
                 name,
                 place,
                 phone
             }
         )
         res.json(data)
     } catch (error) {
         res.json(error)
     }
 })

 router.put('/lampung/:id',async(req,res)=>{
     try {
        const id = req.params.id
        const {name,place,phone} = req.body
        const data = await lampung.update(
            {
                name,
                place,
                phone
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

 router.delete('/lampung/:id',async(req,res)=>{
     try {
        const id = req.params.id
        const data = await lampung.destroy({where:{id:id}})
        res.json('sukse hapus data ' + id)
     } catch (error) {
         res.json(error)
     }
 })

 /**
 * @description Jakarta API
 */

 router.get('/jakarta',async(req,res)=>{
     try {
         const data = await jakarta.findAll()
         res.json(data)
     } catch (error) {
         res.json(error)
     }
 })
 router.post('/jakarta',async(req,res)=>{
    try {
        const {name,place,phone} = req.body
        const data = await jakarta.create(
            {
                name,
                place,
                phone
            }
        )
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.put('/jakarta/:id',async(req,res)=>{
    try {
       const id = req.params.id
       const {name,place,phone} = req.body
       const data = await jakarta.update(
           {
               name,
               place,
               phone
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

router.delete('/jakarta/:id',async(req,res)=>{
    try {
       const id = req.params.id
       const data = await jakarta.destroy({where:{id:id}})
       res.json('sukse hapus data ' + id)
    } catch (error) {
        res.json(error)
    }
})

/**
 * @description Jawa Tengah API
 */

router.get('/jateng',async(req,res)=>{
    try {
        const data = await jateng.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/jateng',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await jateng.create(
           {
               name,
               place,
               phone
           }
       )
       res.json(data)
   } catch (error) {
       res.json(error)
   }
})

router.put('/jateng/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const {name,place,phone} = req.body
      const data = await jateng.update(
          {
              name,
              place,
              phone
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

router.delete('/jateng/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const data = await jateng.destroy({where:{id:id}})
      res.json('sukse hapus data ' + id)
   } catch (error) {
       res.json(error)
   }
})

/**
 * @description Yogyakarta API
 */

router.get('/yogyakarta',async(req,res)=>{
    try {
        const data = await yogyakarta.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/yogyakarta',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await yogyakarta.create(
           {
               name,
               place,
               phone
           }
       )
       res.json(data)
   } catch (error) {
       res.json(error)
   }
})

router.put('/yogyakarta/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const {name,place,phone} = req.body
      const data = await yogyakarta.update(
          {
              name,
              place,
              phone
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

router.delete('/yogyakarta/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const data = await yogyakarta.destroy({where:{id:id}})
      res.json('sukse hapus data ' + id)
   } catch (error) {
       res.json(error)
   }
})

/**
 * @description Bali API
 */

router.get('/bali',async(req,res)=>{
    try {
        const data = await bali.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/bali',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await bali.create(
           {
               name,
               place,
               phone
           }
       )
       res.json(data)
   } catch (error) {
       res.json(error)
   }
})

router.put('/bali/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const {name,place,phone} = req.body
      const data = await bali.update(
          {
              name,
              place,
              phone
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

router.delete('/bali/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const data = await bali.destroy({where:{id:id}})
      res.json('sukse hapus data ' + id)
   } catch (error) {
       res.json(error)
   }
})

/**
 * @description Jatim API
 */

router.get('/jatim',async(req,res)=>{
    try {
        const data = await jatim.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/jatim',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await jatim.create(
           {
               name,
               place,
               phone
           }
       )
       res.json(data)
   } catch (error) {
       res.json(error)
   }
})

router.put('/jatim/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const {name,place,phone} = req.body
      const data = await jatim.update(
          {
              name,
              place,
              phone
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

router.delete('/jatim/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const data = await jatim.destroy({where:{id:id}})
      res.json('sukse hapus data ' + id)
   } catch (error) {
       res.json(error)
   }
})

/**
 * @description NTB API
 */

router.get('/ntb',async(req,res)=>{
    try {
        const data = await ntb.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/ntb',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await ntb.create(
           {
               name,
               place,
               phone
           }
       )
       res.json(data)
   } catch (error) {
       res.json(error)
   }
})

router.put('/ntb/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const {name,place,phone} = req.body
      const data = await ntb.update(
          {
              name,
              place,
              phone
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

router.delete('/ntb/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const data = await ntb.destroy({where:{id:id}})
      res.json('sukse hapus data ' + id)
   } catch (error) {
       res.json(error)
   }
})
 

module.exports = router