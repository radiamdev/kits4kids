import React from 'react'
import ServiceSlider from '../slider/ServiceSlider'

const PopularServiceSection2 = () => {
    return (
        <div className="tf__popular_services mt_100 pt_95 pb_100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
                        <div className="tf__heading_area mb_40">
                            <h5>OUR aim</h5>
                            <h2>
                                {`At Kits4Kids International, we aim to provide international quality and standard education to our students as we believe that we are raising the next generation of leaders and global citizens, that today’s world and the world of tomorrow needs.`}
                            </h2>
                        </div>
                    </div>
                </div>
                <ServiceSlider />
            </div>
        </div>
    )
}

export default PopularServiceSection2
