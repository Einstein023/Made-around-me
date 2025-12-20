import { useState } from "react";
// import { UserContext } from './components/features/auth/UserContext.js'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

let USER_DATA2

function SignupForm(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(username === "" || password === "" || email === ""){
            alert("Invaild Credentail")
        } else if(username !== "" && password !== "" && email !== ""){
             let USER_DATA = {
                username: username,
                password: password,
                email: email
            }
            USER_DATA2 = USER_DATA

            navigate('/dashboard', { state: USER_DATA })

        }
    }
    return(
         <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" value={username} id="username" onChange={handleUsernameChange} />

                <label htmlFor="email">Email</label>
                <input type="text" value={email} id="email" onChange={handleEmailChange} />
                
                <label htmlFor="password">Password</label>
                <input type="password" value={password} id="password" onChange={handlePasswordChange} />

                <button className="lgn-btn" type="submit">Sign up</button>

                <Link to={'/login'}>
                <p className="lgn-link">Already have an account?</p>
                </Link>
            </form>

        </div>
    )
}

export { USER_DATA2 as USER_DATA};

export default SignupForm;