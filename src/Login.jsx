import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
1  }

  return (
    <div className="auth-form-container">
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="form-label mt-1" htmlFor="email">email</label>
      <input className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
      <label className="form-label mt-1" htmlFor="password">password</label>
      <input className="form-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" name="password" id="password" />
      <button className="mt-2" type="submit">Log In</button>
    </form>
    <button className="link-btn mt-1" onClick={() => props.onFormSwitch('register')}> Don't have an account? Register</button>
    </div>
  )
}