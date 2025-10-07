import React, { useState } from 'react';
import MenuList from './MenuList';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

const MenuItem = ({ item }) => {
  const [displayCurrentChild, setDisplayCurrentChild] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [getCurrentLabel]: !displayCurrentChild[getCurrentLabel],
    });
  }

  return (
    <li className="menu-item">
      <div className="menu-header">
        <p className="menu-label">{item.label}</p>
        {item.children?.length > 0 && (
          <span
            className="toggle-icon"
            onClick={() => handleToggleChildren(item.label)}
          >
            {displayCurrentChild[item.label] ? <FiChevronDown /> : <FiChevronRight />}
          </span>
        )}
      </div>

      {item.children?.length > 0 && displayCurrentChild[item.label] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
};

export default MenuItem;