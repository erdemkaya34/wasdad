import React from 'react'
import "./login.css"
import hamburger from "./image-from-rawpixel-id-6121211-png.png"
// import figure from "./thailand-logo-computer-icons-clip-art-circle-abstract-fc37282acf15fd5d0c80b90da1d588a7.png"

function Logın() {
  return (
    <div className='container'>
    <div className='left-side'>
        <h1>LOGIN</h1>
        <input type="text" placeholder='Username' /> <br/>
        <input type="password" placeholder='Password' /> <br/>
        <button>LOGIN</button><br/>
        <a href="/">Forgot password</a>
        <a href="/">Register</a>
          
    </div>
    <div className='right-side'>
        <img src={hamburger} alt="sada" /> 
        {/* <img src={figure} alt="asdasd" className='figur' />    */}
    </div>
    </div>
  )
}

export default Logın