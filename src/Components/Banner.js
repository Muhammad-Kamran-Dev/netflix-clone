import React, { useEffect, useState } from "react";
import axios from "../axios";
import { getRandomNumberBetween } from "../utils";
import { imageBaseUrl } from "../axios";
import "./styles/Banner.css";
function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(fetchUrl);
      const length = request.data.results.length;
      setMovie(request.data.results[getRandomNumberBetween(0, length)]);
      return request;
    };
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <header
      className="banner banner_image"
      style={
        movie?.backdrop_path && {
          backgroundImage: `url(${imageBaseUrl}${movie?.backdrop_path})`,
          backgroundSize: "cover",
        }
      }
    >
      <div className="banner-content">
        <div className="banner-title">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <div className="banner-btns">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <div className="banner-description">
          <h3>
            {" "}
            {movie?.overview && movie?.overview.length > 150
              ? movie?.overview.slice(0, 140) + " ..."
              : movie?.overview}
          </h3>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
