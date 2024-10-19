const { Router } = require('express')
const productoRoutes = require('./producto.routes')
const router = Router()

router.use('/productos', productoRoutes)

module.exports = router