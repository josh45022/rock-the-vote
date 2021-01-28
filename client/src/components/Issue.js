import React, {useState, useContext} from "react"
import {UserContext} from "../context/UserContext.js"
import IssueEditForm from "./IssueEditForm.js"
import axios from "axios"

function Issue(props) {


    const [canEdit, toggleCanEdit] = useState(false)
   
    const {addIssue, deleteIssue, editIssues} = useContext(UserContext)
    const { title, description, _id } = props


    return (
    <div className="issue">
      {
        !canEdit?
      <>
      <h1>{ title }</h1>
      <h3>{ description }</h3>
      <button onClick={()=>deleteIssue(_id)}>Delete Issue</button>
      <button onClick={()=>toggleCanEdit(prevState => !prevState)}>Edit Issue</button>
      </>
      :
      <>
        <IssueEditForm {...props} addIssue={addIssue} toggleCanEdit={toggleCanEdit}/>
        <button onClick={()=>deleteIssue(_id)}>Delete Issue</button>
        {/* <button onClick={()=>editIssues(_id)}>Submit Changes</button> */}
        <button onClick={()=>toggleCanEdit(prevState => !prevState)}>Cancel</button>
      </>
      }
    </div>
    )
}

export default Issue