import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'

function LoginForm(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(username === "admin" && password === "password"){
            navigate('/hero')
        } else{
            alert('invalid credentials')
        }
    }
    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} id="username" onChange={handleUsernameChange} />
                
                <label htmlFor="password">Password</label>
                <input type="password" value={password} id="password" onChange={handlePasswordChange} />

                <p>Forgot Password?</p>
                <h4>Continue with Google</h4>

                <button className="" type="submit">Login</button>
            <Link to={'/signup'}>
                <p className="sgn-link">Don't have an account?</p>
            </Link>
            </form>

        </div>
    )
}

export default LoginForm;