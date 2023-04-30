import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { setFilters, setOrderBy, setPage, fetchProductsAsync } from '../redux/features/products/productsSlice';


export default function ProductList() {

    const router = useRouter();
    const { query } = router;

    const { filters, orderBy, page} = useSelector(state => state.products);
    const dispatch = useDispatch();

    const updateURL = (newFilters, newOrderBy, newPage) => {

        const newQueryParams = {
            categoria: newFilters.categorias.categoria,
            subcategoria: newFilters.categorias.subcategoria,
            priceMin: newFilters.price.min,
            priceMax: newFilters.price.max,
            status: newFilters.status,
            sort_by: newOrderBy,
            page: newPage,
        };
    
        const newSearch = new URLSearchParams(newQueryParams).toString();
    
        router.push(`/productos?${newSearch}`, undefined, { shallow: true });
    };

    useEffect(() => {

        updateURL(filters, orderBy, page);

        // const filters = {};
        // const orderBy = query.sort_by || 'default';
        // const page = parseInt(query.page) || 1;


        // dispatch(setFilters(filters));
        // dispatch(setOrderBy(orderBy));
        // dispatch(setPage(page));

        // dispatch(fetchProductsAsync(filters, orderBy, page));

        }, [updateURL]);
    
    return (
        <h1>PRODUCTLIST</h1>
    )
}