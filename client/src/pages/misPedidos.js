import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';

export default function misPedidos() {
  return (
    <>
      <Layout title="mis pedidos">
        <h1 className={styles.title}>mis pedidos</h1>
        <EnConstruccion />
      </Layout>

    </>
  )
}