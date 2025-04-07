import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import AllEventSection from '@/component/event/AllEventSection'
import Layout from '@/component/layout/Layout'
export const metadata = {
    title: 'Events | Kits4Kids',
    description: 'Kids for kids events',
}
export default function Event() {
    return (
        <Layout>
            <BreadcrumbSection header="Events" title="Events" />
            <AllEventSection />
        </Layout>
    )
}
