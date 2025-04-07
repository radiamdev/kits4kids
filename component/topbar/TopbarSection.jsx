import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const TopbarSection = ({ style }) => {
    return (
        <section className={style}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-6 d-none d-md-block">
                        <div className="tf__topbar_left d-flex flex-wrap align-items-center">
                            <p>Welcome to Kits4Kids International 👋</p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6">
                        <div className="tf__topbar_right">
                            <ul className="d-flex flex-wrap">
                                <li>
                                    <a
                                        href="https://www.facebook.com/kits4kidsintmada"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FaFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/kits4kidsint/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <FaInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:enquiry@kits4kidsmada.org"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <IoMdMail />
                                    </a>
                                </li>
                                {/* Language Switcher */}
                                {/* <li>
                                    <a href="#">
                                        <img
                                            src="images/language_3.jpg"
                                            alt="language"
                                        />{' '}
                                        english
                                    </a>
                                    <ul className="tf__other_language">
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="images/language_2.jpg"
                                                    alt="language"
                                                />{' '}
                                                japanese{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img
                                                    src="images/language_1.jpg"
                                                    alt="language"
                                                />{' '}
                                                chinese
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopbarSection
