import React, { useState } from 'react'
import './Login.css'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Login() {

  const history=useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function submit(e){
    e.preventDefault();

    const response= await fetch("http://localhost:3000/login",{
        method:'POST',
        body: JSON.stringify({email,password}),
        headers: {'Content-type':'application/json'}
      })
    if (response.status === 200){
      alert('registeration succesful')
      history("/user/home",{state:{id:password}})
    }else{
      alert('registration failed')
    }
  }

  //   try {
  //     await axios.post("http://localhost:3000/login", {
  //       email,password
  //     })
  //     .then(res=>{
  //       if(res.data=="exist"){
  //           history("/user/home",{state:{id:email}})
  //       }else if(res.data=="does not exist"){
  //         alert("User has not signed up")
  //       }
  //     })
  //     .catch(e=>{
  //       alert("Wrong details")
  //       console.log(e)
  //   })
  //   } catch (e) {
  //     console.log(e);
      
  //   }
  // }

  return (
    <div>
      <Navbar />
        <div className="login-overlay" id="login-in">
            <form action="POST" className="form-container" onSubmit={submit}>
                {/* <button className="close_button" onclick="close_signin()"><span className="material-symbols-outlined">
                    close
                </span> </button>  */}
              <h1>Login</h1>
          
              <label for="email"><b>Email</b></label>
              <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" name="email" required />
          
              <label for="psw"><b>Password</b></label>
              <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" name="psw" required />
          
              <button type="submit" className="btn">Login</button>
              <h5>Don't have an account yet? <Link to='/signup' className="sign-up-link" >Sign up</Link></h5>
            </form> 
        </div>
    </div>
  )
}

export default Login
