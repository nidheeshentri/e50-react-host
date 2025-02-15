import React, { useState } from 'react'
import axios from 'axios'

function Login() {

    const [data, setData] = useState({
        "email": "",
        "password": ""
    })

    const submitHandler = (event) => {
        event.preventDefault()

        axios.post("https://e50-express-hosting.onrender.com/account/login", data)
        .then(res => {
            localStorage.setItem("token",res.data)
        })
        .catch(err => {
            console.timeLog(err)
        })
    }

    const changeHandler = (event) => {
        let tempData = {...data}
        tempData[event.target.name]= event.target.value
        setData(tempData)
    }

  return (
    <div>
        <form onSubmit = {submitHandler}>
            <input type="email" name="email" id="" value = {data.email} onChange = {changeHandler}/><br />
            <input type="password" name="password" value = {data.password} id="" onChange = {changeHandler}/><br />
            <input type="submit" value = "Login" />
        </form>
    </div>
  )
}

export default Login