import React from 'react'

//Importing Images
import profile from '../assets/profile.jpg'
import facebook from '../assets/facebook.webp'
import github from '../assets/github.webp'
import devto from '../assets/dev.webp'

import dev from '../assets/illustrations/dev.svg'

import Typewriter from 'typewriter-effect'

export default () => (
    <React.Fragment>
        <div className="container p-4 mx-auto">
            <div className="flex flex-col md:flex-row content-center md:justify-around" >
                <img
                    className="h-64 w-64 md:h-68 md:w-68 lg:h-72 lg:w-72 bg-white rounded-full shadow-2xl mx-auto md:mx-16 p-4"
                    src={profile}
                    alt="profile-img"
                    data-aos="flip-right"
                    data-aos-delay="1000"
                    data-aos-duration="3000"
                />
                <div className="flex flex-col mx-auto md:text-xl lg:text-2xl text-teal-900 pt-8 md:pt-16">
                    <div className="display-info md:space-y-6">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2000)
                                    .typeString('Hello !')
                                    .pauseFor(1500)
                                    .typeString('  My Name is ')
                                    .typeString(' Psycoder01')
                                    .deleteChars(10)
                                    .typeString(' Aakash Chaudhary .')
                                    .pauseFor(5000)
                                    .start()
                            }}
                        />
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(13000)
                                    .typeString("I'm a Software Developer .")
                                    .start()
                            }}
                        />
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(17000)
                                    .typeString(
                                        'I can help you to make your ideas work in real world !!'
                                    )
                                    .start()
                            }}
                        />
                        <p></p>
                    </div>
                    <div>
                        <button
                            className="bg-gray-600 md:mt-8 lg:mt-16 text-white shadow-2xl rounded-lg w-24 h-12 md:w-40 md:h-16"
                            style={{ outline: 'none' }}
                            onClick={() => {
                                window.open(
                                    'mailto:aakashchy13@gmail.com?subject=Summoned'
                                )
                            }}
                        >
                            Hire ME
                        </button>
                    </div>
                </div>
            </div>
            <img
                src={dev}
                className="hidden sm:block w-64 h-64 lg:h-64 lg:w-72"
                alt="svg"
                style={{
                    position: 'absolute',
                    top:"50vh",
                    right:0,
                    zIndex: '-10',
                }}
            />
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
)
