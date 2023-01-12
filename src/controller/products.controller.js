const ProductManager = require("../clase");
const Product = new ProductManager("../../assets/product");

const getProducts = async (req, res) => {
  const limite = req.query.limit;
  if (limite == undefined && limite == 0) {
    let productos = await Product.getProducts();
    res.json(productos);
  }
  let productos = await Product.getProducts(limite);
  res.json(productos);
};

module.exports = {
  getProducts,
};
