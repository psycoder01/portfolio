import React from "react";

//Importing Images
import profile from "../assets/profile.png";
import facebook from "../assets/facebook.webp";
import github from "../assets/github.webp";
import devto from "../assets/dev.webp";

export default () => (
    <React.Fragment>
        <div className="container p-4 mx-auto">
            <div className="flex flex-col md:flex-row content-center md:justify-around">
                <img
                    className="h-64 w-64 md:h-68 md:w-68 lg:h-72 lg:w-72 bg-white rounded-full shadow-2xl mx-auto md:mx-16 p-4"
                    src={profile}
                    alt="profile-img"
                />
                <div className="flex flex-col mx-auto md:text-xl lg:text-2xl text-blue-600 pt-8 md:pt-16">
                    <div className="display-info md:space-y-6">
                        <p>Hello ! My Name is Aakash Chaudhary .</p>
                        <p>I'm a Software Developer .</p>
                        <p>
                            I can help you to make your ideas roll into
                            Production !!
                        </p>
                    </div>
                    <div>
                        <button
                            className="bg-gray-600 md:mt-8 lg:mt-16 text-white shadow-2xl rounded-lg w-24 h-12 md:w-40 md:h-16"
                            style={{ outline: "none" }}
                            onClick={() => {
                                window.open(
                                    "mailto:aakashchy13@gmail.com?subject=Summoned"
                                );
                            }}
                        >
                            Hire ME
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-row mt-4 sm:mt-12 space-x-8 mx-auto w-64">
                <a href="https://www.facebook.com/aakash.chaudhary.13">
                    <img src={facebook} alt="" />
                </a>
                <a href="https://www.github.com/psycoder01">
                    <img src={github} alt="" />
                </a>
                <a href="https://dev.to/psycoder01">
                    <img src={devto} alt="" />
                </a>
            </div>
        </div>
    </React.Fragment>
);
