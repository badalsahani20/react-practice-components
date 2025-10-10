const Model = ({id, header, body, footer, onClose}) => {
  return (
    <div id={id || "Model"} className="model">
      <div className="model-content">
        <div className="header">
          <span onClick={onClose} className="close-model">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="model-body">
          {body ? (
            body
          ) : (
            <div>
              <p>This is Model Body</p>
            </div>
          )}
        </div>
        <div className="model-footer">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default Model;
