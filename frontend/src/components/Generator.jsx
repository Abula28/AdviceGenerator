import React, { useEffect, useState } from "react";
import "./Generator.scss";
import axios from "axios";
import line from "/img/pattern-divider-desktop.png";
import dice from "/img/icon-dice.png";

const adviceUrl = "https://api.adviceslip.com/advice";
export const Generator = () => {
  const [advice, setAdvice] = useState([]);

  useEffect(() => {
    getAdviceData();
  }, []);
  const getAdviceData = async () => {
    try {
      const res = await axios.get(adviceUrl);
      setAdvice(res.data.slip);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="main-content">
      <div className="generator">
        <div className="generator-content">
          <p className="advice-number">Advice #{advice.id}</p>
          <p className="advice">{advice.advice}</p>
          <img src={line} alt="divider" />
          <button onClick={() => getAdviceData()}>
            <img src={dice} alt="dice" />
          </button>
        </div>
      </div>
    </div>
  );
};
