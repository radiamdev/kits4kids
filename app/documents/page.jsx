import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import OurFeesSection from '@/component/terms/OurFeesSection'
export const metadata = {
    title: 'Documents | Kits4Kids',
    description: 'Kits4Kids documents',
}
export default function Documents() {
    return (
        <Layout>
            <BreadcrumbSection title="DOCUMENTS AND POLICIES" header="Documents & Policies" />
            {/* <OurFeesSection /> */}
            
        </Layout>
    )
}
