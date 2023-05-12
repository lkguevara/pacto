import style from "../../styles/cart/car.module.css";
import Image from "next/image";

export default function productCart() {
    return (
        <div className={style.products}>
            <Image className={style.productImage} src="/image/products/p1_1.jpg" width={100} height={100} />
            <div className={style.productInfo}>
                <p>Iphone 12</p>
                <p>$ 1000</p>
                <div>
                    <div className={style.quantity}>
                        <Image src="/image/menos.png" width={10} height={10} />
                        <input type="text" className={style.inputQuantity} value="1" />
                        <Image src="/image/mas.png" width={10} height={10} />
                    </div>
                    <p className={style.buttonDelete}>Eliminar</p>
                </div>
            </div>
        </div>
    )
}