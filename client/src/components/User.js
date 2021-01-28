import React, {useState, useEffect} from "react"
import PublicIssue from "./PublicIssue.js"
import axios from "axios"

function User(props) {
    const {username, _id} = props
    const [issues, setIssues] = useState([])
    const userAxios = axios.create()

    userAxios.interceptors.request.use(config => {
        const token = localStorage.getItem("token")
        config.headers.Authorization = `Bearer ${token}`
        return config
    })
    useEffect(() => {
        userAxios.get(`/api/issue/user/${_id}`) //changedthis
        .then(res => setIssues(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    },
    []
    )
    return (
        <div className="userCard">
            <h1>{username}'s Issues</h1>
            {issues.map(issue => <PublicIssue {...issue}/>)}
        </div>
    )
}

export default React.memo(User)