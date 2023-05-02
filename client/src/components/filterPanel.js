import styles from "../styles/FilterPanel.module.css";
import Accordion from 'react-bootstrap/Accordion';
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
import debounce from "@/utils/debounce";
import { resetState } from "@/redux/features/products/productsSlice";
const MIN = 0;
const MAX = 1000000;


const FilterPanel = ({ isVisible, setVisibility }) => {
  
    const dispatch = useDispatch()
    const filters = useSelector(state => state.products.filters)
    let timeoutId

    // LÓGICA DEL COMPONENTE
      const handleCategoriaSelect = (event) => {
        const {name,value} = event.target
        console.log(name,value);
        const {text,dataset} = event.target
        
        dispatch(setFilters({
          ...filters,
          categorias: {categoria: name, subcategoria: value}
        }));
      }

  const debouncedhandleCategoriaSelect = debounce(handleCategoriaSelect, 1000);
  
  const handleReset = ()=>{
    dispatch(resetState())


  }



      const handlerFilterStatus = (e) => {
        const { value, checked } = e.target;

        if (checked && !filters.status.includes(value)) {
              dispatch(setFilters({ ...filters, status: [...filters.status, value] }));
            } else if(!checked) {
              dispatch(setFilters({ ...filters, status: filters.status.filter(state => state !== value) }));
            }

     
      }

       const debouncedhandlerFilterStatus = debounce(handlerFilterStatus, 1000);
    
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
        <div className={
            isVisible ? `${styles.container} ${styles.panelVisible}` : styles.container
          }>
            {/* Header del panel de filtrado */}
            <div className={styles.panelHeader}>
              <h3>Filtros</h3>
              <button onClick={handleReset} className={styles.clearFiltersButton}>Borrar</button>
            </div>
            {/* Contenedor para los criterios de filtrado */}
            <div className={styles.panelBody}>
              {/* Sección para el filtrado por categorías */}
              <Accordion className={styles.panelSection}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Categorías</Accordion.Header>
                  <Accordion.Body>
                    {/* audio */}
                    <select name="Audio" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                      <option disabled selected value="default" >Audio</option>
                      {
                        AUDIO.map(subcategoria =>
                          <option key={subcategoria.name} href="#" data-categoria="Audio" >{subcategoria.name}</option>)
                      }
                    </select>

                    {/* video */}
                    <select name="Video" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                      <option disabled selected value="default" >Video</option>
                      {
                        VIDEO.map(subcategoria =>
                          <option key={subcategoria.name} href="#" data-categoria="Video" >{subcategoria.name}</option>)
                      }
                    </select>
                   
                    {/* computacion */}
                    <select name="Computacion" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                      <option disabled selected value="default" >Computación</option>
                      {
                        COMPUTACION.map(subcategoria =>
                          <option key={subcategoria.name} href="#" data-categoria="Computacion" >{subcategoria.name}</option>)
                      }
                    </select>
                  
                    {/* telefonos */}
                    <select name="Celulares y Telefonos" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                      <option disabled selected value="default" >Celulares y Teléfonos</option>
                      {
                        CELULARES.map(subcategoria =>
                          <option key={subcategoria.name} href="#" data-categoria="Celulares y Telefonos" >{subcategoria.name}</option>)
                      }
                    </select>

                    {/* libros */}
                    <select name="Libros físicos" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                      <option disabled selected value="default" >Libros físicos</option>
                      {
                        LIBROS.map(subcategoria =>
                          <option key={subcategoria.name} href="#" data-categoria="Libros físicos" >{subcategoria.name}</option>)
                      }
                    </select>
                    
                    {/* Electrodomesticos */}
                    <select name="Electrodomésticos" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Electrodomésticos</option>
                        {
                          ELECTRODOMESTICOS.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Electrodomésticos" >{subcategoria.name}</option>)
                        }
                    </select>

                    {/* BellezayCuidado */}
                    <select name="Belleza y cuidado personal" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Belleza y cuidado personal</option>
                        {
                          BELLEZA.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Belleza y cuidado personal" >{subcategoria.name}</option>)
                        }
                    </select>
                    
                    {/* AccesoriosVehiculo */}
                    <select name="Accesorios para vehiculos" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Accesorios para vehículos</option>
                        {
                          ACCESORIOSVEHICULOS.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Accesorios para vehiculos" >{subcategoria.name}</option>)
                        }
                    </select>

                    {/* Agro */}
                    <select name="Agro" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Agro</option>
                        {
                          AGRO.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Agro" >{subcategoria.name}</option>)
                        }
                    </select>

                    {/* Antiguedades y colecciones */}
                    <select name="Antiguedades y colecciones" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Antiguedades y colecciones</option>
                        {
                          ANTIGUEDADESYCOLECCIONES.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Antiguedades y colecciones" >{subcategoria.name}</option>)
                        }
                    </select>
                
                    {/* Papeleria y mobiliario de negocio */}
                    <select name="Papeleria y mobiliario de negocio" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Papeleria y mobiliario de negocio</option>
                        {
                          PAPELERIA.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Papeleria y mobiliario de negocio" >{subcategoria.name}</option>)
                        }
                    </select>
                    
                    {/* Consolas y videojuegos */}
                    <select name="Consolas y videojuegos" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Consolas y videojuegos</option>
                        {
                          CONSOLAS.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Consolas y videojuegos" >{subcategoria.name}</option>)
                        }
                    </select>
                    
                    {/* Herramientas, Audio y video */}
                    <select name="Herramientas, Audio y video" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Herramientas, Audio y video</option>
                        {
                          HERAMIENTAS.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Herramientas, Audio y video" >{subcategoria.name}</option>)
                        }
                    </select>

                    {/*Instrumentos musicales */}
                    <select name="Instrumentos musicales" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Instrumentos musicales</option>
                        {
                          INSTRUMENTOS.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Instrumentos musicales" >{subcategoria.name}</option>)
                        }
                    </select>

                    {/*Juegos y juguetes*/}
                    <select name="Juegos y juguetes" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Juegos y juguetes</option>
                        {
                          JUEGOS.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Juegos y juguetes" >{subcategoria.name}</option>)
                        }
                    </select>

                    {/*Fiestas y piñatas*/}
                    <select name="Fiestas y piñatas" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Fiestas y piñatas</option>
                        {
                          FIESTAS.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Fiestas y piñatas" >{subcategoria.name}</option>)
                        }
                    </select>
                    
                    {/*Salud y equipamento medico*/}
                    <select name="Salud y equipamento medico" id="categorias" defaultValue="default" className={styles.selectItem} onChange={debouncedhandleCategoriaSelect}>
                        <option disabled selected value="default" >Salud y equipamento médico</option>
                        {
                          SALUD.map(subcategoria =>
                            <option key={subcategoria.name} href="#" data-categoria="Salud y equipamento medico" >{subcategoria.name}</option>)
                        }
                    </select>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              {/* Sección para el filtrado por estado */}
              <Accordion className={styles.panelSection}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Estado</Accordion.Header>
                    <Accordion.Body>
                      <div className={styles.sectionItem}>
                        <input type="checkbox" id='Nuevo' value='Nuevo' onChange={debouncedhandlerFilterStatus} className={styles.checkItem} />
                        <label htmlFor="" className={styles.labelItem} >Nuevo</label>
                      </div>

                      <div className={styles.sectionItem}>
                        <input type="checkbox" id='Usado' value='Usado' onChange={debouncedhandlerFilterStatus}  className={styles.checkItem} />
                        <label htmlFor="" className={styles.labelItem} >Usado</label>
                      </div>

                      <div className={styles.sectionItem}>
                        <input type="checkbox" id='Reacondicionado' value='Reacondicionado' onChange={debouncedhandlerFilterStatus}  className={styles.checkItem} />
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
              <button className={styles.closePanelButton} onClick={setVisibility} >Ver resultados</button>
            </div>
        </div>
    );
}

export default FilterPanel;