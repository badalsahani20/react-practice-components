import { useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import useDebounce from "./useDebounce";
import "./autoComplete.css";

const AutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const debouncedSearchParam = useDebounce(searchParam, 300);
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  async function fetchUserList() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setUser(data.users.map((userItem) => userItem.firstName));
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }finally{
      setLoading(false);
    }
  }

  function handleChange(e) {
    setSearchParam(e.target.value.toLowerCase());
  }

  useEffect(() => {
    if(debouncedSearchParam.length > 1) {
        const filteredData = user.filter(item => item.toLowerCase().includes(debouncedSearchParam));
        setFilteredUsers(filteredData);
        setShowDropDown(true);
    }else{
        setFilteredUsers([]);
        setShowDropDown(false);
    }
  }, [debouncedSearchParam, user])


  useEffect(() => {
    fetchUserList();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  function handleOnClick(e) {
    setShowDropDown(false);
    setSearchParam(e.target.innerText);
    setFilteredUsers([]);
  }
  return (
    <div className="search-auto-complete-container">
      <input
        type="text"
        value={searchParam}
        name="search-user"
        placeholder="Search Users..."
        onChange={handleChange}
      />

    {
        showDropDown && <Suggestions handleClick={handleOnClick} data={filteredUsers} />
    }

    </div>
  );
};

export default AutoComplete;
