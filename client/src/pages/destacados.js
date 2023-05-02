import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';

export default function Destacados() {
  return (
    <>
      <Layout title="Destacados">
        <h1 className={styles.title}>Destacados</h1>
        <EnConstruccion />
      </Layout>

    </>
  )
}