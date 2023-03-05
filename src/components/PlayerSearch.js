import React, { useState } from "react";
import PlayerStatistics from "./PlayerStatistics";
import PlayerDetails from "./PlayerDetails";
import './playersearch.css'

function PlayerSearch() {
  const [username, setUsername] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [playerStats, setPlayerStats] = useState(null);


  const handleSearch = async () => {
    // fetch player profile
    const profileResponse = await fetch(`https://api.chess.com/pub/player/${username}`);
    const profileData = await profileResponse.json();
    setPlayerData(profileData);
}

const handleGetStats = async () => {
    // fetch player stats
    const statsResponse = await fetch(`https://api.chess.com/pub/player/${username}/stats`);
    const statsData = await statsResponse.json();
    setPlayerStats(statsData);
  };

  return (
    <section id="btn">

        <div >
      <input type="text" className="input-username" placeholder="Enter player username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={handleSearch} className='search'>Search</button>
      {playerData && <PlayerDetails player={playerData} />}
      </div>
      <div className='btn-search button'>
        <button onClick={handleGetStats} className='search'>Get Player Statistics</button>
        {playerStats && <PlayerStatistics player={playerStats} />}

      </div>

    </section>
  );
}

export default PlayerSearch;
