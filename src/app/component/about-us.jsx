"use client"
import React from 'react'

export default function aboutUs() {
    return (
        <>
            <section className="about-us py-3 md:py-5 md:px-3">
                <div className="container-fluid">
                    <div className="flex items-center justify-center">
                        <div className="md:w-5/12 mx-auto">
                            <div className="about relative">
                                <div className="section-header">
                                    <div className="section-tag">About Us</div>
                                    <h1 className="section-title mb-3">Shaping Young Minds for the Future</h1>
                                </div>

                                <video width="550" controls autoPlay muted loop className="mx-auto w-full max-w-150 mb-3">
                                    <source src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/video/about-video-img.mp4" type="video/mp4" /> Your browser does not support the video tag. </video>

                                <img src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/img/about-bird.svg" className="about-bird hidden lg:inline img-fluid" alt="Best School in Roorkee" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full md:w-10/12 mx-auto">
                            <p className="fw-medium mt-5 lg:mt-0 text-center text-color mb-4">Education is the foundation of a brighter future, and at GD Goenka School Roorkee, we offer an unparalleled platform for your child’s growth. With world-className facilities, a value-driven curriculum, and experienced educators, we aim to empower students to achieve their fullest potential. Our motto, “Higher, Stronger, Brighter,” reflects our belief in excellence at every level.</p>
                            <div className="flex justify-center">
                                <a href="about-school" className="btn-gold"><span>Know More</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
