import React, {useState} from "react"

function IssueForm(props) {
    // const {addIssue, handleSubmit} = props
    // const {handleSubmit} = props
    const initInputs = {
        title: "",
        description: ""
      }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({
          ...prevInputs,
          [name]: value
        }))
    }
    function handleSubmit(e){
        e.preventDefault()
        props.addIssue(inputs)
        setInputs(initInputs)
    }


    const { title, description } = inputs
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={handleChange} 
            placeholder="Title"/>
            <input 
            type="text" 
            name="description" 
            value={description} 
            onChange={handleChange} 
            placeholder="Description"/>
            <button>Add Issue</button>
        </form>
    )
}

export default IssueForm