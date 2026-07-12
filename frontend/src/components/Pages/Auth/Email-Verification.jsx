import React, { use } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Email-Verification.css";
import { info } from "../..";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const EmailVerification = () => {
const navigate = useNavigate()
const [otp, setotp] = useState({
    first: "",
second: "",
third: "",
fourth: "",
fifth: "",
sixth: ""
})

const handlechange = (e)=>{
    setotp({
        ...otp , [e.target.name] : e.target.value
    })
}

const handleadd =  async (e)=>{
 e.preventDefault();
    const otpCode  = otp.first + otp.second + otp.third + otp.fourth  + otp.fifth + otp.sixth
  const verify = await fetch("http://localhost:4090/email-verification", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        otpCode,
        email: localStorage.getItem("email")
    }),
  });

  const verifyReq = await verify.json();

  if (verify.ok) {
    localStorage.setItem("accessToken" ,  verifyReq.accessToken)
navigate("/")
  }
  
  else {
    // setmessage(verifyReq.message);
    return;
    }
}
  return (
    <div>
      <Navbar />
      <div className="otp-container">
        <div className="otp-card">
          <div className="otp-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
            </svg>
          </div>

          <h2>Verify Your Email</h2>
          <p className="otp-subtitle">
            We've sent a 6-digit code to
            <span className="otp-email">{localStorage.getItem("email")}</span>
          </p>

          <form>
            <div className="otp-input-group">
              <input    value={otp.first} name="first" onChange={handlechange} type="text" maxLength={1} className="otp-input" />
              <input   value={otp.second}  name="second"  onChange={handlechange} type="text" maxLength={1} className="otp-input" />
              <input   value={otp.third} name="third"  onChange={handlechange} type="text" maxLength={1} className="otp-input" />
              <input   value={otp.fourth} name="fourth"  onChange={handlechange} type="text" maxLength={1} className="otp-input" />
              <input   value={otp.fifth} name="fifth"  onChange={handlechange} type="text" maxLength={1} className="otp-input" />
              <input  value={otp.sixth}  name="sixth"  onChange={handlechange} type="text" maxLength={1} className="otp-input" />
            </div>

            <button onClick={handleadd} type="button" className="otp-verify-btn">
              Verify Email
            </button>
          </form>

          <div className="otp-resend">
            <p className="otp-resend-timer">Resend code in 30s</p>
          </div>

          <p className="otp-back">Back to Login</p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
