const{Componente} = require('../models')

const validarComponenteId = async (req, res, next) => {
    const id = req.params.id;
    const componente = await Componente.findByPk(id);
    if (!componente) {
        return res.status(404).json({ error: 'Componente no encontrado' });
    }
    req.producto = componente;
    next();
};

module.exports = { validarComponenteId };