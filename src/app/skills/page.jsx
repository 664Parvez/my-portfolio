import React from "react";
import Image from "next/image"
import Link from "next/link"

import Pageheading from "../components/page-heading";
import skillStyle from "../styles/skill.module.css"

import roundImg from "../../../public/image/skills/skill-round-text.png"
import skill1 from "../../../public/image/skills/1.png"
import skill2 from "../../../public/image/skills/2.png"
import skill3 from "../../../public/image/skills/3.png"
import skill4 from "../../../public/image/skills/4.png"
import skill5 from "../../../public/image/skills/5.png"
import skill6 from "../../../public/image/skills/6.png"
import skill7 from "../../../public/image/skills/7.png"
import skill8 from "../../../public/image/skills/8.png"
import skill9 from "../../../public/image/skills/9.png"
import skill10 from "../../../public/image/skills/10.png"
import skill11 from "../../../public/image/skills/11.png"
import skill12 from "../../../public/image/skills/12.png"
import skill13 from "../../../public/image/skills/13.png"
import skill14 from "../../../public/image/skills/14.png"
import skill15 from "../../../public/image/skills/15.png"
import skill16 from "../../../public/image/skills/16.png"

const Skills = () => {
    return (
        <>
            <Pageheading title="My Skills" image={roundImg} />

            <div id={skillStyle.skill_section}>
                <div className="row d-flex justify-content-center text-center">
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://html.com/" target="_blank">
                            <Image src={skill1} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                            <Image src={skill2} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://www.javascript.com/" target="_blank">
                            <Image src={skill3} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://react.dev/" target="_blank">
                            <Image src={skill4} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://nextjs.org/" target="_blank">
                            <Image src={skill5} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://ejs.co/" target="_blank">
                            <Image src={skill6} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://tailwindcss.com/" target="_blank">
                            <Image src={skill7} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://gsap.com/" target="_blank">
                            <Image src={skill8} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://sass-lang.com/" target="_blank">
                            <Image src={skill9} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://redux-toolkit.js.org/" target="_blank">
                            <Image src={skill10} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://www.framer.com/motion/" target="_blank">
                            <Image src={skill11} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://www.mongodb.com/" target="_blank">
                            <Image src={skill12} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://getbootstrap.com/" target="_blank">
                            <Image src={skill13} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <Link href="https://nodejs.org/en" target="_blank">
                            <Image src={skill14} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-6">
                        <Link href="https://wordpress.org/" target="_blank">
                            <Image src={skill15} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href="https://expressjs.com/">
                            <Image src={skill16} width="0" height="0" layout="responsive"  alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills