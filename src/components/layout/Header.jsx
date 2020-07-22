import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header className="sticky top-0 m-4 mb-12 z-10 bg-white shadow-xl rounded-lg">
        <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
            <div className="flex items-center text-3xl font-extrabold text-gray-600">
                <Link to="/"> PSYCODER01 </Link>
            </div>
            <div className="text-blue-600 flex mt-4 text-primary sm:mt-0">
                <Link className="px-4" to="/skills">
                    SKILLS
                </Link>
                <Link className="px-4" to="/projects">
                    PROJECTS
                </Link>
                <Link className="px-4" to="/contact">
                    CONTACT
                </Link>
            </div>
        </div>
    </header>
);

export default Header;
