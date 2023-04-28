import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';

export default function Nosotros() {
  return (
    <>
      <Layout title="Nosotros">
        <h1 className={styles.title}>Nosotros</h1>
        <EnConstruccion />
      </Layout>

    </>
  )
}