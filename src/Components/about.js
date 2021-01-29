import React, { useState } from 'react';


const About = () => {
    const [dark, setDark] = useState(false)
    const activeDarkMode = () => {
        setDark(!dark)
        console.log(dark)
    }

    return (
        <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover body ${dark ? `bg-dark` : `body`}`}>
            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
            </div>

        </body>
    )
}
export default About;