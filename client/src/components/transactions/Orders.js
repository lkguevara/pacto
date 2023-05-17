import React from "react";
import ReactDOM from "react-dom";
import styles from "../../styles/purchased.module.css";

const Orders = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.products}>
        <ul className={styles.info_products}>
          <li>
            <span>Monto total: ${props.total}</span>
            <span>Estado: {props.state}</span>
            <span>Fecha: {props.time}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Orders;
