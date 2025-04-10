import ContactForm from '../form/ContactForm'

const ContactPageSection = () => {
    return (
        <section className="tf__contact_page mt_190 xs_mt_95">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
                        <div className="tf__contact_form">
                            <div className="tf__heading_area tf__heading_area_left mb_25">
                                <h5>Contact Us</h5>
                            </div>
                            <p>
                                Together as a family, we all strive to empower
                                each other to reach our fullest potential,
                                growing holistically through different
                                activities , experiences and programs.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
                        <div className="tf__contact_text">
                            <div className="tf__contact_single">
                                <div className="icon blue">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="text">
                                    <h3>Call</h3>
                                    <a href="callto:+261343634079">
                                        +261343634079
                                    </a>
                                </div>
                            </div>
                            <div className="tf__contact_single">
                                <div className="icon orange">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="text">
                                    <h3>mail</h3>
                                    <a href="mailto:enquiry@kits4kidsmada.org">
                                        enquiry@kits4kidsmada.org
                                    </a>
                                    <a href="mailto:contact@kits4kidsmada.org">
                                        contact@kits4kidsmada.org
                                    </a>
                                </div>
                            </div>
                            <div className="tf__contact_single">
                                <div className="icon green">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="text">
                                    <h3>address</h3>
                                    <p>
                                        IF 210 Andohalo Ilafy, Antananarivo 103,
                                        Madagascar
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12 wow fadeInUp">
                        <div className="tf__contact_map mt_100">
                            <iframe
                                title="kits4kids"
                                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d16952.96422856841!2d47.54004646828165!3d-18.84962290057667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIF%20210%20Andohalo%20Ilafy%2C%20Antananarivo%20103%2C%20Madagascar!5e0!3m2!1sfr!2smg!4v1743940923442!5m2!1sfr!2smg"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPageSection
