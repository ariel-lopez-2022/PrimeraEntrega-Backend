
const express = require('express');
const productsRoute = require('../src/routes/products.routes');
const server = express();

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use("/api/products", productsRoute);



server.listen(8080, ()=> {
    console.log('Servidor Listo en puerto 8080')
    
})











/*


server.get("/product/:pid", async (req , res)=>{
 const pid = req.params.pid
 let product = await Product.getProductById(pid);
  if (product == null ){
     res.send("product no encontrado")    
  } else{
      res.send(product)  

  }
 
})
*/