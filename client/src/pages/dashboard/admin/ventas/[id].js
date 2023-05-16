import Layout from '@/components/dashboard/admin/Layout.js';
import EnConstruccion from '../../../../components/enConstruccion';

function Venta() {
    return (
        <Layout title="Detalle de la Venta">
            <div className='mt-8'>
                <EnConstruccion />
            </div>
        </Layout>
    )
};

export default Venta;