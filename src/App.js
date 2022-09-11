import "./styles.css";
import logo from "./logonamesmall.svg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary defaultKeyword="sci-fi" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            <a
              className="githublink "
              href="https://github.com/KatGrenade/ReactDictionary"
            >
              Open-source code
            </a>{" "}
            by Ola
          </small>
        </footer>
      </div>
    </div>
  );
}
