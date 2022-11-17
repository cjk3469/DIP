// import { Link } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import LogIn from './components/Login/Login';
// import Nav from './components/Navigation/Nav';
// import NotFound from './NotFound';

// function App() {
//   return (
//     <div className="App">
//       {/* <Nav /> */}
//       <Routes>
// 					{/* <Route path="/" element={<App />}></Route> */}
// 					{/* <Route path="/Login/*" element={<LogIn />}></Route> */}
// 					{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
// 					{/* <Route path="*" element={<NotFound />}></Route> */}
//           <Route path="*" element={<NotFound />}></Route>
// 			</Routes>
//       {/* <LogIn /> */}
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
// import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css';
import Router from './Router/Router';




const App = () => {
	return (
		<div>
			{/* <BrowserRouter>
        <Nav/>
				<Routes>
          <Route path="/home" element={<Main />}></Route>
					<Route path="/" element={<Main />}></Route>
          <Route path="/lecture" element={<Lecture />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
					<Route path="/product" element={<Product />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter> */}
      <Router/>
		</div>
	);
};

export default App;