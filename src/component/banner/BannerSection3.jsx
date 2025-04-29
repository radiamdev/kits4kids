'use client'
import Link from 'next/link'

const BannerSection3 = () => {
    return (
        <section className="tf__banner_2 tf__banner_3">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-md-10 col-lg-8">
                        <div className="tf__banner_text wow fadeInUp">
                            <h5>The First Pearson BTEC Center in Madagascar</h5>
                            <h1 className="text-black">
                                WE BELIEVE EVERY <span>CHILD</span> CAN LEARN
                            </h1>
                            <p className="text-white">
                                Kits4Kids International is an English speaking
                                school, privately-owned and funded by a Malagasy
                                citizen, located in the Northern suburb of
                                Antananarivo, the capital city of the beautiful
                                island of Madagascar.
                            </p>
                            <ul className="d-flex flex-wrap align-items-center">
                                <li>
                                    <Link
                                        className="common_btn_3"
                                        href="/programs"
                                    >
                                        our programs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerSection3
