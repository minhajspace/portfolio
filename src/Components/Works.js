import React from 'react'
import Nav from './Nav'
import reactLogo from '../pics/React.png'
import firebase from '../pics/firebase.png'
import tailwind from '../pics/tailwind.png'


const Works = () => {
    return (
        <div>
            <Nav />
            <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex justify-center `}>


                <div id="profile" className={` flex  w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none opacity-75 mx-6 lg:mx-0  justify-center`}>

                    <div className="md:p-4 text-center lg:text-left text-3xl ">
                        Works
                    <hr className="mx-auto lg:mx-0 w-4/5 pt-3  " />
                    </div>



                </div>

            </body>
            <body className={`font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover flex justify-center `}>


                <div id="profile" className={` flex-col w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl  opacity-75 mx-6 lg:mx-0  p-2 justify-center`}>

                    <div className="p-4 md:p-4 text-center lg:text-left w-auto mb-2">
                        <div className="p-4 md:p-4 text-center lg:text-left pr-2 flex-wrap border-2 border-indigo-600 rounded mb-4">
                            <div className="">
                                <div className="flex">



                                    <h1 className="text-xl my-2 font-semibold flex-1">Image Search Bar</h1>

                                    <span className="text-xl my-2 font-semibold w-10"> <img alt="react-logo" src={reactLogo} /></span>

                                    <hr />
                                </div>
                                <div className="mt-2 ">
                                    <p className="text-left py-3 font-light">It's like google Search image where user can search images and also user can download images.</p>
                                </div>
                                <div className="my-2">
                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://codesandbox.io/u/minhajspace">  VIEW DEMO</a>

                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://github.com/minhajspace/UnsplaceGallery"> SOURCE CODE </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:p-4 text-center lg:text-left pr-2 flex-wrap border-2 border-indigo-600 rounded mb-4 ">
                            <div className="">
                                <div className="flex">
                                    <h1 className="text-xl my-2 font-semibold flex-1">To-Do List</h1>
                                    <span className="text-xl my-2 font-semibold w-10"> <img alt="react-logo" src={reactLogo} /></span>
                                    <hr />
                                </div>
                                <div className="my-2">
                                    <p className="text-left py-3 font-light">To-Do List where user can Add, Edit, and Delete task as well as user can mark complete task </p>
                                </div>
                                <div className="my-2">
                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://codesandbox.io/s/serverless-fast-sco5q?file=/src/InputTodo.js">  VIEW DEMO</a>

                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://github.com/minhajspace/ToDo-list"> SOURCE CODE </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:p-4 text-center lg:text-left pr-2 flex-wrap border-2 border-indigo-600 rounded mb-4">
                            <div className="">
                                <div className="flex">
                                    <h1 className="text-xl my-2 font-semibold flex-1">Employee Management</h1>
                                    <span className="text-xl my-2 font-semibold w-10"> <img alt="react-logo" src={reactLogo} /></span>
                                    <hr />
                                </div>
                                <div className="my-2">
                                    <p className="text-left py-3 font-light">Employee Management App where I had to fetch data from a REST API, parse the JSON response and show the employee name. Employee details will appear upon clicking employee names. </p>
                                </div>
                                <div className="my-2">
                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://codesandbox.io/s/1r0jj?file=/src/App.js">  VIEW DEMO</a>

                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://github.com/minhajspace/EmployeeManagement"> SOURCE CODE </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:p-4 text-center lg:text-left pr-2 flex-wrap border-2 border-indigo-600 rounded mb-4 ">
                            <div className="">
                                <div className="flex">
                                    <h1 className="text-xl my-2 font-semibold flex-1">Infinity-Scrooling</h1>
                                    <span className="text-xl my-2 font-semibold w-10"> <img alt="react-logo" src={reactLogo} /></span>
                                    <hr />
                                </div>
                                <div className="my-2">
                                    <p className="text-left py-3 font-light">the infinite scroll method is pretty handy compared to pagination, where a user must click on the page number every time they want to load the next page’s data.</p>
                                </div>
                                <div className="my-2">
                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://codesandbox.io/s/intelligent-beaver-xnbjb">  VIEW DEMO</a>

                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://github.com/minhajspace/infinity-scrolling"> SOURCE CODE </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:p-4 text-center lg:text-left pr-2 flex-wrap border-2 border-indigo-600 rounded mb-4 ">
                            <div className="">
                                <div className="flex">
                                    <h1 className="text-xl my-2 font-semibold flex-1">React-firebase-authentication</h1>
                                    <span className="text-xl my-2 font-semibold w-10"><img alt="react-logo" src={reactLogo} /></span>
                                    <span className="text-xl my-2 font-semibold w-7"><img alt="firebase-logo" src={firebase} /></span>
                                    <span className="text-xl my-2 font-semibold w-10"><img alt="tailwind-logo" src={tailwind} /></span>
                                    <hr />
                                </div>
                                <div className="my-2">
                                    <p className="text-left py-3 font-light">Handling user authentication with Firebase in your React apps. We will be using two Firebase services for this project: the Authentication service and Cloud Firestore service. </p>
                                </div>
                                <div className="my-2">
                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://codesandbox.io/s/react-firebase-auth-slbm2">  VIEW DEMO</a>

                                    <a className="link border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mr-1 " target="_blank" href="https://github.com/minhajspace/firebase-login-auth"> SOURCE CODE </a>
                                </div>
                            </div>
                        </div>
                    </div>






                </div>

            </body>

        </div>
    )
}

export default Works
