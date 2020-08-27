import React, { useState, useRef, useContext } from 'react';
import './Form.scss';
import axios from 'axios';
import { AlertContext } from '../../AlertContext';


export default function Form(){
    
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [slogan, setSlogan] = useState('')
  const [displayError, setDisplayError] = useState(false)
  const [emailArr, setEmailArr] = useState([])
  const [firstNameA]
    const inputRef = useRef();
   

    let { setAlert } = useContext(AlertContext)
  
  const getEmailError = (arr) => {
    let emailArr = arr.filter(item => item.includes('Email'))
    setEmailArr(emailArr)





  }

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        
    }

    const handleSlogan = (e) => {
        setSlogan(e.target.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()

        // http://localhost:3001/api/v1/phrases
        axios
          .post("http://localhost:3001/api/v1/phrases", {
            first_name,
            last_name,
            email,
            slogan,
          })
          .then(
            (response) => {
              console.log(response);
              setAlert("success");
              setDisplayError(false);

              setTimeout(() => {
                setAlert("nil");
              }, 3000);

              setFirstName("");
              setLastName("");
              setSlogan("");
              setEmail("");
            },
            (error) => {
              setAlert("error");
              setDisplayError(true)
              setTimeout(() => {
                setAlert("nil");
              }, 3000);
              getEmailError(error.response.data);
              // console.log(error.response.data);
            }
          );
   
    }



    return (
      <form class="wrapper" onSubmit={handleSubmit}>
        <div class="title">
          <h1>Submit your Slogans</h1>
        </div>
        <div class="contact-form">
          <div class="input-fields helper-container">
            <small
              style={{ display: displayError ? `block` : `none` }}
              className="text-danger helper-text-one"
            >
              Error
            </small>
            <input
              ref={inputRef}
              name="firstname"
              type="text"
              class="input"
              placeholder="First Name"
              value={first_name}
              onChange={handleFirstName}
            />
            <small
              style={{ display: displayError ? `block` : `none` }}
              className="text-danger helper-text-two"
            >
              Error
            </small>

            <input
              name="lastname"
              type="text"
              class="input"
              placeholder="Last Name"
              value={last_name}
              onChange={handleLastName}
            />
            <small
              style={{ display: displayError ? `block` : `none` }}
              className="text-danger helper-text-three"
            >
              Error
            </small>

            <input
              name="email"
              type="email"
              class="input"
              placeholder="Email Address"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div class="msg helper-container-msg">
            <textarea
              name="slogan"
              placeholder="Your slogan"
              value={slogan}
              onChange={handleSlogan}
            />
            <small
              style={{ display: displayError ? `block` : `none` }}
              className="text-danger helper-text-four"
            >
              Error
            </small>

            <button
              onClick={() => inputRef.current.focus()}
              style={{ width: "100%" }}
              class=" example_d"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    );
}
