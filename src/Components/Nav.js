import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [dark, setDark] = useState(false)

    const activeDarkMode = () => {
        setDark(!dark)
        console.log(dark)
    }
    return (
        <nav className="flex-wrap justify-center flex">
            <div className="mx-7 my-7 lg:my-0 ">
                <div id="profile" className=" opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left ">
                        <Link to="/">Home </Link>
                    </div>

                </div>
            </div>
            <div className="mx-7 my-7 lg:my-0">
                <div id="profile" className=" opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/about">About</Link>
                    </div>

                </div>
            </div>
            <div className="mx-7 my-7 lg:my-0">
                <div id="profile" className=" opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/works">My Works </Link>
                    </div>

                </div>
            </div>
            <div className=" mx-7 my-7 lg:my-0">
                <div id="profile" className=" opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/blogs">Blogs</Link>
                    </div>

                </div>
            </div>
            <div className=" mx-7 my-7 lg:my-0">
                <div id="profile" className=" opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/contact">Contact</Link>
                    </div>

                </div>
            </div>
            <div className=" mx-7 my-7 lg:my-0">
                <div id="profile" className=" opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/skills">Skills</Link>
                    </div>

                </div>
            </div>

            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        </nav>
    )
}

export default Nav
