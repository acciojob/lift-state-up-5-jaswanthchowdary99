
import React, { useState } from "react";
import './../styles/App.css';
import Login from "./Login";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(){
    setIsLoggedIn(true);
  }

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>Parent Component</h1>
      <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  )
}

export default App;
