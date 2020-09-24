import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

//Components
import Header from './components/layout/Header'

//Pages
import Index from './pages/index'
import Skills from './pages/skills'
import Projects from './pages/projects'
import Contact from './pages/contact'

import './styles/main.css'
import './styles/custom.css'

function App() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Router>
            <Header />
            <Route path="/" exact component={Index} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
        </Router>
    )
}

export default App
