import { useState } from "react";
import "./App.css";
import { Generator } from "./components/Generator";
import { UserAdvice } from "./components/UserAdvice";

function App() {
  return (
    <>
      <Generator />
      <UserAdvice />
    </>
  );
}

export default App;
