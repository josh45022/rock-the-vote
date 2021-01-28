import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm.js"
import {UserContext} from "../context/UserContext.js"

function Auth() {
    const initInputs = { username: "", password: "" }


    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login, errMsg} = useContext(UserContext)


    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        })
        )
    }

    function handleSignup(e) {
        e.preventDefault()
        signup(inputs)
        console.log(inputs)
    }

    function handleLogin(e) {
        e.preventDefault()
        login(inputs)
    }

    return (
        <>
            <h1>Welcome to Rock the Vote</h1>

            {!toggle?
            <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit = {handleSignup}
                    inputs={inputs}
                    btnText="Sign up"
                />
                <p onClick={()=>setToggle(prev => !prev)}>Already a member?</p>
            </>
            :
            <>
                <AuthForm 
                    handleChange={handleChange}
                    handleSubmit = {handleLogin}
                    inputs={inputs}
                    btnText="Login"
                />
                <p style={{color: "red"}}>{errMsg}</p>
                <p onClick={()=>setToggle(prev => !prev)}>Not a member?</p>
            </>
            }
        </>
    )
}

export default Auth