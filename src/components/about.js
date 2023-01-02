import React from 'react';

const imageStyle = {
  height: '192px',
  width: '192px'
}

let boxStyle = {
  width: '75%',
  border: '1px solid #5E8C61'
}

function About() {
  return (
    <div className="container" style={boxStyle}>
      <h2 className="title">About Me</h2>
      <img style={imageStyle} src="images/ward.jpg" alt='ward'></img>
      <p>Maecenas porttitor, tellus quis sodales posuere, leo elit fringilla mi, vitae rutrum quam purus eget quam. Morbi consequat hendrerit mi non condimentum. Nam tristique ex non odio accumsan, eget maximus purus auctor. Pellentesque non molestie lorem, non pellentesque sapien. Morbi laoreet hendrerit laoreet. Morbi dictum ultricies nunc vel consectetur. Donec posuere convallis rhoncus. Aliquam sapien ante, ornare sit amet efficitur vitae, consequat sed libero.</p>
    </div>
  );
}

export default About