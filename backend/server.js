const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

let advices = [
  {
    id: 1,
    quote: "Tough time never lasts, only tough people lasts",
    author: "Abula",
  },
];

// advices = JSON.parse(advices);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    results: advices.length,
    data: {
      advices,
    },
  });
});

app.post("/", (req, res) => {
  const newId = advices.length === 0 ? 1 : advices[advices.length - 1].id + 1;
  const newAdvice = Object.assign({ id: newId }, req.body);

  advices.push(newAdvice);

  res.status(201).json({
    status: "success",
    data: {
      advices,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`Visit local site http://localhost:${port}`);
});
