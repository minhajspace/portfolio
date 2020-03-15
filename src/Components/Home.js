import React from 'react'
import './Home.css'
import profile from './image/profile.jpeg'
import Education from './Education'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import facebook from './image/facebook.png'
import instgram from './image/instagram.png'
import codesandbox from './image/codesandbox.png'
import twitter from './image/twitter.png'
import linkedin from './image/linkedin.png'


class Home extends React.Component {
    render() {
        return <>
            <div className="flex-container">
                <div className="aside">
                    {/* <img className="profile-picture" alt="profile pic" src={profile} >
                    </img> */}
                    <h2 className="profile-name">
                        Minhaj Ahmad khan
                      </h2>

                    <p className="profile-picture-h1">  Front-end Developer in India
                    </p>

                    <ul>
                        <Router>



                            <li className="home-background " > <a href="https://github.com/minhajspace">Home</a></li>

                            <li className="services-hover"> <a href="#">skills</a></li>

                            <li className="education-hover"><Link className="link" to="https://github.com/minhajspace">Education</Link> </li>

                            <li className="blog-hover"> <a href="#">blog</a></li>
                            <li className="contact-hover"> <a href="#">Contact Me</a></li>
                        </Router>

                    </ul>
                    <div className="social-link-div">


                        <ul className="social-media-ul">


                            <li > <a href="https://twitter.com/MinhajAhmadKha7" target="blank"><img className=" social-media-connection-picture" alt="twitter logo" src={twitter}></img></a></li>
                            <li ><a href="https://www.linkedin.com/in/minhajahmadkhan/" target="blank"><img className=" social-media-connection-picture " alt="linkedin logo" src={linkedin}></img></a></li>
                            <li ><a href="https://www.facebook.com/minhaj.a.khan.14" target="blank"><img className=" social-media-connection-picture" alt="instram logo" src={facebook}></img></a></li>
                            {/* <li ><a href="https://www.instagram.com/minhaj.mak/" target="blank"><img className=" social-media-connection-picture" alt="instram logo" src={instgram}></img></a></li> */}

                        </ul>
                    </div>



                </div>


                <div className="main">
                    <div>
                        <h1 className="main-h1">I am</h1><br>
                        </br><h1 className="main-h1-front"> a Front-end Developer</h1>
                        <p className="long-paragraph">
                            When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.<br>
                            </br>
                            <em><b> — Freeman Dyson</b> </em>
                        </p>

                    </div>

                </div>


            </div>



        </>
    }
}
export default Home;