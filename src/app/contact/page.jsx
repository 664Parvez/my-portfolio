"use client"

import React from "react";
import Image from "next/image"
import Link from "next/link"
import {motion} from "framer-motion"


import Roundimg from "../../../public/image/contact/contact-round-text.png"

import Pageheading from "../components/page-heading";

import contactStyle from "../styles/contact.module.css"

const Contact = () => {

    const fontUp = {
        start: {
            y: 50,
            opacity: 0
        },
        end: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <>
            <Pageheading title="Contact With Me" image={Roundimg} />

            <div className="mt-5" id={contactStyle.contact_first_section}>
                <motion.h2
                    initial="start"
                    animate="end"
                    variants={fontUp}
                    transition={{duration: .5}}
                >Get in Touch</motion.h2>
                <motion.span 
                    initial="start"
                    animate="end"
                    variants={fontUp}
                    transition={{duration: .5, delay: .4}}
                >
                    <Link href="mailto:parvezrabbi664@gmail.com"><p>parvezrabbi664@gmail.com</p></Link>
                </motion.span>
            </div>

            <div className="row mt-5" id={contactStyle.contact_second_section}>
                <div className="col-lg-3">
                    <motion.h2
                        initial="start"
                        whileInView="end"
                        variants={fontUp}
                        transition={{duration: .5}}
                    className="mt-4">Let us Talk</motion.h2>
                </div>
                <div className="col-lg-9">
                    <form action="">
                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="" className="mt-4">Full Name</label>
                                <input type="text" className="form-control" name="full-name" placeholder="Full name" />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="" className="mt-4">Mobile</label>
                                <input type="tel" className="form-control" name="mobile-number" placeholder="Mobile Number" />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="" className="mt-4">Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Email" />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="" className="mt-4">Subject</label>
                                <input type="text" className="form-control" name="subject" placeholder="Subject" />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="" className="mt-4">Budget</label>
                                <input type="number" className="form-control" name="budget" placeholder="Budget" />
                            </div>
                            <div className="col-lg-12">
                                <label htmlFor="" className="mt-4">Message</label>
                                <textarea rows="6" type="text" className="form-control" name="message" placeholder="Message" />
                            </div>
                        </div>
                        <button className="btn btn-lg mt-5 btn-outline-light">Send Message</button>
                    </form>
                </div>
            </div>

            <div className="mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14594.235186233633!2d90.42194549999999!3d23.86979595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1706560212837!5m2!1sen!2sbd" width="100%" height="400" style={{borderRadius: "15px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Contact