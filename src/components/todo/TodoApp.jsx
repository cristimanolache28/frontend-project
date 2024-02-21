import { useState } from 'react'
import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'


export default  function TodoApp() {
    return(
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                <Route path='' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent/>}></Route>
                    <Route path='/todos' element={<ListTodosComponent/>}></Route>

                    <Route path='*' element={<ErrorComponent/>}></Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
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
            navigate(`/welcome/${username}`)
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
            <h1>Time to Login!</h1>
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

    const {username}  = useParams()

    console.log(username)

    return (
        <div>
            <h1>Welcome {username}</h1>
            <div>
               Manage your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are woking very hard!</h1>
            <div>
                Apologies for the 404. reach out to out team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}

function ListTodosComponent() {
const today = new Date()
const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDay() + 19)


const todos = [
    {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    {id: 2, description: 'Learn Full Stack DEv', done: false, targetDate: targetDate},
    {id: 3, description: 'Learn Devops', done: false, targetDate: targetDate},

]

    return (
        <div className="ListTodosComponent">
            <h1>Things you want To Do!</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map (
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>            
                                )
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className="header">
            Header <hr/>
        </div>
    )
}

function FooterComponent() {
    return (
        <div className="footer">
            <hr/> Footer 
        </div>
    )
}