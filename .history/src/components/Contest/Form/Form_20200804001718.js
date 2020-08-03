import React, {useState} from 'react'
import './Form.scss'
// import axios from 'axios'


export default function Form(){
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [slogan, setSlogan] = useState('')
    const [alertText, setAlertText] = useState('');


    

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

        
        const entry = {
            firstName,
            lastName,
            email,
            slogan
        }
      

        // axios.post('http://localhost:3001/api/v1/slogans', entry)
        // .then(response => console.log(response))
        // .catch(error => console.log(error))
        fetch('http://localhost:3001/api/v1/slogans', {
            method: 'POST',
            headers: {
                
            }
        })
    }



    return (
        <form class="wrapper" onSubmit={handleSubmit}>
            <div class="title">
                <h1>Submit your Slogans</h1>
            </div>
            <div class="contact-form">
                <div class="input-fields">
                    <input name="firstname" type="text" class="input" placeholder="First Name" required value={firstName} onChange={handleFirstName} />
                    <input name="lastname" type="text" class="input" placeholder="Last Name" required value={lastName} onChange={handleLastName}/>
                    <input name="email" type="email" class="input" placeholder="Email Address" required value={email} onChange={handleEmail} />
                </div>
                <div class="msg">
                    <textarea name="slogan" placeholder="Your Slogan" required value={slogan} onChange={handleSlogan} />
                    <button style={{width: '100%'}} class="btn">send</button>
                </div>
            </div>
        </form>
    )
}
