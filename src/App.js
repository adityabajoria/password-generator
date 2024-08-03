import "./App.css";
import { useState } from "react";

export default function App() {
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include UpperCase ", state: false },
    { title: "Include LowerCase ", state: false },
    { title: "Include Numbers ", state: false },
    { title: "Include Symbols ", state: false },
  ]);

  const handleCheckBoxes = (i) => {
    const updtedChecked = [...checkBoxData];
    updtedChecked[i].state = !updtedChecked[i].state;
    setCheckBoxData(updtedChecked);
  };

  const handleCopy = () => {};
  return (
    <div className="container">
      {/* Password and Copy*/}
      <div className="header">
        <div className="text">iwnde320349</div>
        <button className="copy-btn" onClick={handleCopy}>
          Copy
        </button>
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
        {/* Generate Password */}
        <button onClick={() => {}} className="generate-btn">
          Generate Password
        </button>
      </div>
    </div>
  );
}
