import React from 'react';
import { useState } from 'react';
import './StartPage.css';
import './LoginPage.css';
import './CreateProfile.css';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import GamePage from './GamePage';
import ProfilePage from './ProfilePage';
import CreateNew from './CreateNew';
import SectionTitle from './SectionTitle';
import pokerImage from './images/poker.jpg';
import euchreImage from './images/euchre.png';
import tenziImage from './images/tenzi.jpeg';
import yahtzeeImage from './images/yahtzee.webp';
import leftArrow from './images/leftarrow.png';
import rightArrow from './images/rightarrow.png';
import gameZoneLogo from './images/gamezone.png';

const App = () => {

  const [page, setPage] = useState("start");
  const [selectedGameName, setSelectedGameName] = useState("");
  const [selectedGameImage, setSelectedGameImage] = useState("");
  const [profCreated, toggleProfCreated] = useState(false);

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [createdName, setCreatedName] = useState('');
  const [createdUsername, setCreatedUsername] = useState('');
  const [createdPassword, setCreatedPassword] = useState('');
  const [createdBio, setCreatedBio] = useState('');
  const [createdProfilePhoto, setCreatedProfilePhoto] = useState(null);

  // const [userInitialized, toggleUserInitialized] = useState(false);

  const clickCard = (cardName, image) => {
    setPage("game");
    setSelectedGameName(cardName);
    setSelectedGameImage(image);
  }

  const clickHome = () => {
    setPage("home");
  }

  const clickProfile = () => {
    setPage("profile");
  }

  const clickCreateNew = () => {
    setPage("createNew");
  }

  const clickLogin = () => {
    setPage("login");
  }

  const clickSignup = () => {
    setPage("signup");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setPage("home");
    // Logic to handle user login
    // This might involve making an API call, handling errors, etc.
  };

  const handleCreateProfile = (e) => {
    e.preventDefault();
    setPage("home");
    // Logic to handle profile creation
    // This will usually involve sending data to a server
  };

  return (
    <>
    {page !== "start" && page !== "login" && page !== "signup" &&
      <>
      <Navbar clickHome={clickHome} clickCreateNew={clickCreateNew} clickProfile={clickProfile}/>
      {page === "home" &&
      <div className="App">
        <SectionTitle title="Card Games" />
        <div className="card-container">
          <Card 
            title="Poker" 
            type="cardgame" 
            image={pokerImage}
                rating="207 👍"
            description="For Adults"
            playerCount="2-10"
            onClick={() => clickCard("Poker",pokerImage)}
          />
          <Card
            title="Euchre"
            type="cardgame"
            image={euchreImage}
                rating="69 👍"
            description="Difficult to learn"
            playerCount="4"
            onClick={() => clickCard("Euchre",euchreImage)}
          />
          
          {/* ... other cards ... */}
        </div>
        <SectionTitle title="Dice Games"/>
        <div className="card-container">
          <Card
            title="Tenzi"
            type="dicegame"
            image={tenziImage}
            rating="93 👍"
            description="Great for kids"
            playerCount="2-4"
            onClick={() => clickCard("Tenzi",tenziImage)}
          />
          <Card
            title="Yahtzee"
            type="dicegame"
            image={yahtzeeImage}
                rating="88 👍"
            description="Upbeat"
            playerCount="2-10"
            onClick={() => clickCard("Yahtzee",yahtzeeImage)}
          />
          {/* ... other cards ... */}
        </div>
        {/* ... other sections ... */}
      </div>
      }
      {page === "game" && <GamePage name={selectedGameName} image={selectedGameImage}/>}
      {page === "profile" && <ProfilePage/>}
      {page === "createNew" && <CreateNew/>}
      </>
    }
    {page === "start" && 
    // {
    //   page === "login" &&
    //   <StartPage loginFunc={loginFunc} signupFunc={signupFunc}/>
    // }
        <div className="main-page">
            <nav className="navbar">
                <img src={gameZoneLogo} alt="GameZone Logo" className="logo"/>
                <div className="nav-links">
                    <button onClick={clickLogin} className="nav-button">Login</button>
                    <button onClick={clickSignup} className="nav-button">Sign Up</button>
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
    }
    {page === "login" && 
      <div className="game-info-page">
          <h1>Login</h1>
          <form className="login-form" onSubmit={handleLogin}>
              <label>
                  Username:
                  <input type="text" value={loginUsername} onChange={e => setLoginUsername(e.target.value)} />
              </label>
              <label>
                  Password:
                  <input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} />
              </label>
              <button type="submit" className="submit-button">Login</button>
          </form>
      </div>
    }
    {page === "signup" &&
      <div className="game-info-page">
          <h1>Create Profile</h1>
          <form className="create-profile-form" onSubmit={handleCreateProfile}>
              <label>
                  Name:
                  <input type="text" value={createdName} onChange={e => setCreatedName(e.target.value)} />
              </label>
              <label>
                  Username:
                  <input type="text" value={createdUsername} onChange={e => setCreatedUsername(e.target.value)} />
              </label>
              <label>
                  Password:
                  <input type="text" value={createdPassword} onChange={e => setCreatedPassword(e.target.value)} />
              </label>
              <label>
                  Bio:
                  <textarea value={createdBio} onChange={e => setCreatedBio(e.target.value)}/>
              </label>
              <label>
                  Profile Photo:
                  <input type="file" onChange={e => setCreatedProfilePhoto(e.target.files[0])}/>
              </label>
              <button type="submit" className="submit-button">Create Profile</button>
          </form>
      </div>
    }
    </>
  );
}

export default App;