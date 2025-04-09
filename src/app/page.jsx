import React from 'react'

import { images } from '@/constants'

import TopbarSection from '@/component/topbar/TopbarSection'
import NavbarSection from '@/component/navbar/NavbarSection'
import BannerSection3 from '@/component/banner/BannerSection3'
import CategorySection3 from '@/component/category/CategorySection3'
import AboutSection3 from '@/component/about/AboutSection3'
import TeamSection from '@/component/team/TeamSection'
import ContactSection2 from '@/component/contact/ContactSection2'
import ActivitySection2 from '@/component/activity/ActivitySection2'
import OurCurriculum from '@/component/blog/OurCurriculum'
import FooterSection from '@/component/footer/FooterSection'
import ScrollToTopButton from '@/component/utils/ScrollToTopButton'

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
            <TeamSection style="tf__team_3 pt_250 pb_100" />
            <ContactSection2 />
            <ActivitySection2 style="tf__activities_3 tf__activities_slider_area mt_100 pt_95 pb_100" />
            <OurCurriculum />
            <FooterSection
                style="tf__footer_3"
                logo="images/footer_logo3.png"
            />
            <ScrollToTopButton style="style-3" />
        </div>
    )
}
