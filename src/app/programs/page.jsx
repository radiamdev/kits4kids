import OurProgramsSection from '@/component/blog/OurProgramsSection'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
export const metadata = {
    title: 'Our programs | Kits4Kids',
    description: 'Our programs Kits4Kids',
}
export default function OurPrograms() {
    return (
        <Layout>
            <BreadcrumbSection header="Our programs" title="Our programs" />
            <OurProgramsSection />
        </Layout>
    )
}
