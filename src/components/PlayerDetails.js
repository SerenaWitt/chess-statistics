import React from 'react';
import './playersearch.css'

function PlayerDetails({ player }) {
  return (
    <section id="details">
    <div className='details-player'>
      <h2>{player.username}</h2>
      <p>Name: {player.name}</p>
      <p>Titles: {player.title}</p>
      <p>Location: {player.location}</p>
      <p>Followers: {player.followers}</p>
      <p>Status: {player.status}</p>
    </div>
    </section>
  );
}

export default PlayerDetails;

