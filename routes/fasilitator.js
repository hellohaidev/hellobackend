const express = require('express');
const router = express.Router();
const {fasiljabar,fasillampung,fasiljakarta,fasiljateng,fasilyogya,fasiljatim,fasilbali,fasilntb,fasilsumut} = require('../models')


/**
 * @description Jabar API
 */

router.get('/jabar',async(req,res)=>{
    try {
        const data = await fasiljabar.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})

router.post('/jabar',async(req,res)=>{
    try {
        const {name,place,phone} = req.body
        const data = await fasiljabar.create({
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
        const data = await fasiljabar.update(
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
        const data = await fasiljabar.destroy({
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
        const data = await fasillampung.findAll()
        res.json(data)
     } catch (error) {
         res.json(error)
     }
 })

 router.post('/lampung',async(req,res)=>{
     try {
         const {name,place,phone} = req.body
         const data = await fasillampung.create(
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
        const data = await fasillampung.update(
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
        const data = await fasillampung.destroy({where:{id:id}})
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
         const data = await fasiljakarta.findAll()
         res.json(data)
     } catch (error) {
         res.json(error)
     }
 })
 router.post('/jakarta',async(req,res)=>{
    try {
        const {name,place,phone} = req.body
        const data = await fasiljakarta.create(
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
       const data = await fasiljakarta.update(
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
       const data = await fasiljakarta.destroy({where:{id:id}})
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
        const data = await fasiljateng.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/jateng',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await fasiljateng.create(
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
      const data = await fasiljateng.update(
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
      const data = await fasiljateng.destroy({where:{id:id}})
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
        const data = await fasilyogya.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/yogyakarta',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await fasilyogya.create(
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
      const data = await fasilyogya.update(
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
      const data = await fasilyogya.destroy({where:{id:id}})
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
        const data = await fasilbali.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/bali',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await fasilbali.create(
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
      const data = await fasilbali.update(
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
      const data = await fasilbali.destroy({where:{id:id}})
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
        const data = await fasiljatim.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/jatim',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await fasiljatim.create(
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
      const data = await fasiljatim.update(
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
      const data = await fasiljatim.destroy({where:{id:id}})
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
        const data = await fasilntb.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/ntb',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await fasilntb.create(
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
      const data = await fasilntb.update(
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
      const data = await fasilntb.destroy({where:{id:id}})
      res.json('sukse hapus data ' + id)
   } catch (error) {
       res.json(error)
   }
})

/**
 * @description Sumut API
 */

router.get('/sumut',async(req,res)=>{
    try {
        const data = await fasilsumut.findAll()
        res.json(data)
    } catch (error) {
        res.json(error)
    }
})
router.post('/sumut',async(req,res)=>{
   try {
       const {name,place,phone} = req.body
       const data = await fasilsumut.create(
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

router.put('/sumut/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const {name,place,phone} = req.body
      const data = await fasilsumut.update(
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

router.delete('/sumut/:id',async(req,res)=>{
   try {
      const id = req.params.id
      const data = await fasilsumut.destroy({where:{id:id}})
      res.json('sukse hapus data ' + data)
   } catch (error) {
       res.json(error)
   }
})
 

module.exports = router