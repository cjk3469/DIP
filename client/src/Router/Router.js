import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../components/Main/Main';
import NotFound from '../NotFound';
import Nav from '../components/Header/Nav';
import Signin from '../components/Signin/Signin';
import Lecture from '../components/Lecture/Lecture';
import Setting from '../components/Setting/Setting';
import Project from '../components/Project/Project';
import Chat from '../components/Chat/Chat';
import Support from '../components/Support/Support';
import Signup from '../components/Signup/Signup';



const Router = () => {
	return (
		<div className='App'>
			<BrowserRouter>
            <Nav/>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/home" element={<Main />}></Route>
                    <Route path="/lecture" element={<Lecture />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
                    <Route path="/signin" element={<Signin />}></Route>
                    <Route path="/project" element={<Project />}></Route>
                    <Route path="/chat" element={<Chat />}></Route>
                    <Route path="/support" element={<Support />}></Route>
                    <Route path="/setting" element={<Setting />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;