import React, { useEffect, useState } from "react";
import "./style.css";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      //   console.log(data);

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }else{
        setError("No Product Found");
      }
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }finally{
        setLoading(false);
    }
  }

  function handleScrollPercentage() {
    const totalScrollDistance = document.documentElement.scrollTop; // how much you scrolled
    const pageHeight = document.documentElement.scrollHeight; // total page height
    const viewPort = document.documentElement.clientHeight; // visible window height
    const maxScrollable = pageHeight - viewPort;

    let scrollPercentage = (totalScrollDistance / maxScrollable) * 100;
    setScrollPercent(scrollPercentage);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {handleScrollPercentage});
    };
  },[]);

  if (loading) {
    return <div>Loading Data...</div>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  console.log(data, loading);
  return (
    <div>
      <div className="top-container">
        <h1>Custom scroll indicator</h1>
        <div className="scroll-progress-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => <p key={item.id}>{item.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default ScrollIndicator;
