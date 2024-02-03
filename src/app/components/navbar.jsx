"use client"

import React, {useState, useEffect} from "react";
import Link from "next/link"
import Image from "next/image"
import {motion} from "framer-motion"
import navbarStyle from "../styles/navbar.module.css"

import Logo from "../../../public/image/logo.png"

import { HiMiniBars2 } from "react-icons/hi2";
import { TiTimesOutline } from "react-icons/ti";

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    return (
        <>
            <div className="d-flex justify-content-between align-items-center" id={navbarStyle.navbar}>
                <div id={navbarStyle.logo}>
                    <Link href="/">
                        <Image height="0" width="0" layout="responsive" src={Logo} alt="" />
                    </Link>
                </div>
                <div id={navbarStyle.navAllItem}>
                    <ul id={navbarStyle.navItem}>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/skills">Skills</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="https://drive.google.com/file/d/1TlWmCGSWb0uvS0JcrJliaXer0zRkr29b/view?usp=drive_link" className="btn btn-outline-dark" id={navbarStyle.navbarBtn}>Download Resume</Link></li>
                    </ul>
                </div>
                <div id={navbarStyle.hambar}>
                    <div id={navbarStyle.hambar_icon} onClick={() => setNavbar(!navbar)}>
                        {
                            navbar ? <TiTimesOutline /> : <HiMiniBars2 />
                        }
                        
                    </div>
                </div>
            </div>

            <motion.div id={ navbar ? navbarStyle.responsive_navbar_show : navbarStyle.responsive_navbar_hide }
            
                initial={false}
                animate={{left: navbar ? "0px" : "-100%"}}
                transition={{duration: .5}}
            
            >
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/skills">Skills</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </motion.div>
        </>
    )
}

export default Navbar