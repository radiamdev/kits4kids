'use client'
import Link from 'next/link'

const BreadcrumbSection = ({ header, title, link }) => {
    return (
        <section className="tf__breadcrumb">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tf__breadcrumb_text">
                            <h2>{header}</h2>
                            <ul>
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <a href={link}>{title}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BreadcrumbSection
