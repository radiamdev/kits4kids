'use client'
import CurriculumSlider from '../slider/CurriculumSlider'

const OurCurriculum = () => {
    return (
        <div className="tf__blog mt_95">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 m-auto wow fadeInUp">
                        <div className="tf__heading_area mb_15">
                            <h5>Our Curriculum</h5>
                            <h2>
                                The programs at Kits4Kids International have
                                been carefully curated to meet international
                                academic standards while addressing the needs of
                                the local and regional context. Our curriculum
                                offers students a global perspective, empowering
                                them with the knowledge and skills to make a
                                meaningful impact both locally and globally.
                                Through hands-on learning and leadership
                                opportunities, students are prepared to thrive
                                in an interconnected world while driving
                                positive change in their communities.
                            </h2>
                        </div>
                    </div>
                </div>
                <CurriculumSlider />
            </div>
        </div>
    )
}

export default OurCurriculum
