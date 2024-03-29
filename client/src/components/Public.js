import React, {useState, useEffect} from "react"
import User from "./User.js"
const axios = require("axios")

function Public() {
    const userAxios = axios.create()

    userAxios.interceptors.request.use(config => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        return config
    })

    const [users, setUsers] = useState([])


    
    useEffect(()=>{userAxios.get("/api/users")
        .then(res => setUsers(res.data))
        .catch(err => console.log(err.response.data.errMsg))
        },
        []
    )

    console.log(users)

    
    return (
        <div className="publicIssuesHolder">
            {users.map(user => <User {...user}/>)}
        </div>
    )

}

export default Public