import React, { useState } from 'react';
import Nav from './Nav'



const About = () => {
    const [dark, setDark] = useState(false)
    const activeDarkMode = () => {
        setDark(!dark)
        console.log(dark)
    }

    return (
        <div>
            <Nav />

            <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover `}>

                <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                    <div id="profile" className={`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl  opacity-75 mx-6 lg:mx-0 ${dark ? `bg-color-dark` : `bg-white`}`}>

                        <div className="p-4 md:p-4 text-center lg:text-left">
                            <h3 className="text-3xl font-semibold py-4 lg:pt-0 ">about me</h3>
                            <hr />
                            {/* <h3 className="text-2xl font-medium pt-4 lg:pt-0">Minhaj Ahmad khan</h3> */}
                            <p className="pt-4 text-base font-medium flex items-center justify-center lg:justify-start">I am UI Designer and Front-End Developer from Lucknow, India</p>
                            <p className="pt-4  mb-5 text-base  flex items-center justify-center lg:justify-start font-normal font-sans ">
                                I have learned how to break bigger problems into smaller junk
                                In a startup, we often get into situations where the problem may look big and intimidating

                                I would try to break it down and come up with strategies to tackle it.<br />

                                I would like suggestions, ideas that align with the mission and I would like someone to hear me out even though I don't have a lot of experience.<br />

                                I'm a self-learner, I didn't learn any of the stuff I'm doing in college. As far as I know, startups are about adaptability and I think I qualify.
                            </p>

                            <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " href="https://docs.google.com/uc?export=download&id=1dmOSsKPWuDGqTJBcBEafheukjbkK4Q1h"> Download Resume </a>
                            <img className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " src="" />



                        </div>

                    </div>
                    <div className="w-full lg:w-2/5 shadow-xl">
                        <img src="https://instagram.fdel12-1.fna.fbcdn.net/v/t51.2885-15/e35/123027415_3129106867216476_1104686939210989386_n.jpg?_nc_ht=instagram.fdel12-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=1i8mMBJQeBIAX8Sm_-G&tp=1&oh=75aa9fc18714bb49e3196fe578f45455&oe=603D34FB"></img>
                    </div>

                </div>


            </body>


        </div>
    )
}
export default About;