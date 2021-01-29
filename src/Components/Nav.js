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
            <div className="mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left border-2 ">
                        <Link to="/">Home </Link>
                    </div>

                </div>
            </div>
            <div className="mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/about">About</Link>
                    </div>

                </div>
            </div>
            <div className="mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/works">My Works </Link>
                    </div>

                </div>
            </div>
            <div className=" mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/blogs">Blogs</Link>
                    </div>

                </div>
            </div>
            <div className="border-2 mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/contact">Contact</Link>
                    </div>

                </div>
            </div>
            <div className="border-2 mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        <Link to="/skills">Skills</Link>
                    </div>

                </div>
            </div>


        </nav>
    )
}

export default Nav
