import React from "react";
import profile from "../assets/profile.png";
export default () => (
    <React.Fragment>
        <div className="container p-4">
            <div className="flex flex-row justify-around">
                <img
                    className="h-72 w-72 rounded-full shadow-2xl mx-16"
                    src={profile}
                    alt="profile-img"
                />
                <div className="display-info flex flex-col justify-around text-2xl p-16 shadow-2xl bg-gray-200 rounded-lg">
                    <p>Hello ! My Name is Aakash Chaudhary</p>
                    <p>I'm a Software Developer</p>
                    <p>
                        I can help you to make your ideas roll into Production!!
                    </p>
                </div>
            </div>
            <div className=""></div>
        </div>
    </React.Fragment>
);
