import React, { useState } from 'react';
import './CreateNew.css';

const CreateNewGame = () => {
    const [gameName, setGameName] = useState('');
    const [gameDescription, setGameDescription] = useState('');
    const [gameRules, setGameRules] = useState('');
    const [gameImage, setGameImage] = useState(null);

    const handleSubmit = () => {
        // Logic to submit the game creation
    };

    return (
        <div className="game-info-page">
            <h1>Create New Game</h1>
            <div className="create-game-form">
                <label>
                    Game Name:
                    <input type="text" value={gameName} onChange={e => setGameName(e.target.value)} />
                </label>
                <label>
                    Game Description:
                    <textarea value={gameDescription} onChange={e => setGameDescription(e.target.value)} />
                </label>
                <label>
                    Game Rules:
                    <textarea value={gameRules} onChange={e => setGameRules(e.target.value)} />
                </label>
                <label>
                    Game Image:
                    <input type="file" onChange={e => setGameImage(e.target.files[0])} />
                </label>
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default CreateNewGame;
