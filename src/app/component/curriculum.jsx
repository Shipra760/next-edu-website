"use client";
import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Curriculum() {
    return (
        <>
            <section className="curriculum py-3 md:py-5 md:px-3">
                <div className="container-fluid">
                    <div className="items-center content-evenly flex mx-0 mx-md-3 mx-lg-5">
                        <div className="md:w-4/12">
                            <div className="right-line-section">
                                <p className="right-line-tag">CURRICULUM PROGRAMMES</p>
                                <h4 className="right-line-title">
                                    Structured Learning for Every Stage
                                </h4>
                            </div>
                        </div>
                        <div className="w-full md:w-8/12 mt-2 md:mt-0">
                            <Swiper className="mySwiper"
                                modules={[Navigation]}
                                navigation
                                spaceBetween={20}
                                loop={true}
                                slidesPerView={3}

                                autoplay={{ delay: 500 }}
                            // breakpoints={{
                            //     768: { slidesPerView: 2 },
                            //     1024: { slidesPerView: 5 },
                            // }}
                            >
                                <SwiperSlide>
                                    <div className="rounded-lg overflow-hidden curriculum-card">
                                        <a href="#">
                                            <img
                                                src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769767904442_Goenkan_market_.jpeg"
                                                className="w-full mb-2"
                                                alt="Best School in Roorkee"
                                            />
                                        </a>

                                        <div className="flex justify-between items-start">
                                            <a href="">
                                                <div className="ml-3">
                                                    <h6 className="text-white font-bold mb-0">
                                                        Pre-Primary
                                                    </h6>
                                                    <p className="text-white italic mb-1">
                                                        Nursery to II
                                                    </p>
                                                </div>
                                            </a>

                                            <a
                                                href="curriculum-program.php?id=1"
                                                className="arrow-btn me-3 my-1 md:my-2"
                                            >
                                                <i className="fa fa-angle-right pt-1 text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="rounded-lg overflow-hidden curriculum-card">
                                        <a href="" className="curriculum-card">
                                            <img
                                                src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769774851976_Copy_of_IMG_3907.jpg"
                                                className="w-full mb-2"
                                                alt="Best School in Roorkee"
                                            />
                                        </a>

                                        <div className="flex justify-between items-start">
                                            <a href="curriculum-program.php?id=2">
                                                <div className="ml-3">
                                                    <h6 className="text-white font-bold mb-0">Primary</h6>
                                                    <p className="text-white italic mb-1">
                                                        Grade III to V
                                                    </p>
                                                </div>
                                            </a>

                                            <a
                                                href="curriculum-program.php?id=1"
                                                className="arrow-btn me-3 my-1 md:my-2"
                                            >
                                                <i className="fa fa-angle-right pt-1 text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="rounded-lg overflow-hidden curriculum-card">
                                        <a href="">
                                            <img
                                                src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769773295106_imgi_1.png"
                                                className="w-full mb-2"
                                                alt="Best School in Roorkee"
                                            />
                                        </a>

                                        <div className="flex justify-between items-start">
                                            <a href="">
                                                <div className="ml-3">
                                                    <h6 className="text-white font-bold mb-0">Middle</h6>
                                                    <p className="text-white italic mb-1">
                                                        className VI - VII
                                                    </p>
                                                </div>
                                            </a>

                                            <a
                                                href="curriculum-program.php?id=1"
                                                className="arrow-btn me-3 my-1 md:my-2"
                                            >
                                                <i className="fa fa-angle-right pt-1 text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>





                            </Swiper>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
