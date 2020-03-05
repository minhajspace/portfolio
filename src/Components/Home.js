import React from 'react'
import './Home.css'
import picture from './picture.jpg'
import profile from './profile.jpg.jfif'


class Home extends React.Component {
    render() {
        return <>
            <div className="flex-container">
                <div className="aside">
                    <img className="profile-picture" src={profile} alt="profile picture">
                    </img>
                    <h2 className="profile-name">
                        Minhaj Ahmad khan
                      </h2>
                    <p className="aside-profile-content">
                        Front-end Developer in Gurgram

                    </p>

                </div>

                <div className="main">
                    <div>
                        <h1 className="main-h1">I am</h1><br>
                        </br><h1 className="main-h1-front"> a Front-end Developer</h1>
                        <p className="long-paragraph">
                            When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong.<br>
                            </br>
                            <em>  — Freeman Dyson</em>
                        </p>

                    </div>

                </div>

            </div>
        </>
    }
}
export default Home;