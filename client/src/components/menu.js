import style from '../styles/Menu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu } from '@/redux/features/menu/menuSlice';
import Image from 'next/image';
import Link from 'next/link';


export default function Menu(){

    const { isOpen } = useSelector(state => state.menu);
    const dispatch = useDispatch();

    

    const handlerOpenMenu = () => {
        dispatch(openMenu()); 
    };
    

    return (
        <div className={style.container} style={{display: isOpen ? 'block' : 'none'}}> 
            <button className={style.close} onClick={handlerOpenMenu}>Close</button>

            <div className={style.links}>
                    <Link href="/nosotros">
                        <button className={style.btn}>Nosotros {'>'}</button>
                    </Link>
                    <Link href="/categorias">
                        <button className={style.btn}>Categorias {'>'}</button>
                    </Link>
                    <Link href="/ofertas">
                        <button className={style.btn}>Ofertas {'>'}</button>
                    </Link>
                    <Link href="/sellProduct">
                        <button className={style.btn}>Vender {'>'}</button>
                    </Link>
                    <Link href="/faqs">
                        <button className={style.btn}>¿Necesitas ayuda? {'>'}</button>
                    </Link>
            </div>
            <div className={style.logo}>
                <Image priority src="/pacto-logo.png" alt="logo" width="85" height="88"/>
            </div>
        </div>
    )
}