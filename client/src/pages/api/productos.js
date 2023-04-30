
export default function handler(req, res) {
    try {
      const { categoria, subcategoria, priceMin, priceMax, status, sort_by, page } = req.query;
      let productosFiltrados = [];
      console.log(req.query);


      if(categoria === 'undefined' && priceMin === '0' && priceMax === '100' &&  !status && sort_by === 'default' && page === '1'){
        res.status(200).json({productos:[`Devuelve todos los productos: 150`]});

    }
  
      if (categoria !== 'undefined' ) {
        // Si se proporciona la categoría, filtrar los productos por categoría
        productosFiltrados.push('filtrados por categoria' + ' ' + categoria.toUpperCase() + ' ' + 'y subcategoria' + ' ' + subcategoria.toUpperCase())
      } 
  
      if (priceMin !== '0') {
        // Si se proporciona el precio mínimo, filtrar los productos por precio mínimo
        productosFiltrados.push(`filtrado por PRECIO MINIMO ${priceMin}`);
      }
  
      if (priceMax !== '100') {
        // Si se proporciona el precio máximo, filtrar los productos por precio máximo
        productosFiltrados.push(`filtrado por PRECIO MAXIMO ${priceMax}`);
      }
  
      if (status) {
        // Si se proporciona el estado, filtrar los productos por estado
        productosFiltrados.push(`filtrado por status ${status.toUpperCase()}`);
      }
  
      if (sort_by !== 'default') {
        // Si se proporciona el ordenamiento, ordenar los productos
        productosFiltrados.push(`Ordenamiento por ${sort_by.toUpperCase()}`);
      }
  
      if (page > 1) {
        // Si se proporciona la página, paginar los productos
        productosFiltrados.push(`Paginado ${page}`);
      }
  
      res.status(200).json({
        productos: [`Devuelve los productos filtrados: ${productosFiltrados}`],
      });
    } catch (e) {
      // Manejar errores
    }
  }