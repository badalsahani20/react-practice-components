import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(id) {
    setSelected(selected === id ? null : id);
  }

  function handleMultipleSelection(id) {
    let cpyMultiple = [...multiple];
    const currentIndex = cpyMultiple.indexOf(id);
    if (currentIndex === -1) {
      cpyMultiple.push(id);
    } else {
      cpyMultiple.splice(currentIndex, 1);
    }
    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button
        className="toggle-btn"
        onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}
      >
        {enableMultipleSelection
          ? "Disable Multiple Selection"
          : "Enable Multiple Selection"}
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => {
            const isOpen =
              selected === item.id || multiple.includes(item.id);

            return (
              <div className="item" key={item.id}>
                <div
                  className="title"
                  onClick={
                    enableMultipleSelection
                      ? () => handleMultipleSelection(item.id)
                      : () => handleSingleSelection(item.id)
                  }
                >
                  <h3>{item.question}</h3>
                  <span>{isOpen ? "-" : "+"}</span>
                </div>
                {isOpen && <div className="content">{item.answer}</div>}
              </div>
            );
          })
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
