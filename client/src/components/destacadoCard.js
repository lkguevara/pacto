import styles from "../styles/DestacadoCard.module.css";
import Image from "next/image";
import Link from "next/link";

const DestacadoCard = ({ producto }) => {

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Link href={`productos/${producto.name}`}>
                    <Image src={producto.images[0]} alt={producto.name} width="400" height="285"/>
                </Link>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.nameContainer}>
                    <p>{producto.name}</p>
                </div>
                <p>{`$ ${producto.price}`}</p>
            </div>
            <Link href={`productos/${producto.name}`}>
                <button className={styles.buyNowButton} title="Ver Producto">
                    Ver Producto
                </button>  
            </Link>
        </div>
    )
}

export default DestacadoCard;