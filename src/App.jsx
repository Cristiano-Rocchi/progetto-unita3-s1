import "./App.css";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Gallery saga="avengers" />
      <Gallery saga="pokemon" />
    </div>
  );
}

export default App;
