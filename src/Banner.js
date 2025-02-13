import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "./Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const baseURL = "https://api.themoviedb.org/3";
      const url = `${baseURL}${requests.fetchNetflixOriginals}`;

      console.log("Fetching from URL:", url); // Debugging URL

      try {
        const request = await axios.get(url);
        console.log("API Response:", request.data); // Debugging response

        if (request.data.results && request.data.results.length > 0) {
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length) // Fixed random index
            ]
          );
        } else {
          console.warn("No movies found in API response.");
        }
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
        if (error.response) {
          console.error("Response Data:", error.response.data);
          console.error("Status Code:", error.response.status);
        }
      }
    }

    fetchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div>
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test descriptionThis is a test descriptionThis is a test
          descriptionThis is a test descriptionThis is a test descriptionThis is
          a test description1`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
