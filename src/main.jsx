import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

function Header() {
  return (
    <header>
      <img src="./src/assets/react.png" width="60px" alt="React Logo" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>My first React list</h1>
      <ul className="main-list">
        <li>React was released in 2013</li>
        <li>Created by Jordan Walker</li>
        <li>Over 200k downloads</li>
        <li>mainted by Meta</li>
        <li>open source</li>
      </ul>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small> &copy; 2025 Macarena</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
