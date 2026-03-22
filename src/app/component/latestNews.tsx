"use client"

import Marquee from "react-fast-marquee";

export default function newsMarquee() {
    return (
        <>
            <div className="latest-news relative">
                <div className="content-news flex mx-auto font-medium py-1">

                    <Marquee pauseOnHover={true} speed={50}>
                        <div className="items-center inline-flex ps-3 text-gray-800">

                            <span className="marquee-text">
                                <span className="text-color font-bold">02 Jun 2025</span>
                            </span>

                            <span className="ml-2 text-color">
                                Welcome to GD Goenka School
                            </span>

                        </div>
                    </Marquee>

                </div>

                <div className="latest-news-section">
                    <span>Latest News</span>

                    <img
                        src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/img/bird.png"
                        className="bird-img"
                        alt="Best School in Roorkee"
                    />
                </div>
            </div>



        </>
    );
}