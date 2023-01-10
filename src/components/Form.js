import React from 'react';

function Form(props) {

    const handleChange = (event) => {
        const { name, value } = event.target
        props.change(name, value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.submit()
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">User Name: </label>
                <input type="text" name="name" value={props.values.name} placeholder="Enter Name" onChange={handleChange}/>

                <label htmlFor="email">Email: </label>
                <input type="text" name="email" value={props.values.email} placeholder="Enter Email" onChange={handleChange}/>

                <label htmlFor="role">User Role: </label>
                <select name="role" value={props.values.role} onChange={handleChange}>
                    <option value="">-- select role --</option>
                    <option value="instructor">Instructor</option>
                    <option value="student">Student</option>
                    <option value="tl">Team Leader</option>
                </select>

                <input type="submit" value="Build your team" />
            </form>
        </div>
    )
}
export default Form