import React from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/purchased.module.css";

const Purchased = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.products}>
        <ul className={styles.info_products}>
          <li>
            <span>Nombre del Producto: {props.name}</span>
            <span>Estado: comprado</span>
          </li>
        </ul>
        <button className={styles.confirmBtn} onclick="confirmarRecepcion()">Recibido</button>
      </div>
    </div>
  );
};


export default Purchased;
