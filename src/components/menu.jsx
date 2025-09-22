"use client";
import { faEnvelope, faHandWave, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
    const pathname = usePathname();
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
    return (
        <div className="menu text-[1em] font-bold ">
            {/* Greeting Section with Icons */}
            <div className="mb-3 sm:mt-0 mt-10 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <div className="flex items-center space-x-2 mb-1">
                    <span className="text-base font-semibold text-gray-800">👋 Welcome!</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-600">
                    I'm Nam, a researcher passionate about HCI, XR, and AI technologies
                </div>
              
            </div>
            
            <ul className="space-y-4 bottom-border-line py-[2em] mt-[2em] top-border-line">
                {paths.map((path) => (
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
            <div className="mt-[2em] text-gray-500">
                <div className=" text-[0.9em]">Contact Information:</div>
                <a href="mailto:ldnam@selab.hcmus.edu.vn" className="flex flex-row justify-start space-x-2 text-[0.8em] clickable">
                    <FontAwesomeIcon icon={faEnvelope} size="1x" className="my-auto h-full " />
                    <div className="my-auto h-full  ">ldnam@selab.hcmus.edu.vn</div>

                </a>
            </div>
        </div>
    );
}
export default Menu;