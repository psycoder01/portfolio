import React from "react";
//Importing Images
import profile from "../assets/profile.png";
import facebook from "../assets/facebook.webp";
import github from "../assets/github.webp";
import devto from "../assets/dev.webp";

export default () => (
    <React.Fragment>
        <div className="container p-4">
            <div className="flex flex-row justify-around">
                <img
                    className="h-72 w-72 bg-white rounded-full shadow-2xl mx-16 p-4"
                    src={profile}
                    alt="profile-img"
                />
                <div className="flex flex-col text-2xl text-blue-600 pt-16">
                    <div className="display-info space-y-6">
                        <p>Hello ! My Name is Aakash Chaudhary .</p>
                        <p>I'm a Software Developer .</p>
                        <p>
                            I can help you to make your ideas roll into
                            Production !!
                        </p>
                    </div>

                    <div>
                        <button
                            className="bg-gray-600 mt-16 text-white shadow-2xl rounded-lg w-40 h-16"
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
            <div className="flex flex-row mt-12 space-x-8 mx-auto w-1/5">
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
