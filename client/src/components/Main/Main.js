import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LogIn from '../Login/Login';
import './Main.css';
const Main = (props) => {

	const[content, setContent] = useState('');
	useEffect(() => {
		axios.get("/hello").then(res => setContent(res.data.data));
		
	  }, [content])
	return (
		<>
			<h3>홈 페이지.</h3>
			<h3>{content}</h3>
			{/* <ul>
                <Link to="/login">
                    <span>
                        Login
                    </span>
                </Link>
				<Link to="/product/1"><li>1번상품</li></Link>
				<Link to="/product/2"><li>2번상품</li></Link>
			</ul> */}
		</>
	);
};

export default Main;