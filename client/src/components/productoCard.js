import styles from "../styles/ProductoCard.module.css";
import Image from "next/image";
import Link from "next/link";
import img1 from '../../public/image/products/p1_1.jpg';

const hardProduct = {name: "Iphone 20", price: 125000, images: [img1]};


const ProductoCard = ({ producto = hardProduct }) => {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.nameContainer}>
                    <p>{producto.name}</p>
                </div>
                <p>{`$ ${producto.price}`}</p>
                {/* HARDCODEO DE LINK PARA EL BORRADOR INICIAL */}
                <Link href={"/"} className={styles.link}>
                    Ver Producto
                </Link>
            </div>
        </div>
    )
}

export default ProductoCard;