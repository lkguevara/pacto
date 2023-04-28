import styles from '@/styles/Home.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import Login from '@/pages/login';
import EnConstruccion from '@/components/enConstruccion';
import Slider from '@/components/slider';
import Destacados from "@/components/destacados";
import 'bootstrap/dist/css/bootstrap.min.css';
import Boletin from '@/components/boletin';
import Rewiews from '@/components/rewiews';



export default function Home() {


  return (
    <>
      <Layout title="Home">
        <Slider />
        <Destacados />
        <Boletin />
        <Rewiews/>
      </Layout>
    </>
  )
}
