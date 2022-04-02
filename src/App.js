import Navbar from "./components/Navbar";
import "./App.css";
import Banner from "./components/Banner";
import MoviesList from "./components/MoviesList";
import { endpoints } from "./services/CONSTANTS";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <MoviesList title="Trending" endpoint={endpoints.trending} />
      <MoviesList title="Top rated" endpoint={endpoints.topRated} />
      <MoviesList title="Action" endpoint={endpoints.actionGenre} />
      <MoviesList title="Horror" endpoint={endpoints.horrorGenre} />
    </div>
  );
}

export default App;
