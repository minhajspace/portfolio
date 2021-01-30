import React from 'react'
import rest from '../pics/REST_API.png'
import Nav from './Nav'

const Blogs = () => {
    return (
        <div>
            <Nav />

            <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex justify-center `}>


                <div id="profile" className={` flex  w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none opacity-75 mx-6 lg:mx-0  justify-center`}>

                    <div className="md:p-4  text-center lg:text-left text-3xl ">
                        Blogs
                    <hr className="mx-auto lg:mx-0 w-4/5 pt-3  " />
                    </div>


                </div>

            </body>
            <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex justify-center `}>


                <div id="profile" className={` flex  w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl  opacity-75 mx-6 lg:mx-0 border-2 p-2 justify-center`}>

                    <div className="p-4 md:p-4 text-center lg:text-left border-2 p-2 w-96">



                        <figure>
                            <a href="https://minhaj.hashnode.dev/creating-rest-api-using-nodejs-expressjs-mongodb-and-mongoose" target="_blank">
                                <img class=""
                                    src={rest}
                                    alt="Rest Api" /> </a>
                        </figure>

                        <div className="">
                            <p>Creating REST API Using NodeJS, ExpressJs, MongoDB, And Mongoose</p>
                        </div>


                    </div>



                </div>

            </body>



        </div>

    )
}

export default Blogs
