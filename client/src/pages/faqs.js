import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';

export default function Faqs() {
  return (
    <>
      <Layout title="FAQs">
        <h1 className={styles.title}>FAQs</h1>
        <EnConstruccion />
      </Layout>

    </>
  )
}