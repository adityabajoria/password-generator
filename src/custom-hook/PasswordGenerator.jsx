import { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const generatedPassword = (checkBoxData, length) => {
    let chars = "";
    let generatedPassword = "";

    const selectedOption = checkBoxData.filter((checkbox) => checkbox.state);

    if (selectedOption.length === 0) {
      setErrorMessage("Please select at least one option...");
      setPassword("");
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include UpperCase":
          chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowecase":
          chars += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          chars += "0123456789";
          break;
        case "Include Symbols":
          chars += "!@#$%^&*()_-+=?><:;}{|~`";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMessage("");
  };
};

export default PasswordGenerator;
