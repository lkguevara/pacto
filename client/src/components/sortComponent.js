import styles from "../styles/SortComponent.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { setOrderBy } from "@/redux/features/products/productsSlice";

const SortComponent = () => {
    // LÓGICA DEL COMPONENTE

    // Por el momento no se usa:
    // const { orderBy } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleOrderBy = (eventKey , event) => {
        const { name } = event.target;

        dispatch(setOrderBy(name));
    };

    // RENDERIZADO DEL COMPONENTE
    return (
        <div className={styles.container}>
            <DropdownButton id="categorias" title="Ordenar Productos" onSelect={handleOrderBy} className={styles.sortProducts} >
            <Dropdown.Item name='Asc-Name'>Por Nombre A-Z</Dropdown.Item>
            <Dropdown.Item name='Des-Name'>Por Nombre Z-A</Dropdown.Item>
            <Dropdown.Item name='Asc-Price'>Menor Precio</Dropdown.Item>
            <Dropdown.Item name='Des-Price'>Mayor Precio</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default SortComponent;