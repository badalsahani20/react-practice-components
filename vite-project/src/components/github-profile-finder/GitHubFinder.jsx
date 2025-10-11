import React, { useEffect, useState } from "react";
import "./githubfinder.css";
import Spinner from "./Spinner";
import UserData from "./UserData";
// import {} from 'react-icons/bs'

const GitHubProfileFinder = () => {
  const [input, setInput] = useState("badalsahani20");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleOnClick() {
    fetchUserData();
  }

  async function fetchUserData() {
    try {
        setLoading(true);
      const res = await fetch(`https://api.github.com/users/${input}`);
      const data = await res.json();
      console.log(data);

      if (!data) return;
      setUserData(data);
      setInput('');
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }finally{
        setLoading(false);
    }
  }

  useEffect(() => {
    setError(null); // Add this at the start of fetchUserData
    fetchUserData();
  }, []);

  if(error) {
    return <div style={{color: 'red'}}>Failed to fetch data...</div>
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search username"
        />
        <button className="profile-founder-btn" onClick={handleOnClick}>
          Search
        </button>
      </div>
      {userData !== null ? <UserData user={userData} /> : null}
    </div>
  );
};

export default GitHubProfileFinder;
