import './Signin.css';
import GoogleLogin from './GoogleLogin';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Signin() {
    const [id,setID] =useState();
    const [pw,setPW] =useState();
  return (
    <>
    <div className="login_frame">
    <div className="LogIn">
        <br/>
        <p>Sign in</p>
        <form 
            className="TextField"
        >       
            <input
                required
                type="email"
                placeholder='이메일'
            />
            <br/>
            <br/>
            <input
                required
                type="password"
                placeholder='비밀번호'
                autocomplete="new-password"
            />
        </form>
        <br/>
        <br/>
        <ul className="btns">
            <li className="SignUp">
                <Link to="/Signup" className='look_link'>
                    <a className='look_link'> 회원가입 </a>
                </Link>
            </li>
            <li className="SignUp">
                <a class="look_link"> 아이디 / 비밀번호 찾기 </a>
            </li>
        </ul>
        <div className="SignIn_btn">
            <button className="btn">로그인</button>
        </div>
        
        <div className="social_login">
            <GoogleLogin className="GoogleButton"/>
        </div>
        
    </div>
    </div>
    </>
  );
}

export default Signin;
