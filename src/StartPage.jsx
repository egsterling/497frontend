import React from 'react';
import './StartPage.css';
import gameZoneLogo from './images/gamezone.png';

const MainPage = (loginFunc, signupFunc) => {
    return (
        <div className="main-page">
            <nav className="navbar">
                <img src={gameZoneLogo} alt="GameZone Logo" className="logo"/>
                <div className="nav-links">
                    <button onClick={loginFunc} className="nav-button">Login</button>
                    <button onClick={signupFunc} className="nav-button">Sign Up</button>
                </div>
            </nav>

            <div className="content">
                {/* Content of your main page goes here */}
                <h1>Welcome to GameZone</h1>
                <img
                    src={gameZoneLogo}
                    alt="GameZone Logo"
                    className="logo"
                    style={{ width: '300px', height: 'auto' }}
                />
                <p>Explore the world of games and more</p>
                {/* More content */}
            </div>
        </div>
    );
}

export default MainPage;