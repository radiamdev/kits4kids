'use client'

import { academicLevels } from '@/data/Data'
import { useState } from 'react'
const AllBlogSection = () => {
    const [expandedItems, setExpandedItems] = useState([])

    const toggleExpand = (id) => {
        setExpandedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        )
    }
    return (
        <section className="tf__blog_page mt_190 xs_mt_95">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
                        <div className="tf__heading_area mb_15">
                            <h5>Our Academic Levels</h5>
                            <h2>
                                Kits4Kids International offers a comprehensive
                                educational journey from Kindergarten through
                                High School (SH Years). As the birthplace of the
                                Pioneering Leaders Pathway, the school offers
                                programs including a nurturing Kindergarten
                                experience, a dynamic primary curriculum, an
                                engaging secondary program, and specialized
                                pathways for high school students, all designed
                                to foster growth, critical thinking, and a
                                global perspective for every learner.
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {academicLevels.map((item) => (
                        <div
                            className="col-xl-3 col-md-4 wow fadeInUp"
                            key={item.id}
                        >
                            <div
                                className={`tf__activities_item tf__activities_item_min ${item.color}`}
                            >
                                <span>
                                    {' '}
                                    <i className={item.iClassName}></i>{' '}
                                </span>
                                <h3 className="p-3">{item.title}</h3>
                                <p
                                    className={`description ${expandedItems.includes(item.id) ? 'expanded' : ''}`}
                                >
                                    {item.description}
                                </p>
                                {item.description.length > 100 && (
                                    <button
                                        className="show-more-btn"
                                        onClick={() => toggleExpand(item.id)}
                                    >
                                        {expandedItems.includes(item.id)
                                            ? 'Show less'
                                            : 'Show more'}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllBlogSection
