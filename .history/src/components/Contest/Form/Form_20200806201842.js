import React, {useState, useRef} from 'react'
import './Form.scss'
// import axios from 'axios'


export default function Form(){
    
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [alertText, setAlertText] = useState('');
    const in

    

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

        
        const entry = {
            first_name,
            last_name,
            email,
            content
        }
      
        // const handleChange = (e) => {
            
        //     [e.target.name]: e.target.value

        // }
       
        fetch('http://localhost:3001/api/v1/slogans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(entry)
        })
            .then(response => response.json())
            .then(data => console.log('Success', data))
    
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
                    <input name="firstname" type="text" class="input" placeholder="First Name" required value={first_name} onChange={handleFirstName} />
                    <input name="lastname" type="text" class="input" placeholder="Last Name" required value={last_name} onChange={handleLastName}/>
                    <input name="email" type="email" class="input" placeholder="Email Address" required value={email} onChange={handleEmail} />
                </div>
                <div class="msg">
                    <textarea name="content" placeholder="Your content" required value={content} onChange={handleContent} />
                    <button style={{width: '100%'}} class="btn">send</button>
                </div>
            </div>
        </form>
    )
}
