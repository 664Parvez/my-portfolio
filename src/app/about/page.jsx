import React from "react";
import Image from "next/image"

import aboutStyle from "../styles/about.module.css"

import Pageheading from "../components/page-heading";
import Bookacall from "../components/book-a-call";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

import roundImg from "../../../public/image/about/round.png"
import about from "../../../public/image/about/about.jpg"

const About = () => {
    return (
        <>
            <Pageheading title="About Me" image={roundImg} />
            <div id={aboutStyle.about_first}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h4>Welcome!</h4>
                        <h2>Designing Digital Delights: Parvez Portfolio</h2>
                    </div>
                    <div className="col-lg-6">
                        <Image src={about} width="0" height="0" layout="responsive" alt="" />
                    </div>
                </div>
            </div>

            <div id={aboutStyle.about_second} className="text-center">
                <h3>Every great design begin with an even better story</h3>
                <p>Since beginning my journey as a freelance designer nearly 8 years ago, I have done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I am quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
            </div>

            <div id={aboutStyle.about_third}>
                <div className="row">
                    <div className="col-lg-6">
                        <h2>We help businesses to Innovate and Remain highly relevant to their customers by developing edge digital products</h2>
                    </div>
                    <div className="col-lg-6">
                        <h3>Recent Projects</h3>
                        <p>Interactively enable corporate functionalities rather than front-end catalysts for change. Seamlessly myocardinate collaborative relationships.</p>

                        <ul className="mt-5">
                            <li>01. Simplicity in Motion <span><FaRegArrowAltCircleRight /></span></li>
                            <hr />
                            <li>02. Mobile-First Revolution <span><FaRegArrowAltCircleRight /></span></li>
                            <hr />
                            <li>03. Brand Transformation <span><FaRegArrowAltCircleRight /></span></li>
                            <hr />
                            <li>04. Interactive Storytelling <span><FaRegArrowAltCircleRight /></span></li>
                            <hr />
                            <li>05. Infographic Innovation <span><FaRegArrowAltCircleRight /></span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Bookacall />
        </>
    )
}

export default About