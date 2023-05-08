import React from 'react'
import { useState } from 'react'

const AddPost = () => {
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')
    const [day, setDay] = useState('')
    return (
        <form className= 'add-form' onSubmit={onSubmit}>
        <div className= 'form-control'>
            <label>Post</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setTitle(e.target.value)}></input>
        </div> 
        
        <div className= 'form-control'>
            <label>Post</label>
            <input type='text' placeholder='Add Day and Time' value={post} onChange={(e) => setPost(e.target.value)}/>
        </div>

        <div className= 'form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='text' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        
        <input type='submit' value='Upload Post' className='btn btn-block'/>
        </form>
    )
}

export default AddPost
