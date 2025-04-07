'use client'
import { useEduorContext } from '@/context/EduorContext'
import Navlink from './Navlink'
import SubNavlink from './SubNavlink'

const NavigationSection = ({ position, btnPosition, navRef }) => {
    const { isMobileNavOpen } = useEduorContext()
    return (
        <div
            ref={navRef}
            className={`collapse navbar-collapse ${isMobileNavOpen ? 'show' : ''}`}
            id="navbarNav"
        >
            <ul className={`navbar-nav ${position}`}>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <Navlink href="/about-us">about us</Navlink>
                </li>
                <li className="nav-item">
                    <Navlink href="/programs">programs</Navlink>
                </li>
                <li className="nav-item">
                    <Navlink href="/contact">contact</Navlink>
                </li>
                <li className="nav-item">
                    <a className="nav-link">
                        Menu <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="tf__droap_menu">
                        
                        <li>
                            <SubNavlink href="/events">events</SubNavlink>
                        </li>
                        <li>
                            <SubNavlink href="/team">team</SubNavlink>
                        </li>
                        
                        <li>
                            <SubNavlink href="/faq">FAQs</SubNavlink>
                        </li>
                        <li>
                            <SubNavlink href="/terms-condition">
                                terms and condition
                            </SubNavlink>
                        </li>
                        <li>
                            <SubNavlink href="/privacy-policy">
                                privacy policy
                            </SubNavlink>
                        </li>
                    </ul>
                </li>
                {btnPosition ? null : (
                    <li className="nav-item">
                        <a className="nav-link common_btn" href="#">
                            LEARN MORE
                        </a>
                    </li>
                )}
            </ul>
            {btnPosition ? (
                <a className="common_btn_2 ms-auto" href="#">
                    learn more
                </a>
            ) : null}
        </div>
    )
}

export default NavigationSection
