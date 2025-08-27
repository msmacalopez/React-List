import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(<MyList />);

function MyList() {
  return (
    <main>
      <img src="./src/assets/react.png" width="60px" alt="React Logo" />
      <h1>My first React list</h1>
      <ul>
        <li>React was released in 2013</li>
        <li>Created by Jordan Walker</li>
        <li>Over 200k downloads</li>
        <li>mainted by Meta</li>
        <li>open source</li>
      </ul>
    </main>
  );
}
