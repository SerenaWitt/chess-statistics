import React from "react"
import './playersearch.css'

function PlayerStatistics({player}) {
    return(
      <div className="player-stats">
        <h2>Chess Daily:</h2> 
        <p>Most Recent Rating: {player.chess_daily.last.rating}</p>
        <p>Number of Games Won: {player.chess_daily.record.win}</p>
        <p>Number of Games Lost: {player.chess_daily.record.loss}</p>


        <h2>Chess Blitz:</h2> 
        <p>Most Recent Rating: {player.chess_blitz.last.rating}</p>
        <p>Number of Games Won: {player.chess_blitz.record.win}</p>
        <p>Number of Games Lost: {player.chess_blitz.record.loss}</p>
    </div>

    )
  }

export default PlayerStatistics