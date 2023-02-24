import React, { useState } from "react";

function Radio() {
  const [radio, setRadio] = useState({ alphabet: "" });
  const [disabled, setDisabled] = useState(false);

  const hendleRadio = (e) => {
    setRadio({ ...radio, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const hendleSubmit = () => {
    setRadio({ alphabet: "" });
    console.log("radio", radio);
  };

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <>
    <div>
      <lable>
        <b> Radio: </b>
      </lable>
      <br />
      <label> A </label>
      <input
        type="radio"
        name="alphabet"
        value="A"
        checked={radio.alphabet === "A"}
        onChange={(e) => hendleRadio(e)}
        disabled={disabled}
      />
      <label> B </label>
      <input
        type="radio"
        name="alphabet"
        value="B"
        checked={radio.alphabet === "B"}
        onChange={(e) => hendleRadio(e)}
        disabled={disabled}
      />
      <label> C </label>
      <input
        type="radio"
        name="alphabet"
        value="C"
        checked={radio.alphabet === "C"}
        onChange={(e) => hendleRadio(e)}
        disabled={disabled}
      />
      <br />
      <label> D </label>
      <input
        type="radio"
        name="alphabet"
        value="D"
        checked={radio.alphabet === "D"}
        onChange={(e) => hendleRadio(e)}
        disabled={disabled}
      />
      <label> E </label>
      <input
        type="radio"
        name="alphabet"
        value="E"
        checked={radio.alphabet === "E"}
        onChange={(e) => hendleRadio(e)}
        disabled={disabled}
      />
      <label> F </label>
      <input
        type="radio"
        name="alphabet"
        value="F"
        checked={radio.alphabet === "F"}
        onChange={(e) => hendleRadio(e)}
        disabled={disabled}
      />
      <br /><br />
      <button
        style={{
          backgroundColor: "white",
          height: 25,
          width: 70,
          borderRadius: 10,
          color: "black",
          cursor:"pointer",
          fontSize: 15,
        }}
        onClick={() => hendleSubmit()}
      >
        Submit
      </button>
      <button
        style={{
          backgroundColor: "black",
          height: 25,
          width: 80,
          borderRadius: 10,
          color: "white",
          cursor:"pointer",
          fontSize: 15,
        }}
        onClick={toggleDisabled}
      >
        Disabled
      </button>
    </div>
    </>
  );
}

export default Radio;
