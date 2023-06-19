import { useEffect, useState } from "react";

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("https://www.balldontlie.io/api/v1/teams").then((response) =>
      response.json().then((results) => setTeams(results.data))
    );
  });
  return (
    <>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>{team.full_name}</li>
        ))}
      </ul>
    </>
  );
}

export default Teams;
