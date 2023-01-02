import React from 'react';

const imageStyle = {
    height: '64px',
    width: '64px',
    margin: '10px'
}

function footer() {
    return (
        <div>
            <a className="hov-opc-img" href="https://github.com/Joeychez23" target="_blank">
                <img style={imageStyle} src="images/github.png"></img>
            </a>
            <a className="hov-opc-img" href="https://www.linkedin.com/in/joseph-sanchez-b93b2b237/" target="_blank">
                <img style={imageStyle} src="images/linkedin.png"></img>
            </a>
            <a className="hov-opc-img" href="https://www.instagram.com/_joeysanchez_/" target="_blank">
                <img style={imageStyle} src="images/instagram.png"></img>
            </a>
        </div>
    )
}

export default footer