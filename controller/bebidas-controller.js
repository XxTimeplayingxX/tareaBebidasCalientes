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

const getAllBebidas = (req, res, next)=>{
    res.json({Bebidas_Calientes});
}

const getBebidaById = (req, res, next)=>{
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
}

const getBebidaByNombre = (req, res, next)=>{
    const bebidas = Bebidas_Calientes.find(b=>{
        return b.nombre == req.params.bnombre
    });
    if(!bebidas){
        throw new HttpError('Bebida No existe', 404);
    }
    res.json({bebidas});
}

const addBebida = (req, res, next)=>{
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

 }

const updateBebida = (req, res, next)=>{
    const {nombre} = req.body;
    const BebidaId = req.params.bid;
  
    const updatedBebida = {... Bebidas_Calientes.find(b=>b.id ==BebidaId)};
    const BebidaIndex = Bebidas_Calientes.findIndex(b=>b.id == BebidaId);
  
    updatedBebida.nombre = nombre;
  
    Bebidas_Calientes[BebidaIndex] = updatedBebida;
  
    res.status(200).json({bebida: updatedBebida});
  }

const deleteBebida = (req, res, next)=>{
    const bebidaId = req.params.bid;
    console.log(bebidaId);
  
    Bebidas_Calientes = Bebidas_Calientes.filter(b=> b.id != bebidaId);
  
    res.status(200).json({message: 'Bebida Borrada'});
  }

exports.getAllBebidas = getAllBebidas;
exports.getBebidaById = getBebidaById;
exports.getBebidaByNombre = getBebidaByNombre;
exports.addBebida = addBebida;
exports.updateBebida = updateBebida;
exports.deleteBebida = deleteBebida;

