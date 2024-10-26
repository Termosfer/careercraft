import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import "./error.css"
import notFound from "../../assets/img/p404.png"


const ErrorNotFound = () => {
    return (
        <>
            <div className=' notF-page'>
                <Container className='w-75'>
                    <div className="notfound d-flex">
                        <img className='w-75' src={notFound} alt="" />
                        <div className="text-nf">
                            <Link to={"/"}>
                                <IoArrowBackCircleOutline />
                                Back to Home Page
                            </Link>

                            <h3>Oops...This page is not Found.</h3>
                        </div>
                    </div>
                </Container>




            </div>
        </>
    )
}

export default ErrorNotFound