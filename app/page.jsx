import AboutSection3 from '@/component/about/AboutSection3'
import ActivitySection2 from '@/component/activity/ActivitySection2'
import BannerSection3 from '@/component/banner/BannerSection3'
import BlogSection2 from '@/component/blog/BlogSection2'
import CategorySection3 from '@/component/category/CategorySection3'
import ContactSection2 from '@/component/contact/ContactSection2'
import CourseSection2 from '@/component/course/CourseSection2'
import FooterSection from '@/component/footer/FooterSection'
import NavbarSection from '@/component/navbar/NavbarSection'
import TeamSection from '@/component/team/TeamSection'
import TopbarSection from '@/component/topbar/TopbarSection'
import ScrollToTopButton from '@/component/utils/ScrollToTopButton'
import { images } from '@/constants'

export const metadata = {
    title: 'Kits4Kids',
    description: 'Kits4Kids home page',
}
export default function Home() {
    return (
        <div className="home_3">
            <TopbarSection style="tf__topbar tf__topbar_2" />
            <NavbarSection style="main_menu_3" logo={images.logo} />
            <BannerSection3 />
            <CategorySection3 />
            <AboutSection3 style="about_3 pb_100" />
            <CourseSection2 />
            <TeamSection style="tf__team_3 pt_250 pb_100" />
            <ContactSection2 />
            <ActivitySection2 style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100" />
            <BlogSection2 />
            <FooterSection
                style="tf__footer_3"
                logo="images/footer_logo3.png"
            />
            <ScrollToTopButton style="style-3" />
        </div>
    )
}
