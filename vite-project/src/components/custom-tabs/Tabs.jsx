import React, { useState } from "react";

const Tabs = ({ content, onChange }) => {
    const[currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(index) {
        setCurrentTabIndex(index);
        onChange(index);
    }
  return (
    <>
      <div className="wrapper"></div>
      <div className="heading">
        {content.map((items, index) => (
            <div onClick={() => handleOnClick(index)} key={items.label}>
                <span className="label">{items.label}</span>
            </div>
        ))}
      </div>
      <div className="content" style={{color: 'red'}}>
        {content[currentTabIndex] && content[currentTabIndex].content}
      </div>
    </>
  );
};

export default Tabs;
