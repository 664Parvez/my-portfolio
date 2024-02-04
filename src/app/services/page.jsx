import React from "react";
import Link from "next/link"
import Image from "next/image"

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
    return (
        <>
            <Pageheading title="My Services" image={roundText} />

            <div id={serviceStyle.service_first}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <h3>Designing Digital Delights: Parvez s Portfolio</h3>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Image src={service} width="0" height="0" layout="responsive" alt="" />
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
                <h3 className="text-center">My Expertise</h3>

                <div className="row">
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={serviceStyle.glassDiv}>
                            <BsCalendar3Range id={serviceStyle.third_icon} />
                            <h4>UI/UX Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={serviceStyle.glassDiv}>
                            <CgWebsite id={serviceStyle.third_icon} />
                            <h4>Web Design & Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={serviceStyle.glassDiv}>
                            <SiFrontendmentor id={serviceStyle.third_icon} />
                            <h4>Frontend Development</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={serviceStyle.glassDiv}>
                            <SiTaichigraphics id={serviceStyle.third_icon} />
                            <h4>Graphics Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={serviceStyle.glassDiv}>
                            <FaRegCommentDots id={serviceStyle.third_icon} />
                            <h4>Communication</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-4">
                        <div className={serviceStyle.glassDiv}>
                            <FaStore id={serviceStyle.third_icon} />
                            <h4>E-Commerce Website</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel distinctio dolore nostrum suscipit, voluptatem, ratione, veritatis non molestias facere illo laudantium? Debitis.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Bookacall />

        </>
    )
}

export default Service