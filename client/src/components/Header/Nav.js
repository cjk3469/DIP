import { useState } from 'react';
import './Nav.css';
import NavItem from './NavItem';
import { VscThreeBars, VscTriangleDown } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [categoryVisible, setVisible] =  useState(false);
  function handleMouseOver(){
    setVisible(true);
  }
  function handleMouseOut(){
    setVisible(false);
  }
  return (
    <div className="header">
      <header>
        <section className="logo_area">
          <a href="/" className="title">Do It Proejct</a>
          <div id="empty"></div>
          <input className="search_input" placeholder="검색어를 입력하세요."/>
          <Link to="/login"  className="login_btn">
            <span>Login</span>
          </Link>
        </section>
        <section className="nav_area">
          <div className="nav_category">
            <button 
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <span><VscThreeBars/></span>
              <span className="category_title">전체 카테고리</span>
              <span><VscTriangleDown /></span>
            </button>
            <div id="empty2"></div>
            {categoryVisible ?  
            <div 
              className="NavItems" 
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >

              <Link to="/home" style={{ textDecoration: "none" }}>
                <NavItem value="홈"/>
              </Link>

              
              <Link to="/project" style={{ textDecoration: "none" }}>
                <NavItem value="프로젝트"/>
              </Link>

              <Link to="/lecture" style={{ textDecoration: "none" }}>
                <NavItem value="강의"/>
              </Link>

              <Link to="/chat" style={{ textDecoration: "none" }}>
                <NavItem value="채팅"/>
              </Link>

              <Link to="/support" style={{ textDecoration: "none" }}>
                <NavItem value="고객지원"/>
              </Link>

              <Link to="/setting" style={{ textDecoration: "none" }}>
                <NavItem value="설정"/>
              </Link>
              

            </div>
            : "" }
          </div>
          
        </section>
      </header>
    </div>
  );
}

export default Nav;
