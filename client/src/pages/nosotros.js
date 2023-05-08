import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';
import AboutUs from '@/components/aboutUs';

export default function Nosotros() {
  return (
    <>
      <Layout title="Nosotros">
        <AboutUs />
      </Layout>

    </>
  )
}