import { useState } from "react";
import "./style.css";
import QrCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQr = () => {
    setQrCode(input);
    setInput('');
  };
  return (
    <div className="qr-container">
      <div>
        <h1>Qr Code Generator</h1>
        <input
          className="qr-input"
          type="text"
          name="qr-code"
          placeholder="Enter Your Value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim !== "" ? false : true}
          onClick={handleGenerateQr}
        >
          Generate
        </button>
      </div>
      <div>
        <QrCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
