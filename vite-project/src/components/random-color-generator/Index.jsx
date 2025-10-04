import { useState, useEffect } from "react";
import './style.css'

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateRandomHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * hex.length);
      hexColor += hex[index];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  }

  useEffect(() => {
    if (typeOfColor === "hex") {
      handleCreateRandomHex();
    } else {
      handleCreateRandomRGB();
    }
  }, [typeOfColor]);
  return (
    <div className="container" style={{ background: color }}>
      <div className="button-group">
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHex
              : handleCreateRandomRGB
          }
        >
          Generate Random Color
        </button>
      </div>
      <div className="rgb-color">
        <h3>{typeOfColor.toUpperCase()}</h3>
        <h1>{color}</h1>
        <button onClick={() => navigator.clipboard.writeText(color)}>
          Copy Color
        </button>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
