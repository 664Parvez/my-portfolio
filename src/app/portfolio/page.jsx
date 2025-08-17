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
import port20 from "../../../public/image/portfolio/p20.jpg"
import port21 from "../../../public/image/portfolio/p21.jpg"
import port22 from "../../../public/image/portfolio/p22.jpg"
import port23 from "../../../public/image/portfolio/p23.jpg"
import port24 from "../../../public/image/portfolio/p24.jpg"
import port25 from "../../../public/image/portfolio/p25.jpg"
import port26 from "../../../public/image/portfolio/p26.jpg"
import port27 from "../../../public/image/portfolio/p27.jpg"
import port28 from "../../../public/image/portfolio/p28.jpg"
import port29 from "../../../public/image/portfolio/p29.jpg"
import port30 from "../../../public/image/portfolio/p30.jpg"
import port31 from "../../../public/image/portfolio/p31.jpg"
import port32 from "../../../public/image/portfolio/p32.png"
import port33 from "../../../public/image/portfolio/p33.png"
import port34 from "../../../public/image/portfolio/shopify-1.png"
import port35 from "../../../public/image/portfolio/shopify-2.png"
import port36 from "../../../public/image/portfolio/shopify-3.png"
import port37 from "../../../public/image/portfolio/shopify-4.png"

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
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="shopify-tab tabBtn" data-bs-toggle="tab" data-bs-target="#shopify" type="button" role="tab" aria-controls="shopify" aria-selected="false">Shopify</button>
                    </li>
                </ul>

                <div className="tab-content" id={portfolioStyle.myTabContent}>

                    <div className="tab-pane fade show active" id="html" role="tabpanel" aria-labelledby="html-tab">
                        <div className="row mt-5">
                            <div className="col-lg-4 mt-4">
                                <Link href="https://664parvez.github.io/LaRosa-restaurant/" target="__blank">
                                    <Image src={port30} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://ctglawyers.com.au/" target="__blank">
                                    <Image src={port31} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://buynsell.jamidaribd.com/" target="__blank">
                                    <Image src={port4} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://www.jnsstudyabroad.com/" target="__blank">
                                    <Image src={port20} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://www.gksoft.co.uk/" target="__blank">
                                    <Image src={port21} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://aspireglobalpathways.com/" target="__blank">
                                    <Image src={port22} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://664parvez.github.io/go-keto-gummies-landing-page/" target="__blank">
                                    <Image src={port5} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://664parvez.github.io/saatva-landing-page-two/" target="__blank">
                                    <Image src={port6} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://www.iasbd.co.uk/" target="__blank">
                                    <Image src={port7} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://www.pictureclippingpath.com/" target="__blank">
                                    <Image src={port8} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://664parvez.github.io/GSAP-website-one/" target="__blank">
                                    <Image src={port12} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="react" role="tabpanel" aria-labelledby="react-tab">
                        <div className="row mt-5">
                            <div className="col-lg-4 mt-4">
                                <Link href="https://digitalcave.netlify.app/" target="__blank">
                                    <Image src={port10} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://addison-interior.netlify.app/" target="__blank">
                                    <Image src={port11} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="next" role="tabpanel" aria-labelledby="next-tab">
                        <div className="row mt-5">
                            <div className="col-lg-4 mt-4">
                                <Link href="https://artevo-interior.vercel.app/" target="__blank">
                                    <Image src={port23} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://apple-ecommerce-six.vercel.app/" target="__blank">
                                    <Image src={port1} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://clipping-path-website-final.vercel.app/" target="__blank">
                                    <Image src={port2} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://dms-live-tv.vercel.app/" target="__blank">
                                    <Image src={port3} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://get-course.vercel.app/" target="__blank">
                                    <Image src={port9} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="wordpress" role="tabpanel" aria-labelledby="wordpress-tab">
                        <div className="row mt-5">
                            <div className="col-lg-4 mt-4">
                                <Link href="https://new.ausgreensolar.com.au/" target="__blank">
                                    <Image src={port33} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://inseducationbd.com/" target="__blank">
                                    <Image src={port29} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://al-hajar.com/" target="__blank">
                                    <Image src={port24} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://inseducationbd.com/" target="__blank">
                                    <Image src={port25} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://famousin60days.com/" target="__blank">
                                    <Image src={port26} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://sashippingprepcenter.com/" target="__blank">
                                    <Image src={port27} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://saprintingshop.com/" target="__blank">
                                    <Image src={port28} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="http://www.beonscale.com/" target="__blank">
                                    <Image src={port13} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://outsourcingtrainingbd.com/" target="__blank">
                                    <Image src={port14} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://ajmerigemshouse.com/" target="__blank">
                                    <Image src={port15} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://artevointerior.com/" target="__blank">
                                    <Image src={port16} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://www.ukdreamseducation.com/" target="__blank">
                                    <Image src={port17} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://wavebymehnaz.com/" target="__blank">
                                    <Image src={port32} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://dreamlandbd.com/" target="__blank">
                                    <Image src={port18} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://ajaagro.com/" target="__blank">
                                    <Image src={port19} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="shopify" role="tabpanel" aria-labelledby="shopify-tab">
                        <div className="row mt-5">
                            <div className="col-lg-4 mt-4">
                                <Link href="https://www.saifursbooks.com/" target="__blank">
                                    <Image src={port37} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://liveshoppinguk.co.uk/" target="__blank">
                                    <Image src={port35} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://nexarapulse.com/" target="__blank">
                                    <Image src={port36} width="0" height="0" layout="responsive" alt="" />
                                </Link>
                            </div>
                            <div className="col-lg-4 mt-4">
                                <Link href="https://levanya.com/" target="__blank">
                                    <Image src={port34} width="0" height="0" layout="responsive" alt="" />
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