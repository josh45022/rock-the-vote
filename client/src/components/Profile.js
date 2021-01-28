import React, {useContext, useEffect} from "react"
import {Link} from "react-router-dom"
import { UserContext } from "../context/UserContext.js"
import IssueForm from "./IssueForm.js"
import IssueList from "./IssueList.js"
function Profile() {
    const {
        user: {
            username
        },
        getUserIssues,
        addIssue,
        issues,
        logout
    } = useContext(UserContext)



    useEffect(getUserIssues, [])
    return (
        <>
        <h1>Welcome {username}!</h1>
        <h2>Scroll all the way down to log out.</h2>
        <h3>Add an Issue</h3>
            <IssueForm addIssue={addIssue} />
        <h3>Your issues</h3>
            <IssueList issues={issues}/>
            <button onClick={logout}>
                <Link to="/">
                Log Out
                </Link>
            </button>
        </>
    )
}


export default Profile