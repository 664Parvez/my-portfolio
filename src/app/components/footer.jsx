import React from "react"
import Link from "next/link"

import { FaFacebook, FaLinkedinIn, FaInstagram, FaYoutube, FaLocationArrow } from "react-icons/fa";
import footerStyle from "../styles/footer.module.css"

const Footer = () => {
    return (
        <>
        <hr className="mt-5" />
            <div className="mt-5">
                <div className="row" id={footerStyle.topFooter}>
                    <div className="col-lg-4 mt-4">
                        <p>Phosflu orescently redefine cross the functional data through enabled mind share.ess products.</p>
                        <h2 className="mt-5" id={footerStyle.footerChat}><Link href="/contact">Let's Chat <FaLocationArrow /></Link></h2>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <ul id={footerStyle.footerItem}>
                            <li><h4 className="mb-4"><b><u>Menu</u></b></h4></li>
                            <li><p><Link href="/">Home</Link></p></li>
                            <li><p><Link href="/about">About</Link></p></li>
                            <li><p><Link href="/services">Services</Link></p></li>
                            <li><p><Link href="/skills">Skills</Link></p></li>
                            <li><p><Link href="/portfolio">Portfolio</Link></p></li>
                            <li><p><Link href="/contact">Contact</Link></p></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <ul id={footerStyle.footerContact}>
                            <li><h4 className="mb-4"><b><u>Contact</u></b></h4></li>
                            <li><Link href="mailto:parvezrabbi664@gmail.com"><p className={footerStyle.email}>parvezrabbi664@gmail.com</p></Link></li>
                            <li><p>4517 Washington Ave. Manchester, Kentucky 39495</p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr />
            
            <div className="row">
                <div className="col-lg-6">
                    <p>creativegigs © 2023, All Rights Reserved</p>
                </div>
                <div className="col-lg-6 text-end">
                    <ul id={footerStyle.socialMedia}>
                        <li><Link href=""><FaFacebook /></Link></li>
                        <li><Link href=""><FaLinkedinIn /></Link></li>
                        <li><Link href=""><FaInstagram /></Link></li>
                        <li><Link href=""><FaYoutube /></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer