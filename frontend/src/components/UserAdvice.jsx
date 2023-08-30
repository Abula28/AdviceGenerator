import React, { useEffect, useState } from "react";
import "./UserAdvice.scss";
import axios from "axios";
import line from "/img/pattern-divider-desktop.png";

const userApi = "http://localhost:3000";

export const UserAdvice = () => {
  const [adviceData, setAdviceData] = useState([]);
  const [value, setValue] = useState({
    quote: "",
    author: "",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(userApi);
      setAdviceData(res.data.data.advices);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.quote.trim() !== "" && value.author.trim() !== "") {
      try {
        await axios.post(userApi, {
          quote: value.quote,
          author: value.author,
        });
        await getData();
      } catch (err) {
        console.log(err);
      }

      setValue({ quote: "", author: "" });
    }
  };

  return (
    <div className="user-advice-main">
      <h1 className="head">Add your advice</h1>

      <div className="advice-content">
        <form onSubmit={handleSubmit}>
          <label>
            Enter Your Quote
            <input
              onChange={handleChange}
              value={value.quote}
              name="quote"
              type="text"
            />
          </label>
          <label>
            Enter Your/Author Name
            <input
              onChange={handleChange}
              value={value.author}
              name="author"
              type="text"
            />
          </label>
          <button>Submit</button>
        </form>
        <div className="advices">
          {adviceData.map((advice, index) => (
            <div className="advice" key={index}>
              <p className="quote">{advice.quote}</p>
              <p className="author">Author: {advice.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
