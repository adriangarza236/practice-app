import React from "react";



function Form({ handleSubmit, calc, handleChange }) {
    return (
        <form onSubmit={handleSubmit} >
            <label name = "calculator">
                Calculator <input 
                type="text" 
                name="calculator" 
                value={calc} 
                onChange={handleChange} 
                />
                <button type="Submit" >Enter</button>
            </label>
            
        </form>
    )
}

export default Form;