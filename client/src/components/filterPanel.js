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
import { setFilters } from "@/redux/features/products/productsSlice";
import {AUDIO,BELLEZA,SALUD,FIESTAS,JUEGOS,HERAMIENTAS,INSTRUMENTOS,CONSOLAS,PAPELERIA,AGRO,ANTIGUEDADESYCOLECCIONES,ACCESORIOSVEHICULOS,ELECTRODOMESTICOS,LIBROS,CELULARES,COMPUTACION,VIDEO } from "@/utils/subcategoria";
import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from "next/dist/shared/lib/constants";
const MIN = 0;
const MAX = 1000000;


const FilterPanel = () => {
  
    const dispatch = useDispatch()
    const filters = useSelector(state => state.products.filters)
    let timeoutId

    // LÓGICA DEL COMPONENTE
      const handleCategoriaSelect = (eventKey, event) => {
        const {text,dataset} = event.target
        
        dispatch(setFilters({
          ...filters,
          categorias: {categoria: dataset.categoria, subcategoria: text}
        }));
      }

      const handlerFilterStatus = (e) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const { value, checked } = e.target;
          if (checked && !filters.status.includes(value)) {
            dispatch(setFilters({ ...filters, status: [...filters.status, value] }));
          } else if(!checked) {
            dispatch(setFilters({ ...filters, status: filters.status.filter(state => state !== value) }));
          }
        }, 1000); 
      }

    
    const handlePriceChange = (newValue) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        dispatch(setFilters({
          ...filters,
          price: {
            min: newValue[0],
            max: newValue[1]
          }
        }))
      }, 1000); 
    }



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
                  {/* audio */}
                  <DropdownButton id="categorias" title="Audio" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                    {AUDIO.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Audio" >{subcategoria.name}</Dropdown.Item>
                      )}
                  </DropdownButton>
                    {/* video */}
                    <DropdownButton id="categorias" title="Video" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                    {VIDEO.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Video">{subcategoria.name}</Dropdown.Item>
                      )}
                    </DropdownButton>
                    {/* computacion */}
                    <DropdownButton id="categorias" title="Computacion" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                      {COMPUTACION.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Computacion">{subcategoria.name}</Dropdown.Item>
                      )}
                    </DropdownButton>
                  {/* telefonos */}
                  <DropdownButton id="categorias" title="Celulares y Telefonos" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                    {CELULARES.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Celulares y Telefonos">{subcategoria.name}</Dropdown.Item>
                      )}
                  </DropdownButton>
                  {/* libros */}
                  <DropdownButton id="categorias" title="Libros físicos" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                    {LIBROS.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Libros físicos">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/* Electrodomesticos */}
                <DropdownButton id="categorias" title="Electrodomésticos" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {ELECTRODOMESTICOS.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Electrodomésticos">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/* BellezayCuidado */}
                <DropdownButton id="categorias" title="Belleza y cuidado personal" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {BELLEZA.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Belleza y cuidado personal">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/* AccesoriosVehiculo */}
                <DropdownButton id="categorias" title="Accesorios para vehiculos" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {ACCESORIOSVEHICULOS.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Accesorios para vehiculos">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/* Agro */}
                <DropdownButton id="categorias" title="Agro" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {AGRO.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Agro">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/* Antiguedades y colecciones */}
                <DropdownButton id="categorias" title="Antiguedades y colecciones" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {ANTIGUEDADESYCOLECCIONES.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Antiguedades y colecciones">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/* Papeleria y mobiliario de negocio */}
                <DropdownButton id="categorias" title="Papeleria y mobiliario de negocio" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {PAPELERIA.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Papeleria y mobiliario de negocio">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/* Consolas y videojuegos */}
                <DropdownButton id="categorias" title="Consolas y videojuegos" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {CONSOLAS.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Consolas y videojuegos">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/* Herramientas, Audio y video */}
                <DropdownButton id="categorias" title="Herramientas, Audio y video" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {HERAMIENTAS.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Herramientas, Audio y video">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/*Instrumentos musicales */}
                <DropdownButton id="categorias" title="Instrumentos musicales" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {INSTRUMENTOS.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Instrumentos musicales">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/*Juegos y juguetes*/}
                <DropdownButton id="categorias" title="Juegos y juguetes" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {JUEGOS.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Juegos y juguetes">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/*Fiestas y piñatas*/}
                <DropdownButton id="categorias" title="Fiestas y piñatas" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {FIESTAS.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Fiestas y piñatas">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/*Fiestas y piñatas*/}
                <DropdownButton id="categorias" title="Fiestas y piñatas" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {FIESTAS.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name}href="#" data-categoria="Fiestas y piñatas">{subcategoria.name}</Dropdown.Item>
                      )}
                </DropdownButton>
                {/*Salud y equipamento medico*/}
                <DropdownButton id="categorias" title="Salud y equipamento medico" className={styles.selectItem} onSelect={handleCategoriaSelect}>
                  {SALUD.map(subcategoria =>
                      <Dropdown.Item key={subcategoria.name} href="#" data-categoria="Salud y equipamento medico">{subcategoria.name}</Dropdown.Item>
                      )}
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
                        <input type="checkbox" id='Nuevo' value='Nuevo' onChange={handlerFilterStatus} className={styles.checkItem} />
                        <label htmlFor="" className={styles.labelItem} >Nuevo</label>
                      </div>

                      <div className={styles.sectionItem}>
                        <input type="checkbox" id='Usado' value='Usado' onChange={handlerFilterStatus}  className={styles.checkItem} />
                        <label htmlFor="" className={styles.labelItem} >Usado</label>
                      </div>

                      <div className={styles.sectionItem}>
                        <input type="checkbox" id='Reacondicionado' value='Reacondicionado' onChange={handlerFilterStatus}  className={styles.checkItem} />
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
                        defaultValue={[filters.price.min, filters.price.max]}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        pearling
                        minDistance={10}
                        
                        value={[filters.price.min, filters.price.max]}
                        onChange={(newValue) => {handlePriceChange(newValue)}}
                      />

                      {/* Inputs para el rango de precios */}
                      {/* {<div className={styles.sectionItem}>
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
                      </div> } */}
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