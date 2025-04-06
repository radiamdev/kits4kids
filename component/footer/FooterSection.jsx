import { images } from '@/constants'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const FooterSection = () => {
    return (
        <footer className="tf__footer mt_100">
            <div className="tf__footer_overlay pt_75">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-sm-10 col-md-7 col-lg-6">
                            <div className="tf__footer_logo_area">
                                <Link className="footer_logo" href="/">
                                    <img
                                        src={images.logo}
                                        alt="logo"
                                        className="img-fluid w-100"
                                    />
                                </Link>
                                <p>
                                    For 15 years now, Kits4Kids International
                                    has been one of the pioneers in English
                                    speaking education in Madagascar. Birthplace
                                    of the Pioneering Leaders Pathway, first ISA
                                    center and first BTEC center in Madagascar
                                    approved by Pearson, it is still striving to
                                    bridge students with international
                                    opportunities and education standards.
                                </p>
                                <ul className="d-flex flex-wrap">
                                    <li>
                                        <a href="https://www.facebook.com/kits4kidsintmada" target="_blank" rel='noreferrer noopener'>
                                            <FaFacebook />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.instagram.com/kits4kidsint/" target="_blank" rel='noreferrer noopener'>
                                            <FaInstagram />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:enquiry@kits4kidsmada.org" target="_blank" rel='noreferrer noopener'>
                                            <MdEmail />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-sm-10 col-md-5 col-lg-5">
                            <div className="tf__footer_content xs_mt_50">
                                <h3>Programs</h3>
                                <ul>
                                    <li>
                                        <Link href="/programs">
                                            Kindergarten
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/programs">
                                            Primary grades
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/programs">
                                            Secondary grades
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/programs">
                                            High school
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://sites.google.com/view/pioneeringleaderspathway/about"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            Pioneering Leaders Pathway
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="https://sites.google.com/view/pioneeringleaderspathway/workbooks"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            RL&W Publishing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-sm-10 col-md-5 col-lg-5">
                            <div className="tf__footer_content xs_mt_50">
                                <h3>Menu</h3>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="/programs">Programs</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-10 col-md-7 col-lg-col-lg-6">
                            <div className="tf__footer_content xs_mt_30">
                                <h3>Our Contacts</h3>
                                <p>
                                    Adress: IF 210 Andohalo Ilafy, Antananarivo
                                    103, Madagascar
                                </p>
                                <p>
                                    <span> Phone: +261 34 36 340 79</span>
                                </p>
                                <p>
                                    <span>
                                        Email: enquiry@kits4kidsmada.org{' '}
                                    </span>
                                    <span>Website: kits4kidsmada.org</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tf__copyright">
                                <p>
                                    Copyright &copy; {new Date().getFullYear()}{' '}
                                    Kits4kids International. All rights
                                    reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection
