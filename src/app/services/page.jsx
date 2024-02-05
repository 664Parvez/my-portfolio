"use client"

import React from "react";
import Link from "next/link"
import Image from "next/image"
import {motion} from "framer-motion"

import serviceStyle from "../styles/services.module.css"
import Pageheading from "../components/page-heading";
import Bookacall from "../components/book-a-call";

import { GiStarShuriken } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { SiFrontendmentor } from "react-icons/si";
import { SiTaichigraphics } from "react-icons/si";
import { BsCalendar3Range } from "react-icons/bs";
import { FaRegCommentDots, FaStore } from "react-icons/fa";

import roundText from "../../../public/image/service/round.png"
import service from "../../../public/image/service/service.jpg"

const Service = () => {

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
            <Pageheading title="My Services" image={roundText} />

            <div id={serviceStyle.service_first}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <motion.h3
                            initial="start"
                            animate="end"
                            variants={fontUp}
                            transition={{duration: .5}}
                        >Designing Digital Delights: Parvez s Portfolio</motion.h3>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <motion.div
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{duration: .5}}
                        >
                            <Image src={service} width="0" loading="lazy" height="0" layout="responsive" alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div id={serviceStyle.service_second}>
                <marquee behavior="scroll" direction="left" loop="">
                    <ul>
                        <li>Opendoor</li>
                        <li><GiStarShuriken /></li>
                        <li>Duolingo</li>
                        <li><GiStarShuriken /></li>
                        <li>logitech</li>
                        <li><GiStarShuriken /></li>
                        <li>autopilot</li>
                        <li><GiStarShuriken /></li>
                        <li>Qapital</li>
                        <li><GiStarShuriken /></li>
                        <li>hippo</li>
                    </ul>
                </marquee>
            </div>

            <div id={serviceStyle.service_third}>
                <motion.h3
                    initial="start"
                    whileInView="end"
                    variants={fontUp}
                    transition={{duration: .5}}
                className="text-center">My Expertise</motion.h3>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-4">
                        <motion.div
                            initial="start"
                            whileInView="end"
                            variants={fontUp}
                            transition={{duration: .3}}
                        className={serviceStyle.glassDiv}>
                            <BsCalendar3Range id={serviceStyle.third_icon} />
                            <h4>UI/UX Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </motion.div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <motion.div
                            initial="start"
                            whileInView="end"
                            variants={fontUp}
                            transition={{duration: .3, delay: .2}}
                        className={serviceStyle.glassDiv}>
                            <CgWebsite id={serviceStyle.third_icon} />
                            <h4>Web Design & Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </motion.div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <motion.div
                            initial="start"
                            whileInView="end"
                            variants={fontUp}
                            transition={{duration: .3, delay: .4}}
                        className={serviceStyle.glassDiv}>
                            <SiFrontendmentor id={serviceStyle.third_icon} />
                            <h4>Frontend Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </motion.div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <motion.div
                            initial="start"
                            whileInView="end"
                            variants={fontUp}
                            transition={{duration: .3, delay: .6}}
                        className={serviceStyle.glassDiv}>
                            <SiTaichigraphics id={serviceStyle.third_icon} />
                            <h4>Graphics Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </motion.div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <motion.div
                            initial="start"
                            whileInView="end"
                            variants={fontUp}
                            transition={{duration: .3, delay: .8}}
                        className={serviceStyle.glassDiv}>
                            <FaRegCommentDots id={serviceStyle.third_icon} />
                            <h4>Communication</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </motion.div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <motion.div
                            initial="start"
                            whileInView="end"
                            variants={fontUp}
                            transition={{duration: .3, delay: 1}}
                        className={serviceStyle.glassDiv}>
                            <FaStore id={serviceStyle.third_icon} />
                            <h4>E-Commerce Website</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <Bookacall />

        </>
    )
}

export default Service