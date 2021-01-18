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
  var [emojiSelected, setEmoji] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    setEmoji(userInput);

    if (userInput === undefined) {
      setMeaning("We don't have this emoji in our database.");
    } else {
      setMeaning(emojiData[userInput]);
      console.log(emojiMeaning);
    }
  }

  function emojiClickedHandler(userInput) {
    setMeaning(emojiData[userInput]);
  }

  return (
    <div className="App">
      <header>
        <h1>Fun with Emojis</h1>
      </header>
      <div className="emoji-logo">
        <Logo />
      </div>
      <input
        className={"txt-input"}
        placeholder={"Enter emoji here to see its meaning"}
        onChange={emojiInputHandler}
      />
      <h3>{emojiMeaning}</h3>
      {emojis.map(function (emojiSelected) {
        return (
          <span
            key={emojis}
            onClick={() => emojiClickedHandler(emojiSelected)}
            style={{ cursor: "pointer" }}
          >
            {emojiSelected}
          </span>
        );
      })}
    </div>
  );
}
