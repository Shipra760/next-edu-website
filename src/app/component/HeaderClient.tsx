"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function HeaderClient({ menu }: any) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="main-header header-style-one">
            <div className="container-fluid px-0">

                {/* TOP BAR */}
                <div className="flex justify-between items-center py-md-2 px-md-4 px-2">

                    <a href="/" className="hidden lg:inline">
                        <img src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/img/30-years-logo.png" />
                    </a>

                    <div className="flex justify-center items-center">
                        <img src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/img/main-logo.png" />
                    </div>

                    <div className="hidden lg:flex items-center gap-2">
                        <a className="px-3 py-1 bg-(--theme-golden) text-white">
                            Admission Enquiry
                        </a>
                        <a className="px-3 py-1 bg-(--theme-primary) text-white">
                            ERP Login
                        </a>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setIsOpen(true)}
                    >
                        ☰
                    </button>
                </div>

                {/* ================= DESKTOP MENU ================= */}
                <nav className="hidden lg:flex justify-center bg-(--theme-primary)">
                    <ul className="flex gap-4 text-white py-2">
                        {menu?.map((item: any) => (
                            <li key={item.id} className="relative group">

                                <Link
                                    href={item.slug}
                                    className="px-3 py-2 block hover:bg-(--theme-golden)"
                                >
                                    {item.name}
                                </Link>

                                {item.children?.length > 0 && (
                                    <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black shadow-md w-max">
                                        {item.children.map((sub: any) => (
                                            <li key={sub.id}>
                                                <Link
                                                    href={sub.slug}
                                                    className="block px-5 py-3 whitespace-nowrap w-[160px] text-(--theme-primary) hover:bg-(--theme-golden) hover:text-white"
                                                >
                                                    {sub.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ================= MOBILE SIDEBAR ================= */}
                <div
                    className={`fixed top-0 right-0 h-full w-full bg-[var(--theme-primary)] z-50 transform transition-transform duration-300 ease-in-out
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >

                    {/* Header */}
                    <div className="flex justify-between items-center p-4 bg-white">
                        <img src="https://resources.edunexttechnologies.com/web-data/gdg-roorkee/img/main-logo.png" style={{    height: "2.5rem"}} alt="" />
                        <button onClick={() => setIsOpen(false)}>✕</button>
                    </div>

                    {/* Menu */}
                    <ul className="text-white p-4">
                        {menu?.map((item: any) => (
                            <MobileItem key={item.id} item={item} />
                        ))}
                    </ul>

                </div>

            </div>
        </header>
    );
}

/* MOBILE ITEM */

function MobileItem({ item }: any) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef<HTMLUListElement>(null);


    return (
        <li className="border-b border-gray-700">

            {/* Parent Item */}
            <div
                className="flex justify-between items-center py-0 px-4 cursor-pointer text-white transition-all duration-900"
                onClick={() => setOpen(!open)}
            >
                <span className="text-sm font-medium">{item.name}</span>

                {item.children?.length > 0 && (
                    <span
                        className={`bg-[#2e3d73] p-2 rounded transition-transform duration-300  ${open ? "rotate-180" : ""
                            }`}
                    >
                        <i className="fa-solid fa-angle-down text-xs"></i>
                    </span>
                )}
            </div>

            {/* Submenu */}
            {open && item.children && (
                <ul ref={contentRef}
                    style={{
                        maxHeight: open
                            ? contentRef.current?.scrollHeight + "px"
                            : "0px",
                    }}
                    className="overflow-hidden transition-all duration-500 ease-in-out">
                    {item.children.map((sub: any) => (
                        <li
                            key={sub.id}
                            className="flex items-center gap-3 px-4 py-3 text-white hover:bg-(--theme-golden) transition-all" style={{ paddingLeft: "1rem", marginBottom: "0.4rem" }}
                        >
                            {/* Arrow icon */}
                            <i className="fa-solid fa-arrow-right"></i>

                            <Link href={sub.slug} className="text-sm w-full">
                                {sub.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}