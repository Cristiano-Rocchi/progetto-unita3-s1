import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.scss";
import Gallery from "./components/gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-dark text-light">
      <Header />
      <Gallery saga="pokemon" />
      <Gallery saga="dragon-ball" />
      <Gallery saga="harry-potter" />
      <Footer />
    </div>
  );
}

export default App;
