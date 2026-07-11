import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import "./ResetPassword.css"
const ResetPassword = () => {
    const { token } = useParams()    
    const navigate = useNavigate()
    const [form, setform] = useState({
        password: ""
    })

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const [message, setmessage] = useState()
    const resetPassword = async () => {

        const strongPassword =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/
  if(!strongPassword.test(form.password)){
              return setmessage("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.")
  }

        const request = await fetch(`http://localhost:4090/reset-password/${token}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        })

        const result = await request.json()

        if (request.ok) {
            setmessage(result.message)
            navigate("/auth")
        } else {
            setmessage(result.message)
        }
    }

    return (
        <div className="reset-container">
  <div className="reset-card">
    <h2>Reset Password</h2>

    <input
      id="reset-input"
      value={form.password}
      name="password"
      onChange={handlechange}
      placeholder="Enter new password"
      type="password"
    />

    <button id="reset-btn" onClick={resetPassword}>
      Reset Password
    </button>

    {message && <p>{message}</p>}
  </div>
</div>
    )
}

export default ResetPassword