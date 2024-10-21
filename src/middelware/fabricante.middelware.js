const{Fabricante} = require('../models')

validarFabricanteId = async(req,res,next) => {
    const id = req.params.id;
    const fabricante = await Fabricante.findOne({ where: { id } });
    if (!fabricante) {
        return res.status(404).json({ error: 'Fabricante no encontrado' });
    }
    next();
}

module.exports = {validarFabricanteId}