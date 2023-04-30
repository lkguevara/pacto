import React from "react";
import EnConstruccion from "@/components/enConstruccion";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import style from "@/styles/productDetail.module.css";
import Image from "next/image";

function producto() {
    const router = useRouter()
    const { producto } = router.query;
  return (
    <Layout>
        <h1 style={style.detailProduct}> {producto}</h1>
        
        <div className="informationProduct">
            <Image className= {style.imageProduct} priority src="/image/products/p1_1.jpg" alt="logo" width="150" height="150"/>
            <div className={style.infoProduct}>
                <h3>{producto}</h3>

                <div className="price">
                  <h4>$ 3.800.000 </h4>
                  <button>Ofertar</button>
                </div>

                <p>Gastos de envío calculados al momento de realizar tu compra.</p>
                <div className="information">
                  <div className="containerInfo">
                    <Image className= {style.truck} priority src="/image/truck.png" alt="truck" width="15" height="15"/>
                    <p>Envío: <span>NACIONAL</span></p>
                  </div>
                  <div className="containerInfo">
                    <Image className= {style.truck} priority src="/image/devolucion.png" alt="devolucion" width="15" height="15"/>
                    <p>Devolución: <span>GRATIS</span></p>
                  </div>
                  <div className="containerInfo">
                    <Image className= {style.truck} priority src="/image/garantia.png" alt="garantia" width="15" height="15"/>
                    <p>Garantía: <span>06 MESES</span></p>
                  </div>
                </div>
                
                <p>Puedes recibir tu pedido al día siguiente de tu compra. Conoce el tiempo exacto, una vez confirmes la dirección de entrega</p>

                <div className="stock">
                  <p>Stock: <span>Disponible</span></p>
                  <label>Cantidad</label>
                  <input type="number" min="1" max="4" placeholder="1"/>
                  <p>Unidades disponibles: <span>4</span></p>
                  <p>Información del vendedor ℹ️</p>
                </div>

                <div className="buttons">
                  <button>Agregar al carrito</button>
                  <button>Comprar ahora</button>
                </div>
            </div>
        </div>

        <div className="descriptionProduct">
          <h3>Descripción</h3>
          <p>El Samsung Galaxy Xcover 4s es un smartphone Android con certificación IP68 que lo hace resistente al agua y al polvo. Entre sus características se destacan una pantalla HD de 5 pulgadas, procesador Exynos 7885 de ocho núcleos con 3GB de RAM y 32GB de almacenamiento interno, cámara principal de 16 MP, cámara frontal de 5 MP, batería de 2800 mAh, lector de huellas dactilares, y corre Android 9.0 Pie.</p>
        </div>

        <div className="preguntasRespuestas">
          <h3>Preguntas y respuestas</h3>
          <div className="containerPregunta">
            <h4>Preguntale al vendedor</h4>
            <input type="text" placeholder="Escribe tu pregunta"/>
            <button>Pregntar</button>
          </div>

          <h4>Últimas realizadas</h4>
          <div className="containerPreguntas">
            <div className="pregunta">
              <p>¿El producto es nuevo?</p>
              <p>Si, el producto es nuevo</p>
            </div>
          </div>
        </div>
            

    </Layout>
  )
}

export default producto;


