import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../components/Main/Main';
import NotFound from '../NotFound';
import Nav from '../components/Navigation/Nav';
import LogIn from '../components/Login/Login';
import Lecture from '../components/Lecture/Lecture';
import Setting from '../components/Setting/Setting';
import Project from '../components/Project/Project';
import Chat from '../components/Chat/Chat';
import Support from '../components/Support/Support';



const Router = () => {
	return (
		<div className='App'>
			<BrowserRouter>
            <Nav/>
				<Routes>
                    <Route path="/home" element={<Main />}></Route>
					<Route path="/" element={<Main />}></Route>
                    <Route path="/lecture" element={<Lecture />}></Route>
                    <Route path="/login" element={<LogIn />}></Route>
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