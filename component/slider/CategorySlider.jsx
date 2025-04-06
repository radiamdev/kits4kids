'use client'
import React from 'react'
import { services } from '@/data/Data'
import Slider from 'react-slick'
import Link from 'next/link'

const CategorySlider = () => {
    return (
        <Slider
            className="row popular_service_slider wow fadeInUp"
            slidesToShow={4} // Set the number of slides to show
            infinite={true}
            dots={true}
            autoplay={true}
            arrows={false}
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
                        slidesToShow: 3,
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
                        slidesToShow: 2,
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
            {services.map((item) => (
                <div className="col-xl-3" key={item.id}>
                    <Link
                        href={item.link}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <div
                            className={`tf__popular_service_single ${item.color}`}
                        >
                            <span>
                                <i className={item.iClassName}></i>
                            </span>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </Slider>
    )
}

export default CategorySlider
