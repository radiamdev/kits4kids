'use client'

const ContactSection2 = () => {
    return (
        <section className="tf__contact_3 mt_100">
            <div className="container">
                <div className="tf__contact_3_area">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 wow fadeInLeft">
                            <div className="tf__contact_3_text">
                                <h2>
                                    Empowering you to <span>reach</span> your potential
                                </h2>
                                <p>
                                Together as a family, we all strive to empower each other to reach our fullest potential, growing holistically through different activities , experiences and programs.
                                </p>
                                <a href="#!">apply now</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 wow fadeInRight">
                            <form className="tf__contact_3_form">
                                <div className="row">
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            placeholder="Your Name*"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            placeholder="Your Email*"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            placeholder="Phone Number*"
                                        />
                                    </div>
                                    
                                    <div className="col-12">
                                        <button type="submit">
                                            Send message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection2
