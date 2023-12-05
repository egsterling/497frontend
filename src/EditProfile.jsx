import React, { useState } from 'react';
import './EditProfile.css';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handleSubmit = () => {
        // Logic to update the user's profile
    };

    return (
        <div className="game-info-page">
            <h1>Edit Profile</h1>
            <div className="edit-profile-form">
                <label>
                    Name:
                    <input type="text" value={"Jordan Smith"} onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Username:
                    <input type="text" value={"jordsmith23"} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Bio:
                    <textarea value={"My name is Jordan and I'm a mother of 3 looking to find card games to play with my family. I love the way that they require skill and strategy, while also bringing people together!"} onChange={e => setBio(e.target.value)} />
                </label>
                <label>
                    Profile Photo:
                    <input type="file" onChange={e => setProfilePhoto(e.target.files[0])} />
                </label>
                <button className="submit-button" onClick={handleSubmit}>Update Profile</button>
            </div>
        </div>
    );
}

export default EditProfile;