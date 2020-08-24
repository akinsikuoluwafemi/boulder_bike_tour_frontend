import React, { useState, useRef } from 'react';
import './Form.scss';
import axios from 'axios';

export default function Form(){
    
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState({})
    const inputRef = useRef();

    

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
        
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        
    }

    const handleContent = (e) => {
        setContent(e.target.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('')

       
        // fetch("http://localhost:3001/api/v1/slogans", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     first_name,
        //     last_name,
        //     email,
        //     content,
        //   }),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //       console.log(data);
        //   })
        //   .catch((err) => {
        //     setErrors(...err)
        //       console.log(err);
        //   });
    
        setFirstName('')
        setLastName('')
        setContent('')
        setEmail('')
    }



    return (

        
          
        
            <form class="wrapper" onSubmit={handleSubmit}>
                <div class="title">
                    <h1>Submit your Slogans</h1>
                </div>
                <div class="contact-form">
                    <div class="input-fields">
                        <input ref={inputRef} name="firstname" required type="text" class="input" placeholder="First Name"  value={first_name} onChange={handleFirstName} />
                    <input name="lastname" type="text" required class="input" placeholder="Last Name"  value={last_name} onChange={handleLastName}/>
                    <input name="email" type="email" required class="input" placeholder="Email Address"  value={email} onChange={handleEmail} />
                    </div>
                    <div class="msg">
                    <textarea name="content" required placeholder="Your content" value={content} onChange={handleContent} />
                        <button onClick={() => inputRef.current.focus()} style={{ width: '100%' }} class=" example_d">Create</button>
                    </div>
                </div>
            </form>
            
        
    )
}
