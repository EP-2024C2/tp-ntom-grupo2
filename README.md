
# Estrategias de Persistencia - TP 2024

## Descripción del Proyecto

Han sido contratados/as por una empresa de manufactura para desarrollar un sistema interno de gestión de productos. La empresa fabrica una amplia gama de productos tecnológicos que requieren componentes específicos y son producidos por múltiples fabricantes asociados. Actualmente, el proceso de gestión de esta información es manual y está descentralizado, lo que genera demoras y problemas en la producción. La empresa busca automatizar y centralizar estos datos mediante un sistema web eficiente que permita gestionar los productos, fabricantes y componentes de manera integrada.

## Modelo Relacional a implementar

Basandose en el siguiente diagrama de entidad-relacion (DER) deberán generar los modelos y la asociaciones en Sequelize para que la API pueda interacturar con la base de datos a través de los Modelos.

![DER](DER.png)

### Clonar repositorio
Dentro de una terminal CMD o BASH copiar y dar enter a la siguiente línea para la instalación del repositorio en su pc.
```
git clone https://github.com/EP-2024C2/tp-ntom-grupo2.git
```

### Intalacion de dependencias
Debera contar con las dependencias de produccion y desarrollo necesarias de un proyecto node. Dentro del editor de código o en la misma terminal dentro del repositorio deberá correr el siguiente comando:

```npm i```


### Tips - Variables de entorno
- crear un archivo de nombre vacio con extensión dentro de la carpeta src (raíz)

    ```.env```
- Dentro del cual podra cambiar el puerto, el nombre , usuario, contraseña y tipo de base de datos, por defecto se encuentra sqlite, puerto 3008.


    ```
    DB_NAME = 'Nombre de base de datos';
    DB_USER = 'Usuario';
    DB_PASS = 'Contraseña';
    DB_HOST = 'Dirección IP';
    DB_DIALECT = Sqlite;
    PORT = 3000 
    ```
- El archivo de variables de entorno por configuración y seguridad no se clona junto al repositorio.

### Inicializar proyecto

El servicio estará corriento en http:localhost:3008  por defecto o en el puerto definido dentro de la variable de entorno.

### Verbo - recursos - status - Descripción


|Verbo|Recurso|Status code|Descripción|
|-----|-------|-----------|-----------|
| GET   | /productos | 200 | Obtener todos los productos |
| GET   | /productos/:id | 200, 404 | Obtener un producto en particular |
| POST  | /productos | 201, 400 | Crear un producto |
| PUT   | /productos/:id | 200, 404 | Modificar los datos de un producto en particular |
| DELETE| /productos/:id | 200, 404, 500 | Borrar un producto en particular |
| POST  | /productos/:id/fabricantes | 201, 404, 400 | Crear la asociación de producto con 1 o N fabricantes |
| GET   | /productos/:id/fabricantes | 200, 404 | Obtener todos los fabricantes de un producto |
| POST  | /productos/:id/componentes | 201, 404, 400 | Crear la asociación de producto con 1 o N componentes |
| GET   | /productos/:id/componentes | 200, 404 | Obtener todos los componentes de un producto |
| GET   | /fabricantes | 200 | Obtener todos los fabricantes |
| GET   | /fabricantes/:id | 200, 404 | Obtener un fabricante en particular |
| POST  | /fabricantes | 201, 400 | Crear un fabricante |
| PUT   | /fabricantes/:id | 200, 404 | Modificar los datos de un fabricante en particular |
| DELETE| /fabricantes/:id | 200, 404, 500 | Borrar un fabricante en particular |
| GET   | /fabricantes/:id/productos | 200, 404 | Obtener todos los productos de un fabricante |
| GET   | /componentes | 200 | Obtener todos los componentes |
| GET   | /componentes/:id | 200, 404 | Obtener un componente en particular |
| POST  | /componentes | 201, 400 | Crear un componente |
| PUT   | /componentes/:id | 200, 404 | Modificar los datos de un componente en particular |
| DELETE| /componentes/:id | 200, 404, 500 | Borrar un componente en particular |
| GET   | /componentes/:id/productos | 200, 404 | Obtener todos los productos de un componente |

## Ejemplos
A modo de ejemplo se muestra el resultado de algunas respuesta de los endpoind detallado en la tabla de la sección anterior.

Recurso:  **_/fabricantes/1/productos_**

Obtiene los datos del fabricante registrado con el id 1, con todos los productos que fabrica, incluyendo los atributos de cada producto y los componentes asociados a esos productos.

```
{
    "id": 1,
    "nombre": "TechCorp",
    "direccion": "1234 Elm St, Ciudad",
    "contacto": "+123456789",
    "pathImgPerfil": "/images/fabricantes/techcorp.jpg",
    "productos": [
        {
            "id": 1,
            "nombre": "Laptop X200",
            "descripcion": "Una laptop de alto rendimiento",
            "precio": 1200.99,
            "pathImg": "/images/productos/laptop-x200.jpg",
            "componentes": [
                {
                    "id": 1,
                    "nombre": "Procesador Intel i7",
                    "descripcion": "Procesador de octava generación"
                },
                {
                    "id": 2,
                    "nombre": "SSD 1TB",
                    "descripcion": "Disco sólido de 1TB de capacidad"
                }
            ]
        },
        {
            "id": 2,
            "nombre": "Smartphone S5",
            "descripcion": "Teléfono inteligente con pantalla OLED",
            "precio": 799.99,
            "pathImg": "/images/productos/smartphone-s5.jpg",
            "componentes": [
                {
                    "id": 3,
                    "nombre": "Pantalla OLED 6.5 pulgadas",
                    "descripcion": "Pantalla de alta definición"
                },
                {
                    "id": 4,
                    "nombre": "Batería 4000mAh",
                    "descripcion": "Batería de larga duración"
                }
            ]
        }
    ]
}
```

Recurso: **_/productos/1/fabricantes_**

Obtiene los datos del producto registrado con el id 1, con todos los fabricantes que lo producen, incluyendo los atributos de cada fabricante.

```
{
    "id": 1,
    "nombre": "Laptop X200",
    "descripcion": "Una laptop de alto rendimiento",
    "precio": 1200.99,
    "pathImg": "/images/productos/laptop-x200.jpg",
    "fabricantes": [
        {
            "id": 1,
            "nombre": "TechCorp",
            "direccion": "1234 Elm St, Ciudad",
            "contacto": "+123456789",
            "pathImgPerfil": "/images/fabricantes/techcorp.jpg"
        },
        {
            "id": 2,
            "nombre": "Innovatech",
            "direccion": "4567 Oak Ave, Ciudad",
            "contacto": "+987654321",
            "pathImgPerfil": "/images/fabricantes/innovatech.jpg"
        }
    ]
}
```





