import React from 'react';
import { useState } from 'react';
import './ProfilePage.css';
import jordanSmith from './images/jordansmith.jpeg';
import crazyEights from './images/crazyeights.png';
import EditProfile from './EditProfile';

const UserProfile = () => {

    const [page, setPage] = useState("prof");
    const toggleEditProfile = () => {
        setPage("edit");
    }

    return (
        <>
        {page === "prof" && 
        <div className="game-info-page">
            <div className="profile-header">
                <img src={jordanSmith} alt="User Profile" className="profile-image"/>
                <h1>Jordan Smith</h1>
                {/* <h4>username</h4> */}
                {/* <p className="bio">This is a short bio about the user. It describes interests, hobbies, and other personal details.</p> */}
                <button className="edit-profile-button" onClick={toggleEditProfile}>Edit Profile</button>
            </div>
            <h4>jordsmith23</h4>
            <p className="bio">My name is Jordan and I'm a mother of 3 looking to find card games to play with my family. I love the way that they require skill and strategy, while also bringing people together!</p>
            <h2>My Games</h2>
            <div className="games-grid">
                <div className="game-card">
                    <img src={crazyEights} alt="Game 1"/>
                    <h3>Jordan's Crazy Eights</h3>
                    <p>Crazy Eights is a shedding-type card game for two to seven players and the best known American member of the Eights Group which also includes Pig and Spoons. The object of the game is to be the first player to discard all of their cards.</p>
                </div>
            </div>
        </div>
        }
        {page === "edit" &&
            <EditProfile/>
        }
        </>
    );
}

export default UserProfile;
