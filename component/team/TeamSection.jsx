'use client'
import TeamSlider from '../slider/TeamSlider'

const TeamSection = ({ style }) => {
    return (
        <section className={style}>
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
                        <div className="tf__heading_area mb_15">
                            <h5>Meet our Dedicated Staff</h5>
                            <h2>
                                At Kits4Kids International, our dedicated staff
                                are the driving force behind empowering students
                                and each other, as we move towards our shared
                                vision of a world where differences are
                                embraced, not seen as difficulties. While many
                                more contribute to our success from behind the
                                scenes, the following is a list of our full-time
                                academic teachers, administrators, and
                                representatives from the library, hygiene, and
                                security teams who play a vital role in shaping
                                the daily life of our school community.
                            </h2>
                        </div>
                    </div>
                </div>
                <TeamSlider />
            </div>
        </section>
    )
}

export default TeamSection
