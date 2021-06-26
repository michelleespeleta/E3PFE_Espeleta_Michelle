import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import logo from './logo.gif';

function App() {
  // this is where the fixed email and password is set, there's no database
  const adminUser = {
    email:"michelle@espeleta.com",
    password: "password"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState(""); // catch if details are correct or not

  // this is going to be called if attempting to login
  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged In");
      setUser({
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({email: ""});
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
          <img src={logo} className="logo" alt="Logo" />;
          <h2>Name: <span>Michelle T. Espeleta</span> Course & Section: 
          <span> BSIT-32E2</span> Hobbies: 
          <span> drawing 🎨</span>,
          <span> reading 📖</span>, 
          <span> sleeping 💤</span>, and
          <span> playing games 🎮</span></h2>
          <button onClick={Logout}>LOGOUT</button>
          </div>
      ) : (
        <LoginForm Login={Login} error={error}/> // needs to pass through the login and error
      )}
    </div>
  );
}

export default App;
