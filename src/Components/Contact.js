import React from 'react'
import Nav from './Nav'

const Contact = () => {
    return (

        <div>
            <Nav />

            <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex justify-center `}>


                <div id="profile" className={` flex  w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl  opacity-75 mx-6 lg:mx-0  p-2 justify-center`}>

                    <div className="p-4 md:p-4 text-center lg:text-left   w-auto">



                        <div className="flex justify-center">
                            <div class="xl:w-3/4 mb-4 ">

                                <p class="text-xl mb-2">Please submit your information and I will get back to you.</p>
                                <p>Call me at <a href="tel:+12314561231" class="text-indigo-600 border-b border-transparent hover:border-indigo-600 transition-colors duration-300">+918423544136</a></p>
                            </div>
                        </div>

                        <div className=" flex justify-center">
                            <div class="xl:w-3/4 mb-4 ">
                                <form>
                                    <div class="sm:flex sm:flex-wrap -mx-3">
                                        <div class="sm:w-1/2 px-3 mb-6">
                                            <input type="text" placeholder="Full Name" class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input" />
                                        </div>
                                        <div class="sm:w-1/2 px-3 mb-6">
                                            <input type="text" placeholder="Company Name" class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input" />
                                        </div>
                                        <div class="sm:w-1/2 px-3 mb-6">
                                            <input type="text" placeholder="E-mail address" class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input" />
                                        </div>
                                        <div class="sm:w-1/2 px-3 mb-6">
                                            <input type="text" placeholder="Phone Number" class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input" />
                                        </div>
                                        <div class="sm:w-full px-3">
                                            <textarea name="message" id="message" cols="30" rows="4" placeholder="Your message here" class="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"></textarea>
                                        </div>

                                    </div>
                                    <div class="text-right mt-4 md:mt-12">
                                        <button class="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                                            Send a Message
                                    <i class="fas fa-chevron-right ml-2 text-sm"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>


                        </div>


                    </div>



                </div>

            </body>




        </div>


    )
}

export default Contact
