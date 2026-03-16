import React from "react";

export default function Header() {
    return (
        <header className="main-header header-style-one">
            <div className="container-fluid px-0">
                <div className="flex justify-between items-center py-md-2 px-md-4 px-2">
                    <a href="/" className="navbar-brand d-none d-lg-inline">
                        <img
                            src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/img/30-years-logo.png"
                            alt="logo"
                        />
                    </a>

                    <div className="flex justify-center items-center">
                        <a href="/">
                            <img
                                src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/img/main-logo.png"
                                className="main-logo"
                                alt="logo"
                            />
                        </a>
                    </div>

                    <div className="hidden lg:flex items-center gap-2">
                        <a href="#" className="btn-admission btn bg-theme-golden d-none d-lg-inline py-1 text-white">
                            <img src="https://resources.edunexttechnologies.com/web-data/gdgsj/images/admission-icon.svg" alt="Best School in Roorkee"></img>
                            Admission Enquiry
                        </a>
                        <a href="#" className="btn-erp btn bg-theme-primary d-none d-lg-inline edu-btn py-1 text-white">
                            <img src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/img/admission.svg" alt="Best School in Roorkee"></img>
                            ERP Login
                        </a>``
                    </div>

                    <button className="d-lg-none btn btn-dark">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>

                {/* NAVBAR */}
                <nav className="hidden lg:flex justify-center bg-blue-600">
                    <ul className="flex gap-4 text-white list-unstyled m-0 py-2">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Admissions</a>
                        </li>
                        <li>
                            <a href="#">Academics</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* MOBILE MENU */}
            <div className="mobile-menu">
                <nav
                    className="menu-box"
                    tabIndex={1}
                    style={{
                        overflow: "hidden",
                        outline: "none",
                        cursor: "grab",
                    }}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </nav>

                {/* SCROLL BAR FIXED */}
                <div
                    className="nicescroll-cursors"
                    style={{
                        position: "relative",
                        top: "0px",
                        float: "right",
                        width: "6px",
                        height: "200px",
                        backgroundColor: "rgb(66, 66, 66)",
                        border: "none",
                        backgroundClip: "padding-box",
                        borderRadius: "0px",
                    }}
                ></div>
            </div>
        </header>
    );
}
