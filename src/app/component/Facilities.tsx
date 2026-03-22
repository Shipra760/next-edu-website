"use client"
import React from 'react'

export default function Facilities() {
    return (
        <>
            <section className="facilities-section facilitie-sec-card py-2 md:py-3 lg:py-5">
                <div className="container-fluid py-2 md:py-3">
                    <div className="section-header">
                        <div className="section-tag">CAMPUS &amp; FACILITIES</div>
                        <h2 className="section-title">Spaces Designed for Learning &amp; Growth</h2>
                    </div>
                </div>

                <div className="flex mb-3 lg:justify-between justify-center gap-2 items-center">
                    <div className="facility-grid">
                        <div className="col-computer facility-card"><a href="facilities.php?id=1">
                            <div className="facility-item rounded-3"><img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769591290632_Guidance_and_Support.jpg" className="rounded-3" alt="Best School in Roorkee" />
                                <div className="facility-overlay"><p className="facility-title h3">Guidance and Support</p></div></div></a></div>
                        <div className="col-music facility-card">
                            <a href="facilities.php?id=2"><div className="facility-item rounded-3"><img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769858732003_Library_Medium.jpeg" className="rounded-3" alt="Best School in Roorkee" />
                            <div className="facility-overlay"><p className="facility-title h3 ">Library</p></div></div></a></div><div className="col-library facility-card"><a href="facilities.php?id=3"><div className="facility-item rounded-3"><img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769859214242_Seamless_Transport_Medium.jpeg" className="rounded-3" alt="Best School in Roorkee" />
                                <div className="facility-overlay">
                                    <p className="facility-title h3 ">Seamless Transportation</p></div></div></a></div><div className="col-reception facility-card"><a href="facilities.php?id=4"><div className="facility-item rounded-3"><img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769590972822_Science_Labs.jpg" className="rounded-3" alt="Best School in Roorkee" />
                                    <div className="facility-overlay"><p className="facility-title h3 ">Science Labs</p></div></div></a></div><div className="col-hall facility-card"><a href="facilities.php?id=5"><div className="facility-item rounded-3"><img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769858861476_Music_Room_Medium.jpeg" className="rounded-3" alt="Best School in Roorkee" />
                                        <div className="facility-overlay"><p className="facility-title h3 ">Music Rooms</p></div></div></a></div>
                        <div className="col-biology facility-card">
                            <a href="facilities.php?id=6"><div className="facility-item rounded-3"><img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769858613828_Infilamry.jpeg" className="rounded-3" alt="Best School in Roorkee" />
                            <div className="facility-overlay"><p className="facility-title h3 ">Sick Bay</p></div></div></a></div><div className="col-classNameroom facility-card"><a href="facilities.php?id=9"><div className="facility-item rounded-3"><img src="https://edunext-main-storage-cf.edunexttechnologies.com/gdgrorkee/school___static/1769859381572_Smart_className_Medium.jpeg" className="rounded-3" alt="Best School in Roorkee" />
                                <div className="facility-overlay">
                                    <p className="facility-title h3 ">Smart classNamees</p></div></div></a></div></div><div className="flex content-center py-3"><a href="facilities.php" className="btn btn-gold"><span className="fw-semibold">View All</span></a></div>
                </div>
            </section>z`z`
        </>
    )
}
