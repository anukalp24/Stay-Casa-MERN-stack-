import React, { useState } from 'react'
import "./ForgotPassword.css"

const ForgotPassword = () => {
    const [reset, setreset] = useState({
        email: ""
    })
    const [message, setmessage] = useState("")
const [empty, setempty] = useState("")
    const handlechange = (e) => {
        setreset({ ...reset, [e.target.name]: e.target.value })
    }

    const forgetPassword = async () => {


        if(reset.email === ""){
            setempty("Email is required")
            return
        }
        const request = await fetch(`http://localhost:4090/forget-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reset)
        })

        const result = await request.json()

        if (request.ok) {
            setmessage(result.message)
        } else {
            setmessage(result.message)
        }
    }

    return (
        <div className="fp-container">
            <div className="fp-box">
                <h2 className="fp-title">Forgot Password</h2>
                <p className="fp-subtitle">Enter your email and we'll send you a reset link</p>

                <div className="fp-input-group">
                    <input
                        className="fp-input"
                        value={reset.email}
                        name='email'
                        onChange={handlechange}
                        placeholder='Enter your email'
                        type="email"
                    />
                </div>

                <button className="fp-btn" onClick={forgetPassword}>
                    Send Reset Link
                </button>

                {message && <p className="fp-message">{message}</p>}
                <p>{empty}</p>
            </div>
        </div>
    )
}

export default ForgotPassword