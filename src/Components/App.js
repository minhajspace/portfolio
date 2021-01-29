import React from 'react'
import Landing from './Landing'
import About from './About'
import Contact from './Contact'
import Blogs from './Blogs'
import Works from './Works'
import Skills from './Skills'
import { Route, Switch } from "react-router-dom";


const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/blogs" exact component={Blogs} />
            <Route path="/works" exact component={Works} />
            <Route path="/skills" exact component={Skills} />
        </Switch>
    )
}

export default App
