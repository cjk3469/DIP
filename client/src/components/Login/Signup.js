import './Signup.css';

const Signup = () => {
    return (
        <>
            <div>
                <p>Sign Up</p>
                    <form className="signup_form">
                    <input
                        required
                        label="email"
                        type="text"
                        placeholder = "이메일"
                    /><br/>
                    <input
                        required
                        label="password"
                        type="password"
                        placeholder = "비밀번호"
                    /><br/>
                    <button className="btn">가입완료</button>
                    <br/>
                    </form>
            </div>
        </>
    );
}

export default Signup;