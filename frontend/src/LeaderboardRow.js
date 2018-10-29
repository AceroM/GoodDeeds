import React from "react";

const LeaderboardRow = ({ number, name, score }) => (
  <tr>
    <th>{number}</th>
    <th>{name}</th>
    <th>{score}</th>
  </tr>
);

export default LeaderboardRow;
