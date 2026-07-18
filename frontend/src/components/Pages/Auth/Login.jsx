import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import mountainHouse from "../../../../dist/assets2/images/mountain.png";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Navbar from "../../Navbar/Navbar";
const Login = () => {
  const navigate = useNavigate();

  const [message, setmessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    islogin: true,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (form.email === "") {
      return setmessage("Email is required");
    }
    if (form.password === "") {
      return setmessage("Password is required");
    }
    const strongPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (form.islogin === true) {
      const request = await fetch("http://localhost:4090/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const result = await request.json();

      if (request.status === 429) {
        setmessage(result.message);
        return;
      }
      if (request.ok) {
        localStorage.setItem("accessToken", result.accessToken);

        navigate("/dashboard");
      } else {
        setmessage(result.message);
      }
    } else {
      if (form.name === "") {
        return setmessage("Name is required");
      }

      if (!strongPassword.test(form.password)) {
        return setmessage(
          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.",
        );
      }


      const response = await fetch("http://localhost:4090/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (response.ok) {
        navigate("/email-verification");

        localStorage.setItem("email", form.email);
      } else {
        setmessage(result.message);
      }
    }
  };
  return (
    <div>
      <div>
      

        <div className="login-container">
          <img src={mountainHouse} alt="" />
          <div className="login-left">
        

            <h1>
              Stay Somewhere <br />
              You'll Never Forget.
            </h1>

            <p>
              Discover luxury villas, premium apartments and unique stays across
              the world with UrbanStay.
            </p>
          </div>

          <div className="login-right">
            <div className="auth-box">
              {form.islogin ? (
                <>
                       <HiOutlineArrowLeft onClick={()=>navigate("/")} className="back-btn"/>
                  <h2>Welcome Back</h2>

                  <p className="auth-subtitle">
                    Login to continue your journey with UrbanStay.
                  </p>

                  <form onSubmit={handleLogin}>
                    <div className="input-group">
                      <label>Email Address</label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="input-group">
                      <label>Password</label>

                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
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

                    <p className="error-message">{message}</p>
                  </form>

                  <div className="switch-auth">
                    <span>Don't have an account?</span>

                    <button
                      type="button"
                      onClick={() =>
                      {
                        setForm({
                          ...form,
                          islogin: false,
                        })
; setmessage("")
                      }
                      }
                    >
                      Sign Up
                    </button>
                  </div>
                </>
              ) : (
                <>
                <HiOutlineArrowLeft onClick={()=>navigate("/")} className="back-btn"/>


                  <h2>Stay Casa</h2>

                  <p className="auth-subtitle">Create Your Account.</p>

                  <form onSubmit={handleLogin}>
                    <div className="input-group">
                      <label>Full Name</label>

                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="input-group">
                      <label>Email Address</label>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="input-group">
                      <label>Password</label>

                      <input
                        type="password"
                        name="password"
                        placeholder="Create a password"
                        value={form.password}
                        onChange={handleChange}
                      />
                    </div>

                    <p className="error-message">{message}</p>

                    <button type="submit" className="login-btn">
                      Create Account
                    </button>
                  </form>

                  <div className="switch-auth">
                    <span>Already have an account?</span>

                    <button
                      type="button"
                      onClick={() =>
                        setForm({
                          ...form,
                          islogin: true,
                        })
                      }
                    >
                      Login
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
