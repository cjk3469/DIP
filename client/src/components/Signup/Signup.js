import axios from 'axios';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup(props){

    // constructor(props){
	// 	super(props);
	// 	this.state = {
	// 	  data : [],
	// 	};
	// }

	// componentDidMount() {
	// 	this._getHello();
	// }

	// _getHello = async() => {
	// 	const res = await axios.get('/api/products');
	// 	console.log(res);
	// 	const test = res.data;
	// 	this.setState({ data : test })
	// 	console.log(this.state.data);
	// }

    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    const [confPassword,setConfPassword] =useState("");
    const [nick,setNick] =useState("");
    const onEmailHandler =(event)=>{
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler =(event)=>{
        setPassword(event.currentTarget.value);
    }
    const onConfPasswordHandler =(event)=>{
        setConfPassword(event.currentTarget.value);
    }
    const onNickHandler =(event)=>{
        setNick(event.currentTarget.value);
    }

    const navigate = useNavigate();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // if (email.current.value === "" || email.current === undefined) {
        //     alert("이메일을 입력하세요.");
        //     email.current.focus();
        //     return false;
        //   }
        //   if (password.current === "" || password.current === undefined) {
        //     alert("비밀번호를 입력하세요.");
        //     password.current.focus();
        //     return false;
        //   }
        //   if (confPassword.current === "" || confPassword.current === undefined) {
        //     alert("비밀번호를 확인해주세요.");
        //     confPassword.current.focus();
        //     return false;
        //   }
        //   if (nick.current === "" || nick.current === undefined) {
        //     alert("닉네임을 입력하세요.");
        //     nick.current.focus();
        //     return false;
        //   }
        if(password !== confPassword){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
        }
        

    axios.post("http://localhost:4000/member", {
        email:email,
        password:password,
        nick:nick
    })
      .then((res) => {
        console.log("handleMember =>", res);
        if (res.data.affectedRows === 1){
            alert("가입 되었습니다.");
            navigate("/");
        }else 
            alert("가입 실패");
      })
      .catch((e) => {
        console.error(e);
      });
        
    }
    return(
        <>
        <div className="login_frame">
        <div className="LogIn">
        <br/>
        <p>SIGN Up</p>
        <form 
            className="TextField"
        >
                <input
                    required
                    type="email"
                    onChange={onEmailHandler}
                    placeholder='이메일'
                />
                <br/>
                <br/>
                <input
                    required
                    type="password"
                    onChange={onPasswordHandler}
                    placeholder='비밀번호'
                    autocomplete="new-password"
                />
                <br/>
                <br/>
                <input
                    required
                    type="password"
                    onChange={onConfPasswordHandler}
                    placeholder='비밀번호 확인'
                    autocomplete="new-password"
                />
                <br/>
                <br/>
                <input
                    required
                    type="text"
                    onChange={onNickHandler}
                    placeholder='닉네임'
                />
        </form>
        <br/>
        <br/>
        <div className="SignIn_btn">
            <button 
                className="btn"
                onClick={onSubmitHandler}
            >회원가입</button>
        </div>
        
    </div>
    </div>
    </>
    );
}
export default Signup;