import React, { useState } from "react";
import "./ChessCard.css";

const ChessCard = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [userStats, setUserStats] = useState({});

  const handleSearchClick = async () => {
    const userResponse = await fetch(
      `https://api.chess.com/pub/player/${username}`
    );
    const userData = await userResponse.json();
    setUserData(userData);

    const statsResponse = await fetch(
      `https://api.chess.com/pub/player/${username}/stats`
    );
    const userStats = await statsResponse.json();
    setUserStats(userStats);
  };

  return (
    <div className="chess-card">
      <h1>Chess.com Player Stats</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleSearchClick}>Search</button>
      {userData.username && (
        <div>
          <h2>{userData.username}</h2>
          <p>Name: {userData.name}</p>
          <p>Player Id: {userData.player_id}</p>
          <p>Title: {userData.title}</p>
          <p>Location: {userData.location}</p>
          <p>Status: {userData.status}</p>
          <p>Joined: {new Date(userData.joined * 1000).toLocaleDateString()}</p>
          <p>
            Last Online:{" "}
            {new Date(userData.last_online * 1000).toLocaleString()}
          </p>
        </div>
      )}
      {userStats.chess_blitz && (
        <div>
          <h2>Statistics</h2>
          <p>Blitz Rating: {userStats.chess_blitz.last.rating}</p>
          <p>Bullet Rating: {userStats.chess_bullet.last.rating}</p>
          <p>Rapid Rating: {userStats.chess_rapid.last.rating}</p>
          <p>FIDE Rating: {userStats.fide}</p>
          <p>Tactics: {userStats.tactics.highest.rating}</p>
          {userStats.puzzle_rush.best && (
            <p>Puzzle Rush Score: {userStats.puzzle_rush.best.score}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ChessCard;
