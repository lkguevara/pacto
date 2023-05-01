import styles from "../styles/Paginado.module.css";
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "@/redux/features/products/productsSlice";
import debounce from "@/utils/debounce";

const Paginado = () => {
    // LÓGICA DEL COMPONENTE

    const { page } = useSelector(state => state.products);
    const dispatch = useDispatch();

    const handleCurrentPage = (e) => {
        const { name } = e.target;

        if(name === 'prev' & page > 1){
            dispatch(setPage(page - 1));
        };
        if(name === 'next'){
            dispatch(setPage(page + 1));
        };
    }

  const debouncedhandleCurrentPage = debounce(handleCurrentPage, 1000);

    // RENDERIZADO DEL COMPONENTE
    return (
        <div className={styles.container}>
            <Pagination className={styles.pagination}>
                <Pagination.Prev name='prev' onClick={debouncedhandleCurrentPage} />
                <Pagination.Item active>{page}</Pagination.Item>
                <Pagination.Next name='next' onClick={debouncedhandleCurrentPage} />
            </Pagination>
        </div>
    );
};

export default Paginado;