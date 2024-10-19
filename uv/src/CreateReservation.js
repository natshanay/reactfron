import React, { useState } from 'react'
import './CreateModel.css'
function Createmodel() {
const[mode, SetModel]=useState({
    
    name: "",
    model: "",
    type: "",
    image: "",
}

)


    const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(mode);

    }

  return (
    <div>
        
     <h1>Create mode</h1>
  <form onSubmit={handleSubmit}>
  <label>mode Name</label>
     <input type="text" placeholder='name'
value={mode.name} onChange={(e) => SetModel({...mode, name:e.target.value})}

     />
     <label>mode Model</label>
     <input type="text" placeholder='mode'
value={mode.model} onChange={(e) => SetModel({...mode, model:e.target.value})}

     />
     <label>mode Type</label>
     <input type="text" placeholder='type'
value={mode.type} onChange={(e) => SetModel({...mode, type:e.target.value})}
    
     />
     <button type='submit'>Submit</button>
  </form>
      </div>
  )
}

export default Createmodel