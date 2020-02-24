import React, { useEffect, useState } from 'react';

const Players = (props) => {
  return(
    <div className="player-card">
      <div>{props.name}</div>
      <div>{props.country}</div>
      <div>{props.searches}</div>
    </div>
  )
}

export default Players;