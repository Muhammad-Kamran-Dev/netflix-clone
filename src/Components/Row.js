import React from "react";
import "./styles/Row.css";
import { useEffect, useState } from "react";
import axios from "../axios";
import imgNotFound from "../assets/images/page_not_found.png";
import { imageBaseUrl } from "../axios";
import YouTube from "react-youtube";
import {toast } from 'react-toastify';
const movieTrailer = require("movie-trailer");

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const getData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    getData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    const title=movie?.original_title||movie?.name;
    if(trailerUrl) return  settrailerUrl('');
      movieTrailer( title, {id: true} )
      .then( response =>{
        settrailerUrl(response)
         !response && toast.warning("No trailer found")}
      ).catch(err=>{
      })
  };
  return (
    <div className="row">
      <h1 className="title">{title} </h1>
      <div className="row_posters">
        {movies.map((movie) => {
          return (
            <img
              onClick={() => {
                handleClick(movie);
              }}
              className={`row_poster ${isLargeRow && "row_poster_large"}`}
              key={movie.id}
              src={`${
                movie.backdrop_path
                  ? `${imageBaseUrl}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`
                  : movie.poster_path
                  ? `${imageBaseUrl}${movie.poster_path}`
                  : imgNotFound
              }`}
              alt={movie.title}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
