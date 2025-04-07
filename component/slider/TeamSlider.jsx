'use client'
import Slider from 'react-slick'
import { teamData } from '@/data/Data'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
const TeamSlider = () => {
    return (
        <Slider
            className="row event_slider"
            slidesToShow={3} // Set the number of slides to show
            infinite={true}
            dots={true}
            autoplay={true}
            arrows={false}
            slidesToScroll={1} // Set to 1 to scroll one slide at a time
            responsive={[
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]}
        >
            {teamData.slice(0, 4).map((item) => (
                <div className="col-xl-4 wow fadeInUp" key={item.id}>
                    <div className="tf__single_team">
                        <div className="tf__single_team_img">
                            <img
                                src={item.imgSrc}
                                alt={item.name}
                                className="img-fluid w-100 object-fit-fill"
                            />
                            <ul>
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
                                        href={item.mail}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <MdEmail />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tf__single_team_text">
                            <Link className="title" href={`/team/${item.slug}`}>
                                {item.name}
                            </Link>
                            <p>{item.designation}</p>
                            <p>{item.designation2}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default TeamSlider
