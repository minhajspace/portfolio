import React, { useState } from 'react'

const Nav = () => {
    const [dark, setDark] = useState(false)

    const activeDarkMode = () => {
        setDark(!dark)
        console.log(dark)
    }
    return (
        <div className="border-2 flex-wrap justify-center flex">

            <div className="border-2 mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        Home
                    </div>

                </div>
            </div>
            <div className="border-2 mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        About
                    </div>

                </div>
            </div>
            <div className="border-2 mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        My Work
                    </div>

                </div>
            </div>
            <div className="border-2 mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        My Blogs
                    </div>

                </div>
            </div>
            <div className="border-2 mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        Contact
                    </div>

                </div>
            </div>
            <div className="border-2 mx-7 my-7 lg:my-0">
                <div id="profile" className="shadow-2xl opacity-75 mx-6 lg:mx-0 bg-white">
                    <div className="p-2 md:p-6 text-center lg:text-left">
                        Skills
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Nav
