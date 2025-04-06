const AboutSection3 = ({ style }) => {
    return (
        <div className={`${style} tf__about_2_area`}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInLeft">
                        <div className="tf__about_2_img">
                            <div className="tf__about_small">
                                <img
                                    src="images/about_2_img_2.jpg"
                                    alt="about us"
                                    className="img-fluid w-100"
                                />
                            </div>
                            <div className="tf__about_large">
                                <img
                                    src="images/about_2_img_1.jpg"
                                    alt="about us"
                                    className="img-fluid w-100"
                                />
                            </div>
                            <p>
                                <span>15+</span> Years of Experience
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInRight">
                        <div className="tf__about_2_text">
                            <div className="tf__heading_area tf__heading_area_left mb_25">
                                <h5>About Us</h5>
                                <h2>
                                    The First Pearson BTEC Center in Madagascar
                                </h2>
                            </div>
                            <p>
                                At Kits4Kids International, we aim to provide
                                international quality and standard education to
                                our students as we believe that we are raising
                                the next generation of leaders and global
                                citizens, that today’s world and the world of
                                tomorrow needs.
                            </p>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <img
                                            src="images/about_2_icon_1.jpg"
                                            alt="about"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>Kindergarten</h4>
                                        <p>
                                            Our Kindergarten program at
                                            Kits4Kids International is designed
                                            for students aged 5 years old.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img
                                            src="images/about_2_icon_2.jpg"
                                            alt="about"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>Primary</h4>
                                        <p>
                                            Our Primary program at Kits4Kids
                                            International, from Grade 1 to Grade
                                            5.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img
                                            src="images/about_2_icon_3.jpg"
                                            alt="about"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>Junior School</h4>
                                        <p>
                                            The Kits4Kids Junior School (KJS)
                                            program for Grade 6 (KJS Year 1) to
                                            Grade 10 (KJS Year 5) is hands-on
                                            and inquiry-based.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <img
                                            src="images/about_2_icon_4.jpg"
                                            alt="about"
                                            className="img-fluid w-100"
                                        />
                                    </div>
                                    <div className="text">
                                        <h4>Senior High School</h4>
                                        <p>
                                            The SH (Senior High) program at
                                            Kits4Kids International focuses on
                                            Leadership Mastery and Career
                                            Readiness.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection3
