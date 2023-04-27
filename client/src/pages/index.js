import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import Login from '@/pages/login';
import EnConstruccion from '@/components/enConstruccion';


export default function Home() {
  return (
    <>
      <Layout title="Home">
        <EnConstruccion />
      </Layout>
    </>
  )
}
