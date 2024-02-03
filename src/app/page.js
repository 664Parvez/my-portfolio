import Image from "next/image";
import Link from "next/link"

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
  return (
    <>
      <section id={homeStyle.hero_section}>
        <div className="row">
          <div className="col-lg-6">

            <h1 id={homeStyle.hero_first_title}>
              Say Hi from <mark>Parvez,</mark>
            </h1>

            <h1 id={homeStyle.hero_second_title}>
              Webflow Designer
            </h1>

            <div className="row align-items-center">
              <div className="col-lg-6">
                <p id={homeStyle.strategyText}>Just a Design and Strategy Agency with an aduptive approach to problem solving</p>
              </div>
              <div className="col-lg-6">
                <h1 id={homeStyle.hero_third_title}>
                  & Developer
                </h1>
              </div>
            </div>

            <p className="mt-4">I design and code beautifully simple things and i love what i do. Just simple like that!</p>

          </div>
          <div className="col-lg-6">
            <Image src={myself} width="0" height="0" layout="responsive" alt="" />
          </div>
        </div>
      </section>
        
      <section id={homeStyle.second_section}>
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h2>4+</h2>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <div className="col-lg-6 col-md-6">
                <h2>182+</h2>
                <p>PROJECTS COMPLETED ON 15 COUNTRIES</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
              <Link href="#page_portfolio_section__uNVS7">
                <div className={homeStyle.roundImg}>
                    <div className="position-absolute">
                      <FaLongArrowAltDown id={homeStyle.arrowIcon} />
                    </div>
                    <Image height="0" width="0" layout="responsive" src={roundImg} alt="" />
                </div>
              </Link>
          </div>
        </div>
      </section>

      <section id={homeStyle.third_section}>
        <div className="row">
          <div className="col-lg-6">
            <p><FaRegUser /> ABOUT ------------------- </p>
            <h2>Every great design begin with an even better story</h2>
            <p className="mb-5">Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
          </div>
          <div className="col-lg-6">
            <div className="text-end">
              <p className={homeStyle.thirdLink}><Link href="">Read More About Me <FiArrowDownRight /></Link></p>
            </div>
          </div>
        </div>
      </section>

      <section id={homeStyle.portfolio_section}>
            <p><RxDragHandleDots2 /> PORTFOLIO ------------------- </p>
            <h2>Featured Projects</h2>

            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8 my-4">
                <Link href="https://664parvez.github.io/GSAP-website-one/">
                  <Image src={project1} width="0" height="0" layout="responsive" alt="" />
                </Link>
                <h3 className="mt-4">Expanet - Service Provider</h3>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-6 my-4">
                <Link href="https://addison-interior.netlify.app/">
                  <Image src={project2} width="0" height="0" layout="responsive" alt="" />
                </Link>
                <h3 className="mt-4">Addison - Interior Service</h3>
              </div>
              <div className="col-lg-6 my-4">
                <Link href="https://get-course.vercel.app/">
                  <Image src={project4} width="0" height="0" layout="responsive" alt="" />
                </Link>
                <h3 className="mt-4">hi Study - Education/Courses Portal</h3>
              </div>
            </div>

            <div className="text-center">
              <Link href="portfolio" id={homeStyle.portfoli_btn} className="btn btn-lg">See More <FiArrowUpRight /></Link>
            </div>
      </section>

      <section id={homeStyle.price_section}>
        <p><FaDollarSign/> PRICING ------------------- </p>
        <h2 className="mb-5" id={homeStyle.priceTitle}>My Pricing</h2>

        <div className="row">

          <div className="col-lg-4 mt-3">
            <div id={homeStyle.priceDiv}>
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
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <div id={homeStyle.priceDiv}>
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
            </div>
          </div>

          <div className="col-lg-4 mt-3">
            <div id={homeStyle.priceDiv}>
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
            </div>
          </div>
        </div>
        <p className="mt-5">Don't find any package match with your plan! Want to setup a new tailor-made package for only you? <Link href="/contact" id={homeStyle.price_section_contact}>Contact Me</Link></p>
      </section>

      <section id={homeStyle.brand_section}>
        <h2>Work With <span>60+</span> Brands Worldwide</h2>
        <div className="row text-center d-flex justify-content-center">
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://artevointerior.com/">
              <Image src={clogo1} width="0" height="0" layout="responsive" alt=""/>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="http://www.beonscale.com/">
              <Image src={clogo2} width="0" height="0" layout="responsive" alt=""/>
            </Link> 
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://buynsell.jamidaribd.com/">
              <Image src={clogo3} width="0" height="0" layout="responsive" alt=""/>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://outsourcingtrainingbd.com/">
              <Image src={clogo4} width="0" height="0" layout="responsive" alt=""/>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://www.ukdreamseducation.com/">
              <Image src={clogo5} width="0" height="0" layout="responsive" alt=""/>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://sr.enterprise.ajaagro.com/">
              <Image src={clogo6} width="0" height="0" layout="responsive" alt=""/>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://clipping-path-website-final.vercel.app/">
              <Image src={clogo7} width="0" height="0" layout="responsive" alt=""/>  
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <Link href="https://dms-live-tv.vercel.app/">
              <Image src={clogo8} width="0" height="0" layout="responsive" alt=""/>
            </Link>
          </div>
        </div>
      </section>
      
    </>
  );
}
