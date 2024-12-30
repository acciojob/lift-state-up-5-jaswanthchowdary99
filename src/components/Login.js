 
import React from "react";

function Login({isLoggedIn, onLogin}){

function handleSubmit(e){
    e.preventDefault();
    onLogin();
}

if(isLoggedIn){
    return <p>You are logged in!</p>;
}

    return(
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input type="text" required id="name"></input>
        <br/>
        <br/>
        <label htmlFor="password">Password</label>
        <input type="password" required id="password"></input>
        <br/>
        <br/>
        <button type="submit">Login</button>
        </form>
        </>
    );
}
export default Login;