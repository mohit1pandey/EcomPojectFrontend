import React, { useEffect, useState } from 'react'
import '../signup/singnup.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //use effect so that one could not login after login

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
    }, [])

    // form submit
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    //click event
    const handleLogin = async () => {
        console.warn(email, password);
        let result = await fetch('http://127.0.0.1:5500/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.warn(result)
        //check the commeted code to find the difference
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user))
            localStorage.setItem('token', JSON.stringify(result.auth))

            //as login 
            navigate('/')
        } else {
            alert('enter valid details')
        }

    }

    return (
        <div className='App login'>
            <h3 className='h3'>Login</h3>
            <form onSubmit={handleSubmit} >
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin} className=' btn'>Login</button>
            </form>
        </div>
    )
}

export default Login;

/*
import React, { useEffect, useState } from 'react'
import '../signup/singnup.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //use effect so that one could not login after login
    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
    }, [])

    // form submit
    const handleSubmit = (e) => {
        e.preventDefault()

    }

    //click event
    const handleLogin = async () => {
        console.warn(email, password);
        let result = await fetch('http://127.0.0.1:5500/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.warn(result)
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result))
            //as login 
            navigate('/')
        } else {
            alert('enter valid details')
        }

    }

    return (
        <div className='App login'>
            <h3 className='h3'>Login</h3>
            <form onSubmit={handleSubmit} >
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin} className=' btn'>Login</button>
            </form>
        </div>
    )
}

export default Login;
 */