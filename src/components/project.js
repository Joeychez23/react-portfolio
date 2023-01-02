import React from 'react'

const imageStyle = {
    height: '256px',
    width: '256px'
}

let allBoxStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
}

let oneBoxStyle = {
    width: '400px',
    border: '1px solid #5E8C61',
    backgroundColor: 'white'
}
function projects(props) {
    return (
        <div className="container" style={allBoxStyle}>
            {props.projects.map((project, i) => (
                <div key={i} style={oneBoxStyle}>
                    <div>
                        <h3 className="title">{project.title}</h3>
                        <img style={imageStyle} src={project.image}></img>
                        <h4>Description:</h4>

                        <p>{project.description}</p>
                        <a className="hov-opc" target="_blank" href={project.github}>Github</a>
                        <br></br>
                        <a className="hov-opc" target="_blank" href={project.link}>Website</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default projects