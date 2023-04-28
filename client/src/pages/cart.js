import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';

export default function Cart() {
  return (
    <>
      <Layout title="Cart">
        <h1 className={styles.title}>Carrito de Compras</h1>
        <EnConstruccion />
      </Layout>

    </>
  )
}