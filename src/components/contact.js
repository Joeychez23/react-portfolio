import React from 'react';
import { useState } from 'react';
import ValidateEmail from '../utils/auth';


let formStyle = {
  marginTop: '10px',
}

let nameStyle = {
  marginTop: '5px',
  border: 'solid 2px red',
  width: '300px'
}

let emailStyle = {
  marginTop: '20px',
  border: 'solid 2px red',
  width: '300px'
}

let messageStyle = {
  marginTop: '20px',
  border: 'solid 2px red',
  heigth:'200px',
  width: '300px'
}

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e) => {
    e.preventDefault()
    if (e.target.name === 'Name') {
      setName(e.target.value)

      if(e.target.value) {
        nameStyle = {
          marginTop: '20px',
          border: 'solid 2px #5E8C61',
          width: '300px'
        }
      }

      if(!e.target.value) {
        nameStyle = {
          marginTop: '20px',
          border: 'solid 2px red',
          width: '300px'
        }
      }

    }
    if (e.target.name === 'Email') {
      setEmail(e.target.value)
      if(ValidateEmail(e.target.value) === true) {
        setErrorMessage('Valid Email')
        emailStyle = {
          marginTop: '20px',
          border: 'solid 2px #5E8C61',
          width: '300px'
        }
      }
      if(ValidateEmail(e.target.value) === false) {
        setErrorMessage('Invalid Email')
        emailStyle = {
          marginTop: '20px',
          border: 'solid 2px red',
          width: '300px'
        }
      }
    }
    if (e.target.name === 'Message') {
      setMessage(e.target.value)

      if(e.target.value) {
        messageStyle = {
          marginTop: '20px',
          border: 'solid 2px #5E8C61',
          heigth:'200px',
          width: '300px'
        }
      }

      if(!e.target.value) {
        messageStyle = {
          marginTop: '20px',
          border: 'solid 2px red',
          heigth:'200px',
          width: '300px'
        }
      }
    }

  }
  

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    console.log(e)
    if(name && message && ValidateEmail(email) === true) {
      alert("Sent")
      //window.open(`mailto:joeychez23@outlook.com?subject=&body=${message}`);
    }
    else {
      alert("Invalid Inputs")
    }
  };
  return (
    <div className="container">
      <div>
        <h2 className="title" >Contact</h2>
        <form className="form" style={formStyle}>
          <input
            defaultValue={name}
            style={nameStyle}
            name="Name"
            onBlur={handleInputChange}
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
          <br></br>
          <input
            defaultValue={email}
            style={emailStyle}
            name="Email"
            onBlur={handleInputChange}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <br></br>
          <textarea
            defaultValue={message}
            style={messageStyle}
            name="Message"
            onBlur={handleInputChange}
            onChange={handleInputChange}
            type="text"
            placeholder="Write message here..."
          />
          <p>{errorMessage}</p>
          <button className="hov-opc-btn" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact