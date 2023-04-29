import styles from "../styles/SortComponent.module.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

const SortComponent = () => {
    // LÓGICA DEL COMPONENTE



    // RENDERIZADO DEL COMPONENTE
    return (
        <div className={styles.container}>
            <DropdownButton id="categorias" title="Ordenar Productos" className={styles.sortProducts} >
            <Dropdown.Item href="#/action-1">Por Nombre A-Z</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Por Nombre Z-A</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Menor Precio</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Mayor Precio</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default SortComponent;