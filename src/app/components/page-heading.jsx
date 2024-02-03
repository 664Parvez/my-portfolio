import React from "react"
import Image from "next/image"

import { FaLongArrowAltDown } from "react-icons/fa";

import headingStyle from "../styles/page-heading.module.css"

const Pageheading = ({title, image}) => {
    return (
        <>
            <div id={headingStyle.headingSection}>
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <h1 className="text-start">{title}</h1>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                        <div className={headingStyle.roundImg}>
                            <div className="position-absolute">
                                <FaLongArrowAltDown id={headingStyle.arrowIcon} />
                            </div>
                            <Image src={image} width="0" height="0" layout="responsive" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pageheading