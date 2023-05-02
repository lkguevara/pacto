import styles from "../styles/SortComponent.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { setOrderBy } from "@/redux/features/products/productsSlice";
import debounce from "@/utils/debounce";


const SortComponent = () => {
    // LÓGICA DEL COMPONENTE

    // Por el momento no se usa:
    // const { orderBy } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleOrderBy = (eventKey , event) => {
        const { name } = event.target;

        dispatch(setOrderBy(name));
    };

  const debouncedhandleOrderBy = debounce(handleOrderBy, 1000);


    // RENDERIZADO DEL COMPONENTE
    return (
        <div className={styles.container}>
            <label htmlFor="orderBy" className={styles.label}>Ordenar por:</label>
            <select name="orderBy" id="orderBy" onSelect={debouncedhandleOrderBy} className={styles.sortProducts}>
                <option value="" name='Asc-Name'>Nombre A-Z</option>
                <option value="" name='Des-Name'>Nombre Z-A</option>
                <option value="" name='Asc-Price'>Menor Precio</option>
                <option value="" name='Des-Price'>Mayor Precio</option>
            </select>
        </div>
    );
};

export default SortComponent;