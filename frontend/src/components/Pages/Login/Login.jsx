import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import Navbar from "../../Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [message, setmessage] = useState("")
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    islogin: true

  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
  e.preventDefault()

  
  if(form.email === ""){
    return setmessage("Email is required")
  }
  if(form.password === ""){
    return setmessage("Password is required")
  }
const strongPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/


        
        if(form.islogin === true){


        const request = await fetch(
            "http://localhost:4090/login",
            {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(form)
      }
    );

    const result = await request.json();
  if(request.status === 429){
setmessage(result.message)
return
  }
    if (request.ok) {
      localStorage.setItem(
        "accessToken",
        result.accessToken 
    );
    
    navigate("/dashboard");
} else {
    setmessage(result.message)
}
}
else{
 if(form.name === ""){
    return setmessage("Name is required")
  }

 if(!strongPassword.test(form.password)){
          return setmessage("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.")
        }


      const response = await fetch(
            "http://localhost:4090/signin",
            {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
           credentials: "include",
        body: JSON.stringify(form)
      }
    );

    const result = await response.json();

    if (response.ok) {
      localStorage.setItem(
        "accessToken",
        result.accessToken
    );
    
    navigate("/dashboard");
} else {
    setmessage(result.message)
}
}
  };


  return (

    <div>
      <Navbar/>
        {form.islogin === true ? (
<>
        
<div className="login-container">
        <div className="auth-box">
          <h2>Welcome Back</h2>

          <p>
            Login to continue your journey with Stay-Casa.
          </p>


          <p  onClick={()=>setForm({...form , islogin: false})}>dont have an account sign in.</p>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
<p
  className="forgot-password"
  onClick={() => navigate("/forgot-password")}
>
  Forgot Password?
</p>


            
            <button type="submit" className="login-btn">
              Login
            </button>
            <p>{message}</p>
          </form>
  </div>
      </div>
          </>
        ) : (
<>

<div className="login-container">
        <div className="auth-box">
          <h2>Sign in</h2>

          <p>
           Create ur account
          </p>


          <p onClick={()=>setForm({... form , islogin: true})}>already have an accoutn log in</p>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="name"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <p>{message}</p>
            </div>



            

            <button type="submit" className="login-btn">
              Signin
            </button>
          </form>
  </div>
      </div>

</>

        )}

    </div>
  );
};

export default Login;