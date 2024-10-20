const { Producto, Fabricante, Componente } = require('../models')

async function initialProductoFabricanteComponente2(){
    try {
        const producto1 = await Producto.create({nombre: "Laptop X200",descripcion: "Una laptop de alto rendimiento",precio: 1200.99,pathImg: "/images/productos/laptop-x200.jpg"})
        const producto2 = await Producto.create({nombre: "Smartphone S5",descripcion: "Teléfono inteligente con pantalla OLED",precio: 799.99,pathImg: "/images/productos/smartphone-s5.jpg"})

        const fabricante1 = await Fabricante.create({nombre: "TechCorp",direccion: "1234 Elm St, Ciudad",numeroContacto: "+123456789",pathImgPerfil: "/images/fabricantes/techcorp.jpg"})
        const fabricante2 = await Fabricante.create({nombre: "Innovatech",direccion: "4567 Oak Ave, Ciudad",numeroContacto: "+987654321",pathImgPerfil: "/images/fabricantes/innovatech.jpg"})

        const componente1 = await Componente.create({nombre: "Procesador Intel i7",descripcion: "Procesador de octava generación"})
        const componente2 = await Componente.create({nombre: "SSD 1TB",descripcion: "Disco sólido de 1TB de capacidad"})
        const componente3 = await Componente.create({nombre: "Pantalla OLED 6.5 pulgadas",descripcion: "Pantalla de alta definición"})
        const componente4 = await Componente.create({nombre: "Batería 4000mAh",descripcion: "Batería de larga duración"})
        
        await fabricante1.addProductos([producto1,producto2])
        await producto1.addFabricantes([fabricante1,fabricante2])
        await producto1.addComponentes([componente1,componente2])
        await producto2.addComponentes([componente3,componente4])

        console.log('Los datos y las relaciones fueron creados exitosamente')
    } catch (error) {
        console.log('Error al crear los datos: ', error)
    }
}

module.exports = initialProductoFabricanteComponente2