"use client"

import React from "react";
import Image from "next/image"
import {motion} from "framer-motion"

import aboutStyle from "../styles/about.module.css"

import Pageheading from "../components/page-heading";
import Bookacall from "../components/book-a-call";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

import roundImg from "../../../public/image/about/round.png"
import about from "../../../public/image/about/about.jpg"

const About = () => {

    const fontUp = {
        start: {
            y: 100,
            opacity: 0
        },
        end: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <>
            <Pageheading title="About Me" image={roundImg} />
            <div id={aboutStyle.about_first}>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.h4
                            initial="start"
                            animate="end"
                            variants={fontUp}
                            transition={{duration: .5}}
                        >Welcome!</motion.h4>
                        <motion.h2
                            initial="start"
                            animate="end"
                            variants={fontUp}
                            transition={{duration: .5, delay: .4}}
                        >Designing Digital Delights: Parvez Portfolio</motion.h2>
                    </div>
                    <div className="col-lg-6">
                        <motion.div
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: .5}}
                        >
                            <Image src={about} width="0" loading="lazy" height="0" layout="responsive" alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div id={aboutStyle.about_second} className="text-center">
                <motion.h3
                    initial={{color: "#555555"}}
                    whileInView={{color: "#ffffff"}}
                    transition={{duration: .5, delay: .4}}
                >Every great design begin with an even better story</motion.h3>
                <motion.p
                    initial="start"
                    whileInView="end"
                    variants={fontUp}
                    transition={{duration: .5}}
                >Since beginning my journey as a freelance designer nearly 8 years ago, I have done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I am quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</motion.p>
            </div>

            <div id={aboutStyle.about_third}>
                <div className="row">
                    <div className="col-lg-6">
                        <motion.h2
                            initial={{color: "#555555"}}
                            whileInView={{color: "#ffffff"}}
                            transition={{duration: .5, delay: .4}}
                        >We help businesses to Innovate and Remain highly relevant to their customers by developing edge digital products</motion.h2>
                    </div>
                    <div className="col-lg-6">
                        <motion.h3
                            initial="start"
                            whileInView="end"
                            variants={fontUp}
                            transition={{duration: .5}}
                        >Recent Projects</motion.h3>
                        <motion.p
                            initial="start"
                            whileInView="end"
                            variants={fontUp}
                            transition={{duration: .5, delay: .4}}
                        >Interactively enable corporate functionalities rather than front-end catalysts for change. Seamlessly myocardinate collaborative relationships.</motion.p>

                        <ul className="mt-5">
                            <li>01. Simplicity in Motion <motion.span
                                initial={{x: -50, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{duration: .5, delay: .2}}
                            ><FaRegArrowAltCircleRight /></motion.span></li>
                            <hr />
                            <li>02. Mobile-First Revolution <motion.span
                                initial={{x: -50, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{duration: .5, delay: .4}}
                            ><FaRegArrowAltCircleRight /></motion.span></li>
                            <hr />
                            <li>03. Brand Transformation <motion.span
                                initial={{x: -50, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{duration: .5, delay: .6}}
                            ><FaRegArrowAltCircleRight /></motion.span></li>
                            <hr />
                            <li>04. Interactive Storytelling <motion.span
                                initial={{x: -50, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{duration: .5, delay: .8}}
                            ><FaRegArrowAltCircleRight /></motion.span></li>
                            <hr />
                            <li>05. Infographic Innovation <motion.span
                                initial={{x: -50, opacity: 0}}
                                whileInView={{x: 0, opacity: 1}}
                                transition={{duration: .5, delay: 1}}
                            ><FaRegArrowAltCircleRight /></motion.span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Bookacall />
        </>
    )
}

export default About