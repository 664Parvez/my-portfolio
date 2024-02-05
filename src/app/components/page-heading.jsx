"use client"

import React from "react"
import Image from "next/image"
import {motion} from "framer-motion"

import { FaLongArrowAltDown } from "react-icons/fa";

import headingStyle from "../styles/page-heading.module.css"

const Pageheading = ({title, image}) => {
    return (
        <>
            <div id={headingStyle.headingSection}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <motion.h1 
                            initial={{color: "#555555"}}
                            animate={{color: "#ffffff"}}
                            transition={{duration: .3, delay: .8}}
                        className="text-start">{title}</motion.h1>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <motion.div 
                            initial={{scale: 0, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            transition={{duration: .5}}
                        className={headingStyle.roundImg}>
                            <div className="position-absolute">
                                <FaLongArrowAltDown id={headingStyle.arrowIcon} />
                            </div>
                            <Image src={image} width="0" height="0" layout="responsive" alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pageheading