const{Producto} = require('../models')

const validarProductoId = async (req, res, next) => {
    const id = req.params.id;
    const producto = await Producto.findByPk(id);
    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    req.producto = producto;
    next();
};

module.exports = { validarProductoId };