import React, { useEffect, useRef, useState } from "react";
import { BACKGROUND_IMAGE, OPEN_ROUTER_KEY, OPTIONS } from "../utils/constant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovieResults } from "../utils/gptSlice";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { AiOutlineSearch } from "react-icons/ai";

function GptSearch() {
  const prompt = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const searchMovieTMDB = async (movie) => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      OPTIONS
    );

    return data.data.results;
  };

  const handlePrompt = async () => {
    const userInput = prompt.current?.value;
    if (!userInput) return;

    setLoading(true);
    console.log(loading);
    const promptText = `Your task is to strictly return movie titles only.

Given the input: "${userInput}"

- If it's asking for one specific movie, return just the movie title like: Doctor
- If it's a general query (e.g. actor, theme, genre), return exactly 5 movie titles, comma-separated like: Movie1, Movie2, Movie3, Movie4, Movie5

❌ Do NOT include:
- Any explanation
- Quotes
- Numbering
- Extra text

✅ Only return the titles as plain text.`;

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "openai/gpt-3.5-turbo",
          messages: [{ role: "user", content: promptText }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPEN_ROUTER_KEY}`,
            "HTTP-Referer": "http://localhost:5173",
            "X-Title": "React GPT App",
          },
        }
      );

      const fetchedMovies = response.data.choices[0].message.content
        .trim()
        .split(",");

      const data = fetchedMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(data);
      console.log(tmdbResults);

      dispatch(
        addMovieResults({
          movieNames: fetchedMovies,
          movieResults: tmdbResults,
        })
      );
      setLoading(false);
    } catch (e) {
      console.error("API Error:", e.message);
      console.log(loading);

      setLoading(false);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handlePrompt();
    }
  };
  return (
    <>
      {loading && (
        <div className="absolute z-100 bg-black opacity-80 inset-0 flex items-center justify-center  ">
          <div className="text-white text-lg">
            <span className="loader"></span>
          </div>
        </div>
      )}

      <div
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative flex justify-center items-center py-16 px-4">
          <div className="flex   w-full max-w-[90%] sm:max-w-[50%] mx-auto mt-10 bg-black sm:p-4 p-2 gap-4 rounded-lg border border-white">
            <input
              className="w-full cursor-pointer sm:w-[40vw] px-4 py-2 text-white rounded-lg bg-transparent border border-white"
              type="text"
              ref={prompt}
              onKeyDown={handleEnter}
              placeholder="Enter your thoughts..."
            />
            <AiOutlineSearch
              onClick={handlePrompt}
              className="cursor-pointer  text-white text-5xl  sm:hidden"
            />

            <button
              onClick={handlePrompt}
              className="w-full cursor-pointer hidden sm:block sm:w-auto px-6 py-2 text-sm sm:text-base bg-green-700 text-white rounded-lg"
            >
              Search
            </button>
          </div>
        </div>

        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch;
