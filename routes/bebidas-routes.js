const express = require('express');
const {v4: uuiv4} = require('uuid');

const router = express.Router();

let Bebidas_Calientes = [
    {
      "id": 1,  
      "nombre": "Café Americano",
      "tamaño": "Grande",
      "precio": "2.50",
      "tipo": "Café"
    },
    {
        "id": 2,
      "nombre": "Latte",
      "tamaño": "Mediano",
      "precio": "3.00",
      "tipo": "Café"
    },
    {
        "id":3,
      "nombre": "Té Verde",
      "tamaño": "Grande",
      "precio": "2.00",
      "tipo": "Té"
    },
    {
        "id":4,
      "nombre": "Chocolate Caliente",
      "tamaño": "Pequeño",
      "precio": "2.50",
      "tipo": "Chocolate"
    },
    {
        "id":5, 
      "nombre": "Cappuccino",
      "tamaño": "Grande",
      "precio": "3.50",
      "tipo": "Café"
    }
  ];

router.get('/', (req, res, next)=>{
    res.json({Bebidas_Calientes});
})

router.get('/:bid', (req, res, next)=>{
    const bebida = Bebidas_Calientes.find(m=>{
        return m.id == req.params.bid;
    }) ;
    if(!bebida){
        const error = new Error('Bebida NO existe');
        error.code = 404;
        next(error);
     }else{
         res.json({bebida});
         console.log(bebida);
     }
});

router.get('/bebidas/:bnombre', (req, res, next)=>{
    const bebidas = Bebidas_Calientes.find(b=>{
        return b.nombre == req.params.bnombre
    });
    if(!bebidas){
        throw new HttpError('Bebida No existe', 404);
    }
    res.json({bebidas});
});

 router.post('/', (req, res, next)=>{
     const {id, nombre, tamaño, precio, tipo} = req.body;
     const createdBebida = {
         id, 
         nombre, 
         tamaño,
         precio,
         tipo
     };
     console.log(createdBebida);
     Bebidas_Calientes.push(createdBebida);
     res.status(201).json({bebida:createdBebida});

  })

  

 module.exports = router;