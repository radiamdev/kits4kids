import AboutSection3 from '@/component/about/AboutSection3'
import ActivitySection2 from '@/component/activity/ActivitySection2'
import OurCurriculum from '@/component/blog/OurCurriculum'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import FaqSection from '@/component/faq/FaqSection'
import Layout from '@/component/layout/Layout'
import PopularServiceSection2 from '@/component/service/PopularServiceSection2'
export const metadata = {
    title: 'About Us | Kits4Kids',
    description: 'About us kits4kids',
}
export default function About() {
    return (
        <Layout>
            <BreadcrumbSection
                header="About us"
                title="About us"
                link="/about-us"
            />
            <section className="tf__about_us_page mt_195 xs_mt_100">
                <AboutSection3 style="" />
                <PopularServiceSection2 />

                <FaqSection img="images/700x700_faq.png" />
                <ActivitySection2 style="tf__activities_slider_area pt_95 pb_100" />
                <OurCurriculum />
            </section>
        </Layout>
    )
}
