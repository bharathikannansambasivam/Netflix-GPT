import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

function MovieCard({ poster, title, id }) {
  if (!poster) return null;

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className="min-w-[170px] max-w-[170px] transition-transform transform  hover:scale-105"
    >
      <img className="" src={IMG_CDN_URL + poster} alt="Movie Poster" />
      <h4 className="text-white mt-2">{title}</h4>
    </div>
  );
}

export default MovieCard;
