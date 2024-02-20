import { useState } from 'react'
import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'


export default  function TodoApp() {
    return(
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                <Route path='' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome' element={<WelcomeComponent/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent() {

    const[username, setUsername] = useState("user")

    const[password, setPassword] = useState("password")

    const[showSuccessMessage, setShowSuccessMessage] = useState("false")

    const[showErrorMessage, setShowErrorMessage] = useState("false")

    const navigate = useNavigate()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(username==='user' && password==='password') {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate('/welcome')
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    function SuccesMessageComponent() {
        if(showSuccessMessage) {
        return <div className="successMessage">Authenticated Successfully</div>
        }
        return null
    }

    function ErrorMessageComponent() {
        if(showErrorMessage) {
        return <div className="errorMessage">Authentication Failed. Please check your credentials.</div>
        }
        return null
    }


    return (
        <div className="Login">
            {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
            {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}


function WelcomeComponent() {
    return (
        <div className="Welcome">Welcome Component</div>
    )
}