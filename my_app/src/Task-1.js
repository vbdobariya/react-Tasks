import React, { useState } from "react";

const Task = () => {
  const [randomColor, SetRandomColor] = useState([]);

  function getRandomColor() {
    console.log("Math.random()", Math.random());
    return `#${Math.random().toString(16).substr(-6)}`;
  }

  const IncreseColor = () => {
    SetRandomColor([...randomColor, getRandomColor()]);
    console.log("randomColor", randomColor);
  };

  const onRemoveClick = () => {
    randomColor.pop();
    SetRandomColor([...randomColor]);
  };

  return (
    <div>
      <button
        style={{
          height: 25,
          width: 50,
          marginTop: 5,
          marginLeft: 5,
          borderRadius: 5,
        }}
        onClick={(e) => IncreseColor(e)}
      >
        +
      </button>
      <button
        style={{
          height: 25,
          width: 50,
          marginTop: 5,
          marginLeft: 5,
          borderRadius: 5,
        }}
        onClick={() => onRemoveClick()}
      >
        -
      </button>
      {randomColor.map((Color, index) => (
        <div
          key={index}
          style={{
            height: 100,
            width: 100,
            backgroundColor: Color,
            marginLeft: 50,
            marginTop: 10,
            borderRadius: 5,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Task;
