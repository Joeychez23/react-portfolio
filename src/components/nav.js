import React from 'react';
import ParticlesBg from "particles-bg";
import { useState} from 'react';


import About from './about.js';
import Portfolio from './portfolio.js'
import Contact from './contact.js';
import Resume from './resume.js';
import Navbar from './naviagtion.js'
import Footer from './footer.js'

let boxStyle = {
    width: '60%',
    border: '1px solid #5E8C61',
    marginTop: '10px',
    backgroundColor: 'white'
}

function renderPage(req) {
    if (req === "about") {
        return <About />
    }

    if (req === "portfolio") {
        return <Portfolio />
    }

    if (req === "contact") {
        return <Contact />
    }

    if (req === "resume") {
        return <Resume />
    }
}

function Nav() {
    window.location.href = '/#about'
    const [currPage, setPage] = useState(`about`);
    return (
        <div style={boxStyle}>
            <Navbar currPage={currPage} setPage={setPage}/>
            <ParticlesBg color="#5E8C61" type="cobweb" bg={true}/>
            <div>
                <main>
                    <div>{renderPage(currPage)}</div>
                </main>
            </div>
            <Footer/>
        </div>
    );
}

export default Nav