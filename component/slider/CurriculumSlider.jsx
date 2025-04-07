import { curriculum } from '@/data/Data'
import Link from 'next/link'
import Slider from 'react-slick'

const CurriculumSlider = () => {
    return (
        <Slider
            className="row blog_slider"
            slidesToShow={3} // Set the number of slides to show
            infinite={true}
            dots={true}
            arrows={false}
            autoplay={true}
            slidesToScroll={1}
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
            {curriculum.slice(0, 4).map((item) => (
                <div className="col-xl-4 wow fadeInUp" key={item.id}>
                    <div className="tf__single_blog">
                        <Link
                            className="tf__single_blog_img"
                            href={`${item.link}`}
                        >
                            <img
                                src={item.imgSrc}
                                alt="curriculum"
                                className="img-fluid w-100"
                            />
                        </Link>
                        <div className="tf__single_blog_text">
                            
                            <Link className="title" href={`${item.link}`}>
                                {item.title}
                            </Link>
                            <p>{item.description}</p>
                            <Link
                                className="read_btn"
                                href={`${item.link}`}
                            >
                                Read More{' '}
                                <i className="fas fa-chevron-circle-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default CurriculumSlider
