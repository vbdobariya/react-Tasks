import React, { useState } from "react";
import { Checkbox } from "antd";

function Language() {
  const [check, setCheck] = useState({ language: [] });
  const [checkData, setCheckData] = useState([]);
  const [index, setIndex] = useState("");

  const hendleCheck = (e, language) => {
    const languageData = check.language;
    console.log(e.target.value);

    if (language === "language") {
      if (e.target.checked) {
        languageData.push(e.target.name);
      } else {
        const index = check.language.indexOf(e.target.name);
        languageData.splice(index, 1);
      }
      setCheck({
        ...check,
        language: languageData,
      });
      console.log("languageData", languageData);
      console.log("check.language", check.language);
    }
  };
  const hendleSubmit = () => {
    const Data = checkData;
    if (index === "") {
      Data.push(check);
    } else {
      Data[index] = check;
      setIndex("");
    }
    setCheckData([...Data]);
    setCheck({ language: [] });
    console.log("Data---------->", Data);
    console.log("checkData--------->", checkData);
  };

  return (
    <div>
      <label>
        <b> CheckBox: </b>
      </label>
      <br />
      <Checkbox
        type="checkbox"
        name="English"
        value="English"
        onChange={(e) => hendleCheck(e, "language")}
        checked={check?.language?.includes("English")}
      />
      English
      <Checkbox
        type="checkbox"
        name="Marathi"
        value="Marathi"
        onChange={(e) => hendleCheck(e, "language")}
        checked={check?.language?.includes("Marathi")}
      />
      Marathi
      <Checkbox
        type="checkbox"
        name="Gujrati"
        value="Gujrati"
        onChange={(e) => hendleCheck(e, "language")}
        checked={check?.language?.includes("Gujrati")}
      />
      Gujrati
      <br />
      <Checkbox
        type="checkbox"
        name="Hindi"
        value="Hindi"
        onChange={(e) => hendleCheck(e, "language")}
        checked={check?.language?.includes("Hindi")}
      />
      Hindi
      <Checkbox
        type="checkbox"
        name="Tamil"
        value="Tamil"
        onChange={(e) => hendleCheck(e, "language")}
        checked={check?.language?.includes("Tamil")}
      />
      Tamil
      <Checkbox
        type="checkbox"
        name="Urdu"
        value="Urdu"
        onChange={(e) => hendleCheck(e, "language")}
        checked={check?.language?.includes("Urdu")}
      />
      Urdu
      <br />
      <br />
      <button onClick={() => hendleSubmit()}>Submit</button>
    </div>
  );
}

export default Language;
