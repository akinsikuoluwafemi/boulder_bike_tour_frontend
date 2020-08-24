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


        axios.post('http://localhost:3001/api/v1/slogans', {
            first_name,
            last_name,
            email,
            content
            })
            .then((response) => {
                
                console.log(response);
                
            setFirstName('')
            setLastName('')
            setContent('')
            setEmail('')


            }, (error) => {
            
                console.log(error);
            });


       

       
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
        //       console.log(err);
        //   });
    
        
    }



    return (

        <div class="alert alert-success" role="alert">
            A simple success alert—check it out!
                    </div>

            <form class="wrapper" onSubmit={handleSubmit}>
                <div class="title">
                    <h1>Submit your Slogans</h1>
                </div>
                <div class="contact-form">
                    <div class="input-fields">
                        <input ref={inputRef} name="firstname"  type="text" class="input" placeholder="First Name"  value={first_name} onChange={handleFirstName} />
                    <input name="lastname" type="text"  class="input" placeholder="Last Name"  value={last_name} onChange={handleLastName}/>
                    <input name="email" type="email"  class="input" placeholder="Email Address"  value={email} onChange={handleEmail} />
                    </div>
                    <div class="msg">
                    <textarea name="content"  placeholder="Your content" value={content} onChange={handleContent} />
                        <button onClick={() => inputRef.current.focus()} style={{ width: '100%' }} class=" example_d">Create</button>
                    </div>
                </div>
            </form>
            
        
    )
}
