import React from "react"

function Comment(props) {

    return (
        <>

        <h4>@{props.username} said "{props.comment}"</h4>
        <button onClick={()=> props.deleteComment(props._id)}>Delete Comment</button>
        </>
    )

}

export default Comment
