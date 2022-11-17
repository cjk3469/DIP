import './Login.css';
import GoogleLogin from './GoogleLogin';
function LogIn() {
  return (
    <div className="login_frame">
    <div className="LogIn">
        <br/>
        <p>Login</p>
        <div className="TextField">
            <div className="id_input">
                <h3>아이디</h3>
                <input
                    required
                    label="아이디"
                />
            </div>
            <div className="pwd_input">
                <h3>비밀번호</h3>
                <input
                    required
                    label="비밀번호"
                    type="password"
                />
            </div>
        </div>
        
        <div className="SignIn_btn">
            <button className="btn">로그인</button>
        </div>
        <ul className="btns">
            <li className="SignUp">
                <a href="/signup" class="look_link"> 회원가입 </a>
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
