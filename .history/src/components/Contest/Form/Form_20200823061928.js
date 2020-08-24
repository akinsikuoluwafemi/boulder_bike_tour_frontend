import React, { useState, useRef } from 'react';
import './Form.scss';
import axios from 'axios';
import { AlertContext } from '../../AlertContext';


export default function Form(){
    
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState({})
    const inputRef = useRef();
    const [severity, setSeverity] = useState('');
    const [alertText, setAlertText] = useState('');

    const [alert, setAlert] = useState("");
    

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

        
        <AlertContext.Provider>

        </AlertContext.Provider>
         
            
        
    )
}
