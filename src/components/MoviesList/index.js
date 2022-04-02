import { useEffect, useState } from "react";
import { BASE_API_URL, BASE_IMAGE_URL } from "../../services/CONSTANTS";
import "./styles.css";

export default function MoviesList(props) {
  const { title, endpoint } = props;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(`${BASE_API_URL}${endpoint}`).then((res) =>
        res.json()
      );
      setMovies(data.results);
    }
    fetchData();
  }, [endpoint]);
  return (
    <div className="list">
      <h2 className="list__title">{title}</h2>
      <div className="list__movies">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              alt={movie.name}
              className="list__movie"
              src={`${BASE_IMAGE_URL}${movie.poster_path}`}
            />
          );
        })}
      </div>
    </div>
  );
}
