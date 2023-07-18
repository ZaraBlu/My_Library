
import React, {useState} from "react";



export const Register = (props) => {
   const [email, setEmail] = useState('');
   const [pass, setPass] = useState('');
   const [name, setName] = useState('');

   const handleSubmit = (e) =>{
    e.preventDefault();
    
   }


  return (
   <div className="auth-form-container">
   <form className="register-form" onSubmit={handleSubmit}>
    <label className="form-label mt-1" htmlFor="name">name</label>
      <input className="form-input" name="name" id="name" type="text" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)}></input>
      <label className="form-label mt-1" htmlFor="email">email</label>
      <input className="form-input" type="email" name="email" id="email" placeholder="youremail@gmail.com" value={email} onChange={(e) => setEmail(e.target.validationMessage)}></input>
      <label className="form-label mt-1" htmlFor="password">password</label>
      <input className="form-input" name="password" id="password" placeholder="******" type="password" value={pass} onChange={(e) => setPass(e.target.value)}></input>
     
      <button className="mt-2" type="submit">Register</button>
   </form>
   <button className="link-btn mt-1" onClick={() => props.onFormSwitch('login')}>Already have an account? Login</button>
   </div>
  )
}