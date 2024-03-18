import { useState } from "react";
import Joke from "./components/Joke";
import Counter from "./components/Counter";
import Sum from "./components/Sum";

function App() {
  const [jokesArray, setJokesArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [count, setCount] = useState(0);
  const [operandOne, setOperandOne] = useState("");
  const [operandTwo, setOperandTwo] = useState("");
  const [result, setResult] = useState();

  function handleSum() {
    const sum = parseInt(operandOne) + parseInt(operandTwo);
    setResult(sum);
  }

  function increament() {
    setCount(count + 1);
  }

  function decreament() {
    setCount(count - 1);
  }

  const jokes = [
    {
      id: 1,
      type: "pun",
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      type: "dad joke",
      joke: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 3,
      type: "one-liner",
      joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    },
    {
      id: 4,
      type: "knock-knock",
      joke: "Knock knock. Who's there? Lettuce. Lettuce who? Lettuce in, it's freezing out here!",
    },
    {
      id: 5,
      type: "punny",
      joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 6,
      type: "classic",
      joke: "Why did the chicken go to the seance? To talk to the other side!",
    },
    {
      id: 7,
      type: "wordplay",
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 8,
      type: "animal",
      joke: "What do you call a fish wearing a crown? A kingfish!",
    },
    {
      id: 9,
      type: "tech",
      joke: "Why did the computer go to the doctor? Because it had a virus!",
    },
    {
      id: 10,
      type: "math",
      joke: "Parallel lines have so much in common. It's a shame they'll never meet!",
    },
  ];

  function showJokes() {
    setJokesArray(jokes);
  }

  function hideJokes() {
    setJokesArray([]);
  }

  function findJokes(e) {
    const searchValue = e.target.value.toLowerCase();
    setSearchQuery(searchValue);
    if (searchValue === "") {
      setJokesArray(jokes);
    } else {
      const filteredJokes = jokesArray.filter(
        (joke) =>
          joke.type.toLowerCase().includes(searchValue) ||
          joke.id.toString().includes(searchValue)
      );
      setJokesArray(filteredJokes);
    }
  }

  return (
    <>
      <div className="main">
        <button onClick={showJokes}>Show Jokes</button>
        <button onClick={hideJokes}>Hide Jokes</button>
      </div>
      <div className="container">
        <input
          type="text"
          placeholder="Search Jokes by type or id"
          value={searchQuery}
          onChange={findJokes}
        />
      </div>
      <div className="jokes">
        {jokesArray.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
      <Counter
        count={count}
        increament={increament}
        decreament={decreament}
      ></Counter>
      <Sum
        text="Enter operands to add."
        operandOne={operandOne}
        operandTwo={operandTwo}
        setOperandOne={setOperandOne}
        setOperandTwo={setOperandTwo}
        handleSum={handleSum}
        sum={result}
      />
    </>
  );
}

export default App;
