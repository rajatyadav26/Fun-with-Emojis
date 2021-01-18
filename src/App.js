import React, { useState } from "react";
import "./styles.css";
import { ReactComponent as Logo } from "./Emoji.svg";

const emojiData = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "❤️": "love",
  "😑": "annoyance",
  "👋": "waving",
  "👏": "clapping",
  "👌": "ok",
  "😪": "sleepy",
  "😴": "sleeping",
  "🥱": "yawning",
  "😣": "tired",
  "😐": "neutral",
  "🤗": "hugging",
  "🧨": "firecracker"
  /** add some more to show how the app now expands when there's new data */
};

var emojis = Object.keys(emojiData);
console.log(emojis);

export default function App() {
  var [emojiMeaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    if (userInput === undefined) {
      setMeaning("We don't have this emoji in our database.");
    } else {
      setMeaning(emojiData[userInput]);
    }
  }

  function emojiClickedHandler(emojiSelected) {
    setMeaning(emojiData[emojiSelected]);
  }

  return (
    <div className="App">
      <nav>
        <h1>Fun with Emojis</h1>
      </nav>

      <div
        style={{ maxHeight: "300px", display: "block" }}
        className={"emoji-logo"}
      >
        <Logo />
      </div>

      <header className={"center-conatiner"}>
        <input
          className={"txt-input"}
          placeholder={"Enter emoji here to see its meaning"}
          onChange={emojiInputHandler}
        />

        <h3>{emojiMeaning}</h3>

        {emojis.map(function (emojiSelected) {
          return (
            <span
              onClick={() => emojiClickedHandler(emojiSelected)}
              key={emojiSelected}
              style={{ cursor: "pointer" }}
            >
              {emojiSelected}
            </span>
          );
        })}
      </header>
    </div>
  );
}
