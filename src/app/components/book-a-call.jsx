"use client"

import React from "react"
import Image from "next/image"
import {motion} from "framer-motion"

import bookacallStyle from "../styles/bookacall.module.css"

import bookacallImg from "../../../public/image/book-a-call/miself.webp"

const Bookacall = () => {
    return (
        <>
            <div id={bookacallStyle.bookacall}>
                <motion.h2 
                    initial={{y: 100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: .3}}
                className="text-center mb-5">Book A Call</motion.h2>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <motion.div
                            initial={{scale: 0}}
                            whileInView={{scale: 1}}
                            transition={{duration: .3}}
                        >
                            <Image src={bookacallImg} loading="lazy" width="0" height="0" layout="responsive" alt=""/>
                        </motion.div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <form action="">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter your name" className="form-control" />

                            <label htmlFor="" className="mt-4">Email</label>
                            <input type="email" placeholder="Enter your email" className="form-control" />

                            <label htmlFor="" className="mt-4">I am interested in</label>
                            <input type="text" placeholder="Enter your interested" className="form-control" />

                            <label htmlFor="" className="mt-4">Message</label>
                            <textarea rows="5" type="text" placeholder="Message here" className="form-control" />

                            <motion.button 
                                initial={{y: 100, opacity: 0}}
                                whileInView={{y: 0, opacity: 1}}
                                transition={{duration: .3}}
                            className="btn btn-lg" id={bookacallStyle.btn}>Send Now</motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookacall