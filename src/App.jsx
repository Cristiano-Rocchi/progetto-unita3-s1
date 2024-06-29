import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Gallery from "./components/gallery";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery saga="pokemon" />
      <Gallery saga="dragon-ball" />
      <Gallery saga="harry-potter" />
    </div>
  );
}

export default App;
