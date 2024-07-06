import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [user,setUser]=useState('')
  const [up,setUp]=useState(0)
  const [down,setDown]=useState(0)
  const [zero,setZero]=useState(0)



  const handleInput=(event)=>{
    setUser(event.target.value)
  }

  const above=()=>{
    setUp(up+1)
  }

  const below=()=>{
    setDown(down-1)
  }

  const flat=()=>{
    setZero(0)
  }


 

  return (
    <div>
    <h3> Simple Counter App</h3>
    <button onClick={above}>Click to go up</button>
    <button onClick={below}>Click to go down</button>
    <h4 className = 'h'>Current value is:{up}</h4>
    <h4 className = 'b'>Current value is:{down}</h4>
    

    </div>

  );
}

export default App;