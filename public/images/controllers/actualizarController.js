const Product = require('../database/models/Product');

const actualizar = async (req, res) => {
  const id = req.params.id;
  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = {
  actualizar,
};