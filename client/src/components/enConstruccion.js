import styles from "../styles/EnConstruccion.module.css";
import Image from "next/image";
import ilustracion from "../../public/image/enConstruccion.png"

const EnConstruccion = () => {
    return (
        <div className={styles.container}>
            <h1>Página en Construcción</h1>
            <div className={styles.imgContainer}>
            <Image priority src={ilustracion} alt=""/>
            </div>
        </div>
    )
}


export default EnConstruccion;