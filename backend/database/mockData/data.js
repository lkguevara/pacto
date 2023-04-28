const data = {
    products : [
        {
            "name": "Smartwatch Apple Watch Series 7 44mm GPS - Aluminio Azul Eléctrico",
            "images": [
            "https://picsum.photos/id/1019/300/200",
            "https://picsum.photos/id/1020/300/200",
            "https://picsum.photos/id/1021/300/200"
            ],
            "description": "El Apple Watch Series 7 con pantalla más grande y resistencia mejorada.",
            "state": "Nuevo",
            "price": 400000,
            "active": true,
            "label": null,
            "stock": 10,
            "user": "Maria López",
            "send": {
            "type": "Gratis",
            "days": "3-5"
            },
            "category": "Celulares y Telefonos",
            "subcategory" : "Smartwatches y accesorios",
            "questions": null,
            "reviews": null
            },
            
            {
            "name": "TV LG OLED CX 55'' 4K Ultra HD Smart TV",
            "images": [
            "https://picsum.photos/id/1022/300/200"
            ],
            "description": "Televisor OLED de LG, con un panel 4K Ultra HD de 55 pulgadas y la tecnología Smart TV.",
            "state": "Nuevo",
            "price": 4200000,
            "active": true,
            "label": null,
            "stock": 5,
            "user": "Pedro Martínez",
            "send": {
            "type": "Pago",
            "days": "1-3"
            },
            "category": "Video",
            "subcategory" : "Otros",
            "questions": null,
            "reviews": null
            },
            
            {
            "name": "Consola PlayStation 5 1TB Disco Duro",
            "images": [
            "https://picsum.photos/id/1023/300/200"
            ],
            "description": "La última consola de Sony con un disco duro de 1TB, una CPU AMD Zen 2 y una GPU AMD RDNA 2.",
            "state": "Nuevo",
            "price": 3500000,
            "active": true,
            "label": "Oferta",
            "stock": 3,
            "user": "Andrea Gómez",
            "send": {
            "type": "Pago",
            "days": "2-4"
            },
            "category": "Consolas y videojuegos",
            "subcategory" : "Videojuegos",
            "questions": null,
            "reviews": null
            },
            
            {
            "name": "MacBook Pro 13'' M1 Chip 8 Core 8GB RAM 256GB SSD",
            "images": [
            "https://picsum.photos/id/1024/300/200"
            ],
            "description": "La MacBook Pro 13'' con el procesador M1 de Apple, 8 núcleos de CPU, 8GB de RAM y 256GB de almacenamiento SSD.",
            "state": "Nuevo",
            "price": 3500000,
            "active": true,
            "label": null,
            "stock": 7,
            "user": "Juan Torres",
            "send": {
            "type": "Gratis",
            "days": "5-7"
            },
            "category": "Computación",
            "subcategory" : "Portátiles y accesorios",
            "questions": null,
            "reviews": null
            },
            {
                "name": "Reloj Casio G-Shock Resistente al Agua",
                "images": [
                  "https://picsum.photos/id/1025/400/300",
                  "https://picsum.photos/id/1035/400/300"
                ],
                "description": "Este reloj de la marca Casio es resistente al agua hasta 200 metros de profundidad. Además, cuenta con varias funciones como cronómetro, alarma y hora mundial.",
                "state": "Nuevo",
                "price": 500000,
                "active": true,
                "label": "Destacado",
                "stock": 10,
                "user": "Luisa Martínez",
                "send": "Todo el mundo",
                "category": "Celulares y Telefonos",
                "subcategory" : "Otros",
                "questions": null,
                "reviews": null
              },
              {
                "name": "Guitarra Eléctrica Gibson Les Paul",
                "images": [
                  "https://picsum.photos/id/1068/400/300"
                ],
                "description": "Esta guitarra eléctrica de la marca Gibson es el modelo Les Paul. Cuenta con pastillas humbucker y un cuerpo de caoba. Viene con un estuche rígido.",
                "state": "Excelente",
                "price": 2000000,
                "active": true,
                "label": "Nuevo",
                "stock": 5,
                "user": "Pedro García",
                "send": "Todo el mundo",
                "category": "Instrumentos musicales",
                "subcategory" : "Instrumentos de cuerda",
                "questions": null,
                "reviews": null
              },
              {
                "name": "Silla Ergonómica para Oficina",
                "images": [
                  "https://picsum.photos/id/1070/400/300",
                  "https://picsum.photos/id/1071/400/300"
                ],
                "description": "Esta silla ergonómica es perfecta para usar en la oficina. Tiene ajuste de altura, respaldo reclinable y apoyabrazos ajustables. Además, su diseño moderno la hace lucir muy elegante.",
                "state": "Bueno",
                "price": 400000,
                "active": true,
                "label": "Oferta",
                "stock": 20,
                "user": "María Rodríguez",
                "send": "Solo en Colombia",
                "category": "Computación",
                "subcategory" : "Otros",
                "questions": null,
                "reviews": null
              },
              {
                "name": "Camiseta Adidas Originals",
                "images": [
                  "https://picsum.photos/id/1041/500/500",
                  "https://picsum.photos/id/1042/500/500",
                  "https://picsum.photos/id/1043/500/500",
                  "https://picsum.photos/id/1044/500/500"
                ],
                "description": "Camiseta Adidas Originals de color negro y diseño clásico, hecha con materiales de alta calidad para garantizar durabilidad y comodidad.",
                "state": "Nuevo",
                "price": 45000,
                "active": true,
                "label": null,
                "stock": 20,
                "user": "Adidas",
                "send": {
                  "cost": 1000,
                  "estimatedDelivery": "3 días hábiles"
                },
                "category": "Belleza y cuidado personal",
                "subcategory" : "Otros",
                "questions": null,
                "reviews": null
              },
              
              {
                "name": "Laptop Dell Inspiron 15",
                "images": [
                  "https://picsum.photos/id/1018/500/500"
                ],
                "description": "Laptop Dell Inspiron 15 con procesador Intel Core i5, 8GB de RAM y disco duro de 512GB. Perfecta para trabajos de oficina y uso personal.",
                "state": "Nuevo",
                "price": 1200000,
                "active": true,
                "label": "Oferta",
                "stock": 5,
                "user": "Dell",
                "send": {
                  "cost": 0,
                  "estimatedDelivery": "5 días hábiles"
                },
                "category": "Computación",
                "subcategory" : "Portátiles y accesorios",
                "questions": null,
                "reviews": null
              },
              
              {
                "name": "Zapatos Puma RS-2K",
                "images": [
                  "https://picsum.photos/id/1051/500/500",
                  "https://picsum.photos/id/1052/500/500",
                  "https://picsum.photos/id/1053/500/500"
                ],
                "description": "Zapatos Puma RS-2K de color gris y diseño deportivo, con suela de goma antideslizante y materiales resistentes para mayor durabilidad.",
                "state": "Nuevo",
                "price": 99000,
                "active": true,
                "label": null,
                "stock": 10,
                "user": "Puma",
                "send": {
                  "cost": 1500,
                  "estimatedDelivery": "4 días hábiles"
                },
                "category": "Belleza y cuidado personal",
                "subcategory" : "Otros",
                "questions": null,
                "reviews": null
              }
    ]
}

module.exports = data