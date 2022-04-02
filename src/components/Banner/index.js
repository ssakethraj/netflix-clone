import { useEffect, useState } from "react";
import {
  BASE_API_URL,
  BASE_IMAGE_URL,
  endpoints,
} from "../../services/CONSTANTS";
import "./styles.css";

export default function Banner() {
  const [bannerMovie, setBannerMovies] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${BASE_API_URL}${endpoints.discover}`).then(
        (res) => res.json()
      );
      const movies = data.results;
      const randomIndex = Math.floor(Math.random() * movies.length - 1);
      setBannerMovies(movies[randomIndex]);
    };
    fetchData();
  }, []);
  return bannerMovie ? (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "centern center",
        backgroundImage: `url(${BASE_IMAGE_URL}${bannerMovie.backdrop_path})`,
      }}
    >
      <div className="banner__content">
        <div className="banner__title">
          {bannerMovie.name || bannerMovie.originalName || bannerMovie.title}
        </div>
        <div className="banner_ctas">
          <button className="banner__cta">Play</button>
          <button className="banner__cta">Play</button>
        </div>
        <div className="banner__description">{bannerMovie.overview}</div>
      </div>
      <div className="banner__bottom_fade"></div>
    </header>
  ) : null;
}
