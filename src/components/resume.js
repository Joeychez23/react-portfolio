import React from 'react';

let boxStyle = {
  width: '30%',
  border: '1px solid black',
  backgroundColor: 'white'
}


let listStyle = {
  listStyleType: 'none',
  margin: '0px',
  padding: '0px'
}
function Resume() {
  return (
    <div className="container">
      <h2 className="title">My Resume</h2>
      <ul style={listStyle}>
        <h4>Proficiencies:</h4>
        <li>Javascript</li>
        <li>AWS</li>
        <li>Databases</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <a className="hov-opc" href='images/_resume.pdf' target="_blank">Download</a>
    </div>
  );
}

export default Resume