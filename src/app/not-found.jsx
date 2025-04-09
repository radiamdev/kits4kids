import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ErrorSection from '@/component/error/ErrorSection'
import Layout from '@/component/layout/Layout'

export const metadata = {
    title: 'Page Not Found',
    description: 'Page not found kits4kids mada organization',
}
export default function NotFound() {
    return (
        <Layout>
            <BreadcrumbSection header="404 Page" title="404" />
            <ErrorSection type="Page" />
        </Layout>
    )
}
