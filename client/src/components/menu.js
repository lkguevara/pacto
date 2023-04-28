import style from '../styles/Menu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { openMenu } from '@/redux/features/menu/menuSlice';
import Image from 'next/image';


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
                    <button className={style.btn}>Nosotros {'>'}</button>
                    <button className={style.btn}>Categorias {'>'}</button>
                    <button className={style.btn}>Ofertas {'>'}</button>
                    <Link href="/sellProduct">
                        <button className={style.btn}>Vender {'>'}</button>
                    </Link>
                    <button className={style.btn}>¿Necesitas ayuda? {'>'}</button>
            </div>
            <div className={style.logo}>
                <Image priority src="/pacto-logo.png" alt="logo" width="85" height="88"/>
            </div>
        </div>
    )
}