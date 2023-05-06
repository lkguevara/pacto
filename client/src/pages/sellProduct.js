import Head from "next/head";
import Link from "next/link";
import Router from 'next/router';
import Image from "next/image";
import style from "../styles/sellProduct.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAddProductsAsync } from "@/redux/features/products/productsSlice";


export default function sellProduct(){
    const dispatch = useDispatch();

    const [product,setProduct] = useState({
        name:"",
        description:"",
        category:"",
        state:"",
        price:"",
        image:[]
    });

    const [previews, setPreviews] = useState([]);    

    const handleChange = (event)=>{
        const {name, value, files} = event.target;
        setProduct({
            ...product,
            [name]:value,
        });

        if(name === 'image'){
            setProduct({
                ...product,
                [name]:[...product.image, ...files]
            });

            // Pasos para poder previsualizar las imagenes antes de publicar el producto
            const filesArray = Array.from(files);
            const filesURL = filesArray.map(file => URL.createObjectURL(file));
            setPreviews([...previews, ...filesURL]);
        };
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = new FormData();
        form.append("name", product.name);
        form.append("description", product.description);
        form.append("category", product.category);

        //Al hacer submit del input agarra el valor "value1", "value2" etc, se debe modificar.
        form.append("state", product.state);
        form.append("price", product.price);

        if (product.subCategory) form.append("subCategory", product.subCategory);
        if (product.stock) form.append("stock", product.stock);
        product.image.forEach((image) => {
            form.append('images', image);
        });

        const entries = form.entries();
        for(let pair of entries) {
            console.log(pair[0]+ ', ' + pair[1]); 
        };

        // Enviar el formulario al servidor
        dispatch(fetchAddProductsAsync(form));

        // Limpiar el formulario
        setProduct({
            name:"",
            description:"",
            category:"",
            state:"",
            price:"",
            image:[]
        });
        // Liberar los objetos URL creados para previsualizar las imagenes
        previews.forEach(preview => URL.revokeObjectURL(preview));
        // Limpiar el array de previsualizaciones
        setPreviews([]);

        // PROVISORIAMENTE:
        // Redirigir a la página de productos
        Router.push('/productos');

        // PRÓXIMAMENTE:
        // Redirigir a la página de detalle del producto publicado

    }

    return (
        <div className= {style.container}>
            <Head>
                <title>PACTO | Publica tu producto</title>
                <meta name="description" content="PACTO" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/pacto-logo.png" />
            </Head>

            <div className={style.main}>
                <Link href="/">
                    <Image className= {style.logo} priority src="/pacto-logo.png" alt="logo" width="85" height="88"/>
                </Link>

                <div className={style.titleProdut}>
                    <h1>Publica tu producto</h1>
                    <p>
                        <Link href="/productos" title="Volver a la lista de productos">
                        Todos los productos 
                        </Link> / 
                        <span>Agregar un producto</span>
                    </p>
                </div>

                <div className={style.formContainer}>
                    <form className={style.formProduct} onSubmit={handleSubmit}>
                        <div className={style.formSection}>
                            <h3>Nombre & descripción</h3>
                            <hr />

                            <label htmlFor="name">Nombre del producto</label>
                            <input onChange={handleChange} type="text" id="name" name="name" placeholder="Ej: iPhone 12 Pro Max"/>

                            <label htmlFor="description">Descripción</label>
                            <textarea onChange={handleChange} id="description" name="description" placeholder="Ingresar la descripción del producto"></textarea>
                        </div>

                        <div className={style.formSection}>
                            <h3>Información básica</h3>
                            <hr />
                            
                            <div className={style.basicInfo}>
                                <div className={style.infoItem}>
                                    <label htmlFor="category">Categoría</label>
                                    <select id="category" name="category"  value={product.category} onChange={handleChange}>
                                        <option value="select">selecciona una opción</option>
                                        <option value="celulares">Celulares</option>
                                        <option value="computadoras" selected>Computadoras</option>
                                        <option value="accesorios">Accesorios</option>
                                        <option value="otros">Otros</option>
                                    </select>
                                </div>

                                <div className={style.infoItem}>
                                    <label htmlFor="subCategory">Sub-categoría</label>
                                    <select id="subCategory" name="subCategory"  value={product.subCategory} onChange={handleChange}>
                                        <option value="select">selecciona una opción</option>
                                        <option value="celulares">Celulares</option>
                                        <option value="computadoras" selected>Computadoras</option>
                                        <option value="accesorios">Accesorios</option>
                                        <option value="otros">Otros</option>
                                    </select>
                                </div>

                                <div className={style.infoItem}>
                                <label htmlFor="status">Estado del producto</label>
                                    <select id="status" name="state" value={product.status} onChange={handleChange}>
                                        <option value="select">selecciona una opción</option>
                                        <option value="value1">Nuevo</option>
                                        <option value="nuevo" selected>Como nuevo</option>
                                        <option value="muy bueno" selected>Muy bueno</option>
                                        <option value="bueno" selected>Bueno</option>
                                        <option value="regular" selected>Regular</option>
                                        <option value="malo" selected>Malo</option>
                                        <option value="para piezas" selected>Para piezas</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className={style.basicInfo}>
                                <div className={style.infoItem}>
                                    <label htmlFor="stock">Stock</label>
                                    <input type="number" id="stock" name="stock" placeholder="Ej: 1" value={product.stock} onChange={handleChange}/>
                                </div>

                                <div className={style.infoItem}>
                                    <label htmlFor="price">Precio</label>
                                    <input type="number" id="price" name="price" placeholder="Ej: 100000" value={product.price} onChange={handleChange}/>
                                </div>
                            </div>
                        </div>

                        <div className={style.formSection}>
                            <h3>Cargar Fotos</h3>
                            <hr />
                            <label htmlFor="image">{"Selecciona hasta 4 fotos"}</label>
                            <input className={style.photoSelector} 
                            type="file" 
                            id="image" 
                            name="image" 
                            accept=".jpg, .jpeg, .png" 
                            onChange={handleChange} 
                            multiple 
                            />
                            <p className={style.infoSmall}>Formatos admitidos: .jpg o.png</p>

                            {/* Sección para previsualizar las imágenes seleccionadas */}
                            {/* Por restricciones de tiempo aún sin implementar funcionalidad de eliminar imagen seleccionada */}
                            <div className={style.previewsContainer}>
                                {
                                    previews.map((preview, index) => (
                                        <div key={index} className={style.previewItem}>
                                            <Image className= {style.previewImage} priority src={preview} alt="preview" width="100" height="100"/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>


                        <div className={style.buttons}>
                            <button className={style.buttonSubmit} type="submit">Publicar</button>
                            <button className={style.buttonCancel} type="reset">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}