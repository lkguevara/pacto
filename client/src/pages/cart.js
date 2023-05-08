import styles from '@/styles/Cart.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import Carrito from '@/components/carrito';

export default function Cart() {
  return (
    <>
      <Layout title="Cart">
        <div className={styles.container}>
          <Carrito />
        </div>
      </Layout>

    </>
  )
}