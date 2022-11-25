import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Signin from '../Signin/Signin';
import './Main.css';
function Main(props){

	const[content, setContent] = useState('');
	useEffect(() => {
		axios.get("/hello").then(res => setContent(res.data.data));
		
	}, [content])
	return (
		<>
			<h3>홈 페이지.</h3>
			<h3>{content}</h3>
		</>
	);
};

export default Main;