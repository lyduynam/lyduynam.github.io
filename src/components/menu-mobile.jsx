"use client";
import { faChevronDown, faEnvelope, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MenuMobile = () => {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(false);
    
    const isActive = (path) => {
        return pathname === path;
    };
    
    const paths = [
        {
            "link": "/",
            "label": "About me"
        },
        {
            "link": "/updates",
            "label": "Updates",
            "disabled": true
        },
        {
            "link": "/projects",
            "label": "Projects",
            "disabled": true
        },
        {
            "link": "/publications",
            "label": "Publications"
        }
    ];
    
    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };
    
    // Filter paths based on expanded state
    const visiblePaths = isExpanded ? paths : paths.filter(path => isActive(path.link));
    
    return (
        <div className="menu text-[1.2em] font-bold relative bg-gray-100 mb-10! p-4">
            <ul className="space-y-4">
                {visiblePaths.map((path) => (
                    <li key={path.link}>
                        {path.disabled ? (
                            <span
                                className="menu-item text-gray-400 disabled"
                                title="Coming soon"
                            >
                                {path.label}
                            </span>
                        ) : (
                            <Link
                                href={path.link}
                                className={
                                    "menu-item" + (isActive(path.link) ? " active text-black" : "")
                                }
                            >
                                {path.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
            <button 
                onClick={toggleMenu}
                className="text-base absolute top-[0.75em] right-[1em] bg-gray-200 hover:bg-gray-300 space-x-2 px-4 py-2 rounded cursor-pointer transition-colors"
            >
                <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
                <span>{isExpanded ? "Close" : "More"}</span>
            </button>
        </div>
    );
}
export default MenuMobile;