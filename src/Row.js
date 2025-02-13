import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const baseURL = "https://api.themoviedb.org/3";
      const url = `${baseURL}${fetchUrl}`;
      console.log("Fetching from URL:", url); // Debugging

      try {
        const request = await axios.get(url);
        console.log("API Response:", request.data); // Debugging
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        if (error.response) {
          console.error("Response Data:", error.response.data);
          console.error("Status Code:", error.response.status);
        }
      }
    }

    fetchData();
  }, [fetchUrl]);

  console.log("Movies:", movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id} // Always include a unique key when mapping elements
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title} // Some movies have `title` instead of `name`
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
