import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useFirestore } from "reactfire";
import { useDocumentDataWithSuspense } from "hooks";

const App: React.FC = () => {
  const db = useFirestore();

  const user = useDocumentDataWithSuspense(
    db.collection("users").doc("g1fY2NQMLWVgJy9wr889"),
    {
      idField: "id",
    }
  );

  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
