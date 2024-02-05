"use client"

import Image from "next/image";
import Link from "next/link"
import {motion} from "framer-motion"

import homeStyle from "./page.module.css";

import { FaLongArrowAltDown, FaRegUser, FaDollarSign } from "react-icons/fa";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";

import roundImg from "../../public/image/home/round-text.png"
import myself from "../../public/image/home/miself.webp"
import clogo1 from "../../public/image/home/clogo.png"
import clogo2 from "../../public/image/home/clogo2.png"
import clogo3 from "../../public/image/home/clogo3.png"
import clogo4 from "../../public/image/home/clogo4.png"
import clogo5 from "../../public/image/home/clogo5.png"
import clogo6 from "../../public/image/home/clogo6.png"
import clogo7 from "../../public/image/home/clogo7.png"
import clogo8 from "../../public/image/home/clogo8.webp"

import project1 from "../../public/image/home/project1.png"
import project2 from "../../public/image/home/project2.png"
import project4 from "../../public/image/home/project4.png"

export default function Home() {

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
      <section id={homeStyle.hero_section}>
        <div className="row">
          <div className="col-lg-6">

            <motion.h1
              initial="start"
              animate="end"
              variants={fontUp}
              transition={{duration: .5}}
            id={homeStyle.hero_first_title}>
              Say Hi from <mark>Parvez,</mark>
            </motion.h1>

            <motion.h1
              initial="start"
              animate="end"
              variants={fontUp}
              transition={{duration: .5, delay: .4}}
            id={homeStyle.hero_second_title}>
              Webflow Designer
            </motion.h1>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <motion.p
                  initial={{color: "#555555"}}
                  animate={{color: "#ffffff"}}
                  transition={{duration: .5, delay: .8}}
                id={homeStyle.strategyText}>Just a Design and Strategy Agency with an aduptive approach to problem solving</motion.p>
              </div>
              <div className="col-lg-6">
                <motion.h1
                  initial="start"
                  animate="end"
                  variants={fontUp}
                  transition={{duration: .5, delay: 1}}
                id={homeStyle.hero_third_title}>
                  & Developer
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial="start"
              animate="end"
              variants={fontUp}
              transition={{duration: .5, delay: 1.2}}
            className="mt-4">I design and code beautifully simple things and i love what i do. Just simple like that!</motion.p>

          </div>
          <div className="col-lg-6">
            <motion.div
              initial={{scale: 0, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{duration: 1}}
            >
              <Image src={myself} loading="lazy" width="0" height="0" layout="responsive" alt="" />
            </motion.div>
          </div>
        </div>
      </section>
        
      <section id={homeStyle.second_section}>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <motion.h2
                  initial="start"
                  whileInView="end"
                  variants={fontUp}
                  transition={{duration: .5}}
                >4+</motion.h2>
                <motion.p
                  initial={{x: 100, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: .5, delay: .4}}
                >YEARS OF EXPERIENCE</motion.p>
              </div>
              <div className="col-lg-6 col-md-6">
                <motion.h2
                  initial="start"
                  whileInView="end"
                  variants={fontUp}
                  transition={{duration: .5}}
                >182+</motion.h2>
                <motion.p
                  initial={{x: 100, opacity: 0}}
                  whileInView={{x: 0, opacity: 1}}
                  transition={{duration: .5, delay: .8}}
                >PROJECTS COMPLETED ON 15 COUNTRIES</motion.p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
              <Link href="#page_portfolio_section__uNVS7">
                <motion.div
                  initial={{scale: 0, opacity: 0}}
                  whileInView={{scale: 1, opacity: 1}}
                  transition={{duration: .5}}
                className={homeStyle.roundImg}>
                    <div className="position-absolute">
                      <FaLongArrowAltDown id={homeStyle.arrowIcon} />
                    </div>
                    <Image height="0" width="0" layout="responsive" src={roundImg} alt="" />
                </motion.div>
              </Link>
          </div>
        </div>
      </section>

      <section id={homeStyle.third_section}>
        <div className="row">
          <div className="col-lg-6">
            <motion.p
              initial={{x: -50, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{duration: .5}}
            ><FaRegUser /> ABOUT ------------------- </motion.p>
            <motion.h2
              initial="start"
              whileInView="end"
              variants={fontUp}
              transition={{duration: .5}}
            >Every great design begin with an even better story</motion.h2>
            <motion.p 
              initial="start"
              whileInView="end"
              variants={fontUp}
              transition={{duration: .5, delay: .4}}
            className="mb-5">Since beginning my journey as a freelance designer nearly 8 years ago, I have done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I am quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</motion.p>
          </div>
          <div className="col-lg-6">
            <div className="text-end">
              <motion.p
                initial={{y: 50, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .3, delay: .6}}
              className={homeStyle.thirdLink}><Link href="">Read More About Me <FiArrowDownRight /></Link></motion.p>
            </div>
          </div>
        </div>
      </section>

      <section id={homeStyle.portfolio_section}>
            <motion.p
              initial={{x: -50, opacity: 0}}
              whileInView={{x: 0, opacity: 1}}
              transition={{duration: .5}}
            ><RxDragHandleDots2 /> PORTFOLIO ------------------- </motion.p>
            <motion.h2
              initial="start"
              whileInView="end"
              variants={fontUp}
              transition={{duration: .5, delay: .4}}
            >Featured Projects</motion.h2>

            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8 my-4">
                <Link href="https://664parvez.github.io/GSAP-website-one/">
                  <motion.div 
                    initial={{scale: 0, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{duration: .3, delay: .2}}
                  >
                    <Image src={project1} loading="lazy" width="0" height="0" layout="responsive" alt="" />
                  </motion.div>
                </Link>
                <h3 className="mt-4">Expanet - Service Provider</h3>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-6 my-4">
                <Link href="https://addison-interior.netlify.app/">
                  <motion.div 
                    initial={{scale: 0, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{duration: .3, delay: .4}}
                  >
                    <Image src={project2} loading="lazy" width="0" height="0" layout="responsive" alt="" />
                  </motion.div>
                </Link>
                <h3 className="mt-4">Addison - Interior Service</h3>
              </div>
              <div className="col-lg-6 my-4">
                <Link href="https://get-course.vercel.app/">
                  <motion.div 
                    initial={{scale: 0, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    transition={{duration: .3, delay: .4}}
                  >
                    <Image src={project4} loading="lazy" width="0" height="0" layout="responsive" alt="" />
                  </motion.div>
                </Link>
                <h3 className="mt-4">hi Study - Education/Courses Portal</h3>
              </div>
            </div>

            <div className="text-center">
              <motion.div
                initial={{scale: 0, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                transition={{duration: .3}}
              >
                <Link href="portfolio" id={homeStyle.portfoli_btn} className="btn btn-lg">See More <FiArrowUpRight /></Link>
              </motion.div>
            </div>
      </section>

      <section id={homeStyle.price_section}>
        <motion.p
          initial={{x: -50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: .5}}
        ><FaDollarSign/> PRICING ------------------- </motion.p>
        <motion.h2
          initial="start"
          whileInView="end"
          variants={fontUp}
          transition={{duration: .5, delay: .4}}
        className="mb-5" id={homeStyle.priceTitle}>My Pricing</motion.h2>

        <div className="row">

          <div className="col-lg-4 mt-3">
            <motion.div
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: .3}}
            id={homeStyle.priceDiv}>
              <div className="row">
                <div className="col-6">
                  <h4><b>Basic</b></h4>
                </div>
                <div className="col-6">
                  <p>Have design ready to build? or small budget</p>
                </div>
              </div>
                <div>
                  <h2><span>$49</span>/ hours</h2>
                </div>
                <hr />
                <ul>
                  <li>Need your wireframe</li>
                  <li>Design with Figma, Framer</li>
                  <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                  <li>Remote/Online</li>
                  <li>Work in business days, no weekend.</li>
                  <li>Support 6 months</li>
                </ul>

                <Link href="/contact" className="btn btn-lg">Get This Package</Link>
            </motion.div>
          </div>

          <div className="col-lg-4 mt-3">
            <motion.div
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: .3, delay: .2}}
            id={homeStyle.priceDiv}>
              <div className="row">
                <div className="col-6">
                  <h4><b>Standard</b></h4>
                </div>
                <div className="col-6">
                  <p>Have design ready to build? or small budget</p>
                </div>
              </div>
                <div>
                  <h2><span>$99</span>/ hours</h2>
                </div>
                <hr />
                <ul>
                  <li>Need your wireframe</li>
                  <li>Design with Figma, Framer</li>
                  <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                  <li>Remote/Online</li>
                  <li>Work in business days, no weekend.</li>
                  <li>Support 6 months</li>
                </ul>

                <Link href="/contact" className="btn btn-lg">Get This Package</Link>
            </motion.div>
          </div>

          <div className="col-lg-4 mt-3">
            <motion.div
              initial={{y: 100, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: .3, delay: .4}}
            id={homeStyle.priceDiv}>
              <div className="row">
                <div className="col-6">
                  <h4><b>Primeum</b></h4>
                </div>
                <div className="col-6">
                  <p>Have design ready to build? or small budget</p>
                </div>
              </div>
                <div>
                  <h2><span>$190</span>/ hours</h2>
                </div>
                <hr />
                <ul>
                  <li>Need your wireframe</li>
                  <li>Design with Figma, Framer</li>
                  <li>Implement with Webflow, React, WordPress, Laravel/PHP</li>
                  <li>Remote/Online</li>
                  <li>Work in business days, no weekend.</li>
                  <li>Support 6 months</li>
                </ul>

                <Link href="/contact" className="btn btn-lg">Get This Package</Link>
            </motion.div>
          </div>
        </div>
        <p className="mt-5">Don't find any package match with your plan! Want to setup a new tailor-made package for only you? <Link href="/contact" id={homeStyle.price_section_contact}>Contact Me</Link></p>
      </section>

      <section id={homeStyle.brand_section}>
        <h2>Work With <motion.span
          initial={{scale: 0, opacity: 0}}
          whileInView={{scale: 1, opacity: 1}}
          transition={{duration: .3, delay: .4}}
        >60+</motion.span> Brands Worldwide</h2>
        <div className="row text-center d-flex justify-content-center">
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://artevointerior.com/">
              <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .3, delay: .2}}
              >
                <Image src={clogo1} loading="lazy" width="0" height="0" layout="responsive" alt=""/>
              </motion.div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="http://www.beonscale.com/">
              <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .3, delay: .4}}
              >
                <Image src={clogo2} loading="lazy" width="0" height="0" layout="responsive" alt=""/>
              </motion.div>
            </Link> 
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://buynsell.jamidaribd.com/">
              <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .3, delay: .6}}
              >
                <Image src={clogo3} loading="lazy" width="0" height="0" layout="responsive" alt=""/>
              </motion.div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://outsourcingtrainingbd.com/">
              <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .3, delay: .8}}
              >
                <Image src={clogo4} loading="lazy" width="0" height="0" layout="responsive" alt=""/>
              </motion.div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://www.ukdreamseducation.com/">
              <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .3, delay: 1}}
              >
                <Image src={clogo5} loading="lazy" width="0" height="0" layout="responsive" alt=""/>
              </motion.div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://sr.enterprise.ajaagro.com/">
              <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .3, delay: 1.2}}
              >
                <Image src={clogo6} loading="lazy" width="0" height="0" layout="responsive" alt=""/>
              </motion.div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://clipping-path-website-final.vercel.app/">
              <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .3, delay: 1.4}}
              >
                <Image src={clogo7} loading="lazy" width="0" height="0" layout="responsive" alt=""/>  
              </motion.div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://dms-live-tv.vercel.app/">
              <motion.div
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: .3, delay: 1.6}}
              >
                <Image src={clogo8} loading="lazy" width="0" height="0" layout="responsive" alt=""/>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
      
    </>
  );
}
