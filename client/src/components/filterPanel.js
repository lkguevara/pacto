import styles from "../styles/FilterPanel.module.css";
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slider";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "@/redux/features/products/productsSlice";
import { useEffect, useState } from "react";
import { filterPrice } from "@/components/filters/filterPrice";
import { filterProducts } from "@/redux/features/products/productsSlice";

const MIN = 0;
const MAX = 1000000;


const FilterPanel = () => {
    // LÓGICA DEL COMPONENTE
    const [price, setPrice] = useState({
        minimo: MIN,
        maximo: MAX,
      });
    
      const handlePriceChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setPrice({
          ...price,
          [name]: value,
        });
      };
    
      const handleSubmitFilterPrice = () => {
        dispatch(filterProducts(filterPrice(products.copyItems, price)));
        setPrice({
          ...price,
          minimo: "",
          maximo: "",
        });
      };


    // RENDERIZADO DEL COMPONENTE
    return (
        <div className={styles.container}>

            {/* Header del panel de filtrado */}
            <div className={styles.panelHeader}>
              <h3>FilterPanel</h3>
              <button className={styles.clearFiltersButton}>Borrar</button>
            </div>

            {/* Contenedor para los criterios de filtrado */}
            <div className={styles.panelBody}>

              {/* Sección para el filtrado por categorías */}
              <Accordion className={styles.panelSection}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Categorías</Accordion.Header>
                  <Accordion.Body>
                    <DropdownButton id="categorias" title="Categoría" className={styles.selectItem} >
                      <Dropdown.Item href="#/action-1">Categoría 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Categoría 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Categoría 3</Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton id="subcategorias" title="Sub-categoría" className={styles.selectItem} >
                      <Dropdown.Item href="#/action-1">Sub-categoría 1</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Sub-categoría 2</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Sub-categoría 3</Dropdown.Item>
                    </DropdownButton>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Sección para el filtrado por estado */}
              <Accordion className={styles.panelSection}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Estado</Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.sectionItem}>
                        <input type="checkbox" name="" id="" className={styles.checkItem} />
                        <label htmlFor="" className={styles.labelItem} >Nuevo</label>
                      </div>

                      <div className={styles.sectionItem}>
                        <input type="checkbox" name="" id="" className={styles.checkItem} />
                        <label htmlFor="" className={styles.labelItem} >Usado</label>
                      </div>

                      <div className={styles.sectionItem}>
                        <input type="checkbox" name="" id="" className={styles.checkItem} />
                        <label htmlFor="" className={styles.labelItem} >Reacondicionado</label>
                      </div>
                        
                    </Accordion.Body>
                  </Accordion.Item>
              </Accordion>

              {/* Sección para el filtrado por precio */}
              <Accordion className={styles.panelSection} >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Precio</Accordion.Header>
                    <Accordion.Body>

                      {/* Slider para el rango de precios*/}
                      <Slider
                        className={styles.priceSlider}
                        thumbClassName={styles.thumb}
                        defaultValue={[price.minimo, price.maximo]}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        pearling
                        minDistance={10}
                        value={[price.minimo, price.maximo]}
                        onChange={(value, index) => {setPrice(value)}}
                      />

                      {/* Inputs para el rango de precios */}
                      <div className={styles.sectionItem}>
                        <input
                          className={styles.priceInput}
                            name={"minimo"}
                            value={price.minimo}
                            type="text"
                            id="min-value"
                            placeholder="mínimo"
                            onChange={handlePriceChange}
                        />
                        <input
                          className={styles.priceInput}
                            value={price.maximo}
                            name={"maximo"}
                            type="text"
                            id="max-value"
                            placeholder="máximo"
                            onChange={handlePriceChange}
                        />
                        <button
                            className={styles.searchButton}
                            onClick={handleSubmitFilterPrice}
                            type="submit"
                        >
                          B
                        </button>
                      </div> 
                    </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
            </div>

            {/* Footer del panel de filtrado */}
            <div className={styles.mobilePanelFooter}>
              <button className={styles.closePanelButton}>Ver resultados</button>
            </div>
        </div>
    );
}

export default FilterPanel;