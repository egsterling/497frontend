import React, { useState } from 'react';
import './GamePage.css';
  
// Assuming you have an image in the `images` directory.

const GamePage = ({name, image}) => {
  const [likes, setLikes] = useState(207);
  const [dislikes, setDislikes] = useState(22);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const [liked, toggleLiked] = useState(false);
  const [disliked, toggleDisliked] = useState(false);

  // console.log(liked);

  const handleLike = () => {
    if(!liked) {
      setLikes(likes + 1);
      toggleLiked(true);
    }
    else {
      setLikes(likes - 1);
      toggleLiked(false);
    }
  };

  const handleDislike = () => {
    if(!disliked) {
      setDislikes(dislikes + 1);
      toggleDisliked(true);
    }
    else {
      setDislikes(dislikes - 1);
      toggleDisliked(false);
    }
  };

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="game-info-page">
      <h1>{name}</h1>
      <img src={image} alt="Game Visual Representation" />
      
      <h2>Description</h2>
      <p>Poker is a card game that combines strategy and betting. Players are dealt private cards (hole cards), and a series of community cards are placed face-up on the table. Betting rounds occur after each community card is revealed. The goal is to create the strongest five-card hand by using a combination of hole and community cards. The player with the best hand, or the one who successfully bluffs their opponents into folding, wins the pot. Poker involves reading opponents, managing bets, and understanding hand rankings.</p>

      <h2>Rules</h2>
      <p>Players can choose to bet, raise, check, or fold based on their assessment of their hand's strength 
        and their strategic objectives. The objective is to form the best possible five-card hand by combining 
        the hole cards with the community cards. Hand rankings, from highest to lowest, include Royal Flush, 
        Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, One Pair, and High Card. 
        The player with the strongest hand or the last player remaining after all others have folded wins the pot. 
        The rules may vary slightly depending on the specific poker variant, but the fundamental principles of poker, 
        including hand rankings and the use of community cards, remain consistent across different games.</p>
      {/* Add more rules as necessary */}

      <div className="like-dislike-section">
        <button onClick={handleLike} style={liked ? {backgroundColor: "#333"} : {backgroundColor: "grey"}} disabled={disliked}>👍 Like {likes}</button>
        <button onClick={handleDislike} style={disliked ? {backgroundColor: "#333"} : {backgroundColor: "grey"}} disabled={liked}>👎 Dislike {dislikes}</button>
      </div>

      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>jordsmith23: {comment}</li>
        ))}
      </ul>
      <div>
        <input 
          type="text" 
          placeholder="Add a comment..."
          value={newComment} 
          onChange={e => setNewComment(e.target.value)} 
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}

export default GamePage;





