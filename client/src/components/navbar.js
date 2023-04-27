import style from '../styles/NavBar.module.css';
import Image from 'next/image';
import SearchBar from './searchbar';
import Link from 'next/link';


export default function NavBar(){

    return (
        <nav className={style.container}>

            <Image priority src="/pacto-logo.png" alt="logo" width="85" height="88"/>

            <div className={style.navigation}>
                <div>
                    <SearchBar />
                </div>
                <div className={style.links}>
                    <button className={style.btn}>Nosotros</button>
                    <button className={style.btn}>Categorias</button>
                    <button className={style.btn}>Ofertas</button>
                    <button className={style.btn}>Formas de pago</button>
                    <button className={style.btn}>¿Necesitas ayuda?</button>
                </div>
            </div>

            <div className={style.user}>
                <button>
                    <Link href="/login">
                        <Image priority src="/image/user.svg" alt="user" width="30" height="30"/>
                    </Link>
                </button>
                <button>
                    <Image priority src="/image/cart.svg" alt="cart" width="30" height="30"/>
                </button>
            </div>

        </nav>
    )
}