import React from "react"
import Image from "next/image"

import bookacallStyle from "../styles/bookacall.module.css"

import bookacallImg from "../../../public/image/book-a-call/miself.png"

const Bookacall = () => {
    return (
        <>
            <div id={bookacallStyle.bookacall}>
                <h2 className="text-center mb-5">Book A Call</h2>
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <Image src={bookacallImg} width="0" height="0" layout="responsive" alt=""/>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <form action="">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Enter your name" className="form-control" />

                            <label htmlFor="" className="mt-4">Email</label>
                            <input type="email" placeholder="Enter your email" className="form-control" />

                            <label htmlFor="" className="mt-4">I'm interested in</label>
                            <input type="text" placeholder="Enter your interested" className="form-control" />

                            <label htmlFor="" className="mt-4">Message</label>
                            <textarea rows="5" type="text" placeholder="Message here" className="form-control" />

                            <button className="btn btn-lg" id={bookacallStyle.btn}>Send Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookacall