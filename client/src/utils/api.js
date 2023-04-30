import axios from "axios";
import { useRouter } from "next/router";



//HACE LAS PETICIONES AL BACK:
export const fetchProducts = async (path) => {
  // {categorias,price,status}
  // const  {categoria,subcategoria} = categorias

  // console.log(price);
  // console.log(categoria,subcategoria);
  // console.log(status);
  // console.log(path);



   console.log(`${API_URL}${path}`);

  
  // const params = {
  //   ...filters,
  //   orderBy,
  //   page,
  // };


  try {



    // return response.data;

  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};





