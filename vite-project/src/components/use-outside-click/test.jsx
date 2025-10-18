import { useRef } from "react";
import { useState } from "react";
import useOnClickOutside from "./index";
import "./style.css";

const useOnClickOutSideTest = () => {
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => {
    if (showContent) {
      setFadeOut(true);
      setTimeout(() => {
        setShowContent(false);
        setFadeOut(false);
      }, 300);
    }
  });

  return (
    <div className="page">
      {showContent ? (
        <div ref={ref} className={`modal ${fadeOut ? "fade-out" : "fade-in"}`}>
          <h1>This is a random content 🎉</h1>
          <p>Click outside this box to close it.</p>
        </div>
      ) : (
        <button className="show-btn" onClick={() => setShowContent(true)}>
          Show Content
        </button>
      )}
    </div>
  );
};

export default useOnClickOutSideTest;
