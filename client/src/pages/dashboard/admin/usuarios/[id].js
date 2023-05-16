import Layout from '@/components/dashboard/admin/Layout.js';
import EnConstruccion from '../../../../components/enConstruccion';

function Usuario() {
    return (
        <Layout title="Perfil de Usuario">
            <div className='mt-8'>
                <EnConstruccion />
            </div>
        </Layout>
    )
};

export default Usuario;