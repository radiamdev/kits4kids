import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import OurFeesSection from '@/component/terms/OurFeesSection'
export const metadata = {
    title: 'Our Fees | Kits4Kids',
    description: 'Kits4Kids fees',
}
export default function OurFees() {
    return (
        <Layout>
            <BreadcrumbSection title="Our Fees" header="Our Fees" />
            <OurFeesSection />
        </Layout>
    )
}
