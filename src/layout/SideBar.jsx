import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function SideBar({ isSideBarOpen, setIsSideBarOpen }) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        if (isSideBarOpen) {
            // Açılma animasiyası
            gsap.to(sidebarRef.current, {
                duration: 0.8,
                opacity: 1,
                x: 0,
                ease: "power2.out",
                pointerEvents: "auto",
            });
        } else {
            // Bağlanma animasiyası
            gsap.to(sidebarRef.current, {
                duration: 0.6,
                opacity: 0,
                x: 0,
                ease: "power2.in",
                pointerEvents: "none",
            });
        }
    }, [isSideBarOpen]);

    return (
        <div
            ref={sidebarRef}
            className="bg-[#808080] w-full h-screen fixed top-0 left-0 opacity-0 z-10"
        >
            <div className="relative h-full">
                <div className="flex flex-col gap-4 absolute top-1/2 left-0 -translate-y-1/2 text-white text-5xl p-16"
                    style={{ fontFamily: '"Neue Haas Unica W1G", sans-serif', fontWeight: 400 }}>
                    <Link to="/" onClick={() => setIsSideBarOpen(false)}>Home</Link>
                    <Link to="/projects" onClick={() => setIsSideBarOpen(false)}>Projects</Link>
                    <Link to="/services" onClick={() => setIsSideBarOpen(false)}>Services</Link>
                    <Link to="/about" onClick={() => setIsSideBarOpen(false)}>About</Link>
                    <Link to="/news" onClick={() => setIsSideBarOpen(false)}>News</Link>
                    <Link to="/contact" onClick={() => setIsSideBarOpen(false)}>Contact</Link>
                </div>
            </div>
        </div>
    );
}
