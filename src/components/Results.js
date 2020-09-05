import React, { useState, useEffect } from "react";
import "../css/results.css";
import VideoCard from "../components/VideoCard";
import axios from "../modules/axios";
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
      console.log(response.data.results);
      return response;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
