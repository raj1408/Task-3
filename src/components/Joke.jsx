import React from "react";

function Joke({ joke }) {
  return (
    <div className="joke">
      <p>{joke.id}</p>
      <p>{joke.type}</p>
      <p className="content">{joke.joke}</p>
    </div>
  );
}

export default Joke;
