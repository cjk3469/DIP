import './Login.css';
import GoogleLogin from './GoogleLogin';
import { Link } from 'react-router-dom';
const LogIn = () => {
  return (
    <div className="login_frame">
    <div className="LogIn">
        <br/>
        <p>Do it Proejct</p>
        <form className="signin_form">
                <input
                    required
                    label="email"
                    type="text"
                    placeholder = "이메일"
                    autocomplete="off"
                />
                <input
                    required
                    label="password"
                    type="password"
                    placeholder = "비밀번호"
                    autocomplete="off"
                />
                <button className="btn">로그인</button>
        </form>
        
        <ul className="btns">
            <li className="SignUp">
                <Link to="/signup" style={{ textDecoration: "none" }}>
                    <a href="/Signup/Signup" class="look_link"> 회원가입 </a>
                </Link>
            </li>
            <li className="SignUp">
                <a href="/signup" class="look_link"> 아이디 / 비밀번호 찾기 </a>
            </li>
        </ul>
        <div className="social_login">
            <GoogleLogin className="GoogleButton"/>
        </div>
        
    </div>
    </div>
  );
}

export default LogIn;
