import "./App.css";
import { useState } from "react";
import PasswordGenerator from "./custom-hook/PasswordGenerator";

export default function App() {
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include UpperCase ", state: false },
    { title: "Include LowerCase ", state: false },
    { title: "Include Numbers ", state: false },
    { title: "Include Symbols ", state: false },
  ]);
  const [copied, setCopied] = useState(false);

  const handleCheckBoxes = (i) => {
    const updtedChecked = [...checkBoxData];
    updtedChecked[i].state = !updtedChecked[i].state;
    setCheckBoxData(updtedChecked);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  setTimeout(() => {
    setCopied(false);
  }, 1000);

  const { password, errorMessage, generatePassword } = PasswordGenerator();

  return (
    <div className="container">
      {/* Password and Copy*/}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? "copied" : "copy"}
          </button>
        </div>
      )}
      {/* Character Length */}
      <div className="char-length">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* Checkboxes */}
      <div className="checkbox">
        {checkBoxData.map((checkbox, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                checked={checkbox.state}
                onChange={() => handleCheckBoxes(i)}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      {/* Strength */}
      {/* Error Handling */}
      {errorMessage && <div className="error">{errorMessage}</div>}
      {/* Generate Password */}
      <button
        className="generate-btn"
        onClick={() => generatePassword(checkBoxData, length)}
      >
        Generate Password
      </button>
    </div>
  );
}
