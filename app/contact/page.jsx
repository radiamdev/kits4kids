import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ContactPageSection from '@/component/contact/ContactPageSection'
import Layout from '@/component/layout/Layout'
export const metadata = {
    title: 'Contact Us | Kits4Kids',
    description: 'Contact Kits 4 Kids',
}
export default function Contact() {
    return (
        <Layout>
            <BreadcrumbSection header="Contact Us" title="Contact us" link="/contact" />
            <ContactPageSection />
        </Layout>
    )
}
