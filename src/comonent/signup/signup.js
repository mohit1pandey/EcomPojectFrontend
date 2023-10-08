import React, { useState,useEffect } from 'react'
import './singnup.css'
// now we need if user signsup successfully he should directed to the root
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    //now if the user is signed up so redirect him to the / 
    useEffect(() => {
        const auth = localStorage.getItem('user');
      
        if (auth) {
            navigate('/');
        }
    },[])
    /* ************************************************************** */
    //we fetch the express server to send the front end data.
    // make a post api to expresss server

    const collect_data = async () => {

        let result = await fetch('http://127.0.0.1:5500/register', {
            method: 'post',
            body: JSON.stringify({ name, password, email }),
            //headers
            headers: {
                'Content-Type': 'application/json'
            },
        });
        // convert the result into json 
        //it reducers .then using 2 times
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))
        if (result) {
            navigate('/')
        }
    }
    /**********************************************************************/

    const handleSubmit = (e) => {
        collect_data();
        e.preventDefault()
    }

    return (
        <div className='App'>
            <h3 className='h3'>Signup</h3>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn'>Sign In</button>
            </form >


        </div>
    )
}

export default SignUp




/* older version

import React ,{useEffect, useState} from 'react'
import './singnup.css'
// now we need if user signsup successfully he should directed to the root
import{useNavigate} from 'react-router-dom'

function SignUp() {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const navigate= useNavigate();

//now if the user is signed up so redirect him to the / 
useEffect(()=>{
    const auth= localStorage.getItem('user');
    console.log('signup rerednered')
    if (auth){
        navigate('/');
    }
})
    


    //we fetch the express server to send the front end data.
    // make a post api to expresss server

    const collect_data= async()=>{
        console.warn(name,password,email)
        let result= await fetch('http://127.0.0.1:5500/register',{
            method:'post',
            body:JSON.stringify({name,password,email}),
            //headers
            headers:{
                'Content-Type':'application/json'
            },
        });
        // convert the result into json 
        //it reducers .then using 2 times
        result= await result.json();
        console.warn(result);
        localStorage.setItem("user",JSON.stringify(result))
        if(result){
            navigate('/')
        }
    }


    const handleSubmit=(e)=>{
        collect_data();
        e.preventDefault()
    }
    
    return (
        <div className='App'>
            <h3>signup</h3>
    
            <form onSubmit={handleSubmit }>
                <input type="text" placeholder='name'value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="email" placeholder='email'value={email}  onChange={(e)=>setEmail(e.target.value)} />
                <input type="password" placeholder='password'value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                <button className='btn'>Sign In</button>
            </form >
          
            
        </div>
    )
}

export default SignUp
*/