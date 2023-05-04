import style from '../styles/NavBar.module.css';
import Image from 'next/image';
import SearchBar from './searchbar';
import Link from 'next/link';
import { useSelector ,useDispatch } from 'react-redux';
import { openMenu } from '@/redux/features/menu/menuSlice';


export default function NavBar(){

    const { isOpen } = useSelector(state => state.menu);
    const dispatch = useDispatch();

    

    const handlerOpenMenu = () => {
        dispatch(openMenu()); 
    };

    return (
        <nav className={style.container}>
            <div className={style.logo}>
                <Link href={"/"}>
                    <Image priority src="/pacto-logo.png" alt="logo" width="85" height="88"/>
                </Link>
            </div>

            <div className={style.menu} onClick={handlerOpenMenu}>
                <Image priority src="/image/menu.svg" alt="logo" width="30" height="30" />
            </div>

            <div className={style.navigation}>
                <div>
                    <SearchBar />
                </div>
                    {
                    !isOpen && 
                    <div className={style.links}>
                        <Link href="/nosotros" className={style.link}>
                            <button className={style.btn}>Nosotros</button>
                        </Link>
                        <Link href="/productos" className={style.link}>
                            <button className={style.btn}>Categorías</button>
                        </Link>
                        <Link href="/sellProduct" className={style.link}>
                            <button className={style.btn}>Vender</button>
                        </Link>
                        <Link href="/faqs" className={style.link}>
                            <button className={style.btn}>¿Necesitas ayuda?</button>
                        </Link>
                    </div>
                    }
            </div>

            <div className={style.user}>
                <button className={style.red}>
                    <Link href="/login">
                        <Image priority src="/image/user.svg" alt="user" width="35" height="35"/>
                    </Link>
                </button>
                <button>
                    <Link href="/cart">
                        <Image priority src="/image/cart.svg" alt="cart" width="35" height="35"/>
                    </Link>
                </button>
            </div>

        </nav>
    )
}