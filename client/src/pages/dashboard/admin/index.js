import styles from "../../../styles/dashboard/admin/Dashboard.module.css";
import Layout from '@/components/dashboard/admin/Layout.js';
import TopCards from "@/components/dashboard/admin/TopCards";
import BarChart from "@/components/dashboard/admin/BarChart";
import RecentOrders from "@/components/dashboard/admin/RecentOrders";

export default function Dashboard() {

  return (
    <>
      <Layout title="Dashboard">
        <TopCards />
        <div>
          <BarChart />
          <RecentOrders />
        </div>
      </Layout>
    </>
  )
}