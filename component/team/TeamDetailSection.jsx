'use client'
import { MdEmail } from 'react-icons/md'

const TeamDetailSection = ({ teamInfo }) => {
    return (
        <section className="tf__team_details_page mt_195 xs_mt_100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-lg-6 wow fadeInLeft">
                        <div className="tf__team_details_img">
                            <img
                                src={`/${teamInfo.imgSrc}`}
                                alt="team"
                                className="img-fluid w-100"
                            />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 wow fadeInRight">
                        <div className="tf__team_details_text">
                            <h3>Team Details:</h3>
                            <p>Name : {teamInfo.name}</p>
                            <p>Function : {teamInfo.designation} {'.'} {teamInfo.designation2}</p>
                            <p>About : {teamInfo.about}</p>
                            <p>Call: {teamInfo.phone}</p>
                            <ul className="d-flex flex-wrap align-items-center">
                                <li>Follow us:</li>
                                <li>
                                    <a
                                        href="https://www.facebook.com/kits4kidsintmada"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={teamInfo.mail}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <MdEmail />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamDetailSection
