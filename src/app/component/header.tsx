import React from "react";
import Link from "next/link";

async function getMenu() {
    try {
        const res = await fetch("http://127.0.0.1:3000/api/menu", {
            cache: "no-store",
        });

        return res.json();
    } catch {
        return [];
    }
}
export default async function Header() {
    const menu = await getMenu();
    // console.log(menu)
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
                        <a
                            href="#"
                            className="btn-admission btn bg-theme-golden d-none d-lg-inline py-1 text-white"
                        >
                            <img
                                src="https://resources.edunexttechnologies.com/web-data/gdgsj/images/admission-icon.svg"
                                alt="Best School in Roorkee"
                            ></img>
                            Admission Enquiry
                        </a>
                        <a
                            href="#"
                            className="btn-erp btn bg-theme-primary d-none d-lg-inline edu-btn py-1 text-white"
                        >
                            <img
                                src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/img/admission.svg"
                                alt="Best School in Roorkee"
                            ></img>
                            ERP Login
                        </a>
                        ``
                    </div>

                    <button className="d-lg-none btn btn-dark">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>

                {/* NAVBAR */}
                <nav className="hidden lg:flex justify-center bg-theme-primary">
                    <ul className="flex gap-4 text-white list-unstyled m-0 py-2">
                        {menu && menu.length > 0 ? (
                            menu.map((item: any) => (
                                <li key={item.id} className="relative group">

                                    {/* Main Menu */}
                                    <Link href={item.slug} className="px-2 py-1 block text-white hover:bg-theme-golden">
                                        {item.name}
                                        {item.children && item.children.length > 0 && (
                                            <i className="fa-solid fa-chevron-down text-xs ms-2"></i>

                                        )}
                                    </Link>




                                    {/* Submenu */}
                                    {
                                        item.children && item.children.length > 0 && (
                                            <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black shadow-md min-w-37.5">
                                                {item.children.map((sub: any) => (
                                                    <li key={sub.id} className="px-4 py-3 border-b border-gray-200  text-white">
                                                        <Link href={sub.slug} className="px-4">
                                                            {sub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )
                                    }

                                </li>
                            ))
                        ) : (
                            <li>Menu not found</li>
                        )}
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
                    }}
                >
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
        </header >
    );
}
