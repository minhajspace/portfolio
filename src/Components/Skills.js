import React from 'react'
import Nav from './Nav'

const Skills = () => {
    return (
        <div>
            <Nav />

            <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex justify-center `}>


                <div id="profile" className={` flex  w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none opacity-75 mx-6 lg:mx-0  justify-center`}>

                    <div className="md:p-4  text-center lg:text-left text-3xl ">
                        Skills
                    <hr className="mx-auto lg:mx-0 w-4/5 pt-3  " />
                    </div>


                </div>

            </body>



        </div>


    )
}

export default Skills
