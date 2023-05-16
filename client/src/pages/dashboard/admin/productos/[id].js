import Layout from '@/components/dashboard/admin/Layout.js';
import EnConstruccion from '../../../../components/enConstruccion';

function Producto() {
    return (
        <Layout title="Producto">
            <div className='mt-8'>
                <EnConstruccion />
            </div>
        </Layout>
    )
};

export default Producto;