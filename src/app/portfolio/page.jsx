import React from "react";
import Image from "next/image"
import Link from "next/link"

import Pageheading from "../components/page-heading";

import portfolioStyle from "../styles/portfolio.module.css"

import roundImg from "../../../public/image/portfolio/round.png"
import port1 from "../../../public/image/portfolio/p1.jpg"
import port2 from "../../../public/image/portfolio/p2.jpg"
import port3 from "../../../public/image/portfolio/p3.jpg"
import port4 from "../../../public/image/portfolio/p4.jpg"
import port5 from "../../../public/image/portfolio/p5.jpg"
import port6 from "../../../public/image/portfolio/p6.jpg"
import port7 from "../../../public/image/portfolio/p7.jpg"
import port8 from "../../../public/image/portfolio/p8.jpg"
import port9 from "../../../public/image/portfolio/p9.jpg"
import port10 from "../../../public/image/portfolio/p10.jpg"
import port11 from "../../../public/image/portfolio/p11.jpg"
import port12 from "../../../public/image/portfolio/p12.jpg"
import port13 from "../../../public/image/portfolio/p13.jpg"
import port14 from "../../../public/image/portfolio/p14.jpg"
import port15 from "../../../public/image/portfolio/p15.jpg"
import port16 from "../../../public/image/portfolio/p16.jpg"
import port17 from "../../../public/image/portfolio/p17.jpg"
import port18 from "../../../public/image/portfolio/p18.jpg"
import port19 from "../../../public/image/portfolio/p19.jpg"

const Portfolio = () => {
    return (
        <>
            <Pageheading title="My All Projects" image={roundImg} />

            <h2>Check all project. All projects has link.</h2>

            <div className="mt-5">
                <ul className="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="html-tab tabBtn" data-bs-toggle="tab" data-bs-target="#html" type="button" role="tab" aria-controls="html" aria-selected="true">HTML</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="react-tab tabBtn" data-bs-toggle="tab" data-bs-target="#react" type="button" role="tab" aria-controls="react" aria-selected="false">React JS</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="next-tab tabBtn" data-bs-toggle="tab" data-bs-target="#next" type="button" role="tab" aria-controls="next" aria-selected="false">Next JS</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="wordpress-tab tabBtn" data-bs-toggle="tab" data-bs-target="#wordpress" type="button" role="tab" aria-controls="wordpress" aria-selected="false">WordPress</button>
                    </li>
                </ul>

                <div className="tab-content" id={portfolioStyle.myTabContent}>
                    <div className="tab-pane fade show active" id="html" role="tabpanel" aria-labelledby="html-tab">
                        <div className="row mt-5">
                            <div className="col-lg-4 mt-4">
                                <Link href="https://664parvez.github.io/jamidari-website/">
                                    <Image src={port4} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://664parvez.github.io/go-keto-gummies-landing-page/">
                                    <Image src={port5} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://664parvez.github.io/saatva-landing-page-two/">
                                    <Image src={port6} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://www.iasbd.co.uk/">
                                    <Image src={port7} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://www.pictureclippingpath.com/">
                                    <Image src={port8} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://664parvez.github.io/GSAP-website-one/">
                                    <Image src={port12} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="react" role="tabpanel" aria-labelledby="react-tab">
                        <div className="row mt-5">
                            <div className="col-lg-4 mt-4">
                                <Link href="https://digitalcave.netlify.app/">
                                    <Image src={port10} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://addison-interior.netlify.app/">
                                    <Image src={port11} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="next" role="tabpanel" aria-labelledby="next-tab">
                        <div className="row mt-5">
                            <div className="col-lg-4 mt-4">
                                <Link href="https://apple-ecommerce-six.vercel.app/">
                                    <Image src={port1} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://clipping-path-website-final.vercel.app/">
                                    <Image src={port2} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://dms-live-tv.vercel.app/">
                                    <Image src={port3} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://get-course.vercel.app/">
                                    <Image src={port9} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="wordpress" role="tabpanel" aria-labelledby="wordpress-tab">
                        <div className="row mt-5">
                            <div className="col-lg-4 mt-4">
                                <Link href="http://www.beonscale.com/">
                                    <Image src={port13} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://outsourcingtrainingbd.com/">
                                    <Image src={port14} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://ajmerigemshouse.com/">
                                    <Image src={port15} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://artevointerior.com/">
                                    <Image src={port16} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://www.ukdreamseducation.com/">
                                    <Image src={port17} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://dreamlandbd.com/">
                                    <Image src={port18} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://ajaagro.com/">
                                    <Image src={port19} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio