export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";
export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_medium.jpg";

export const OPTIONS = {
  method: "GET",
  params: { language: "en-US", page: "1" },
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const OPEN_ROUTER_KEY = import.meta.env.VITE_OPEN_ROUTER_KEY;

export const MOVIE_SUGGESTION_PROMPT = (userInput) => `
You are an AI assistant built into a movie recommendation web application powered by React and TMDB API.

Your task is to return **only relevant movie titles** based on user queries, and your output must help fetch movie details from TMDB.

User input: "${userInput}"

🔍 What you must understand:
- Users might search using actor/actress names, roles like "hero" or "heroine", or combinations (e.g. "Vijay and Trisha movies").
- Users might not mention the exact title — extract likely movie titles based on pairing, actors, themes, or partial names.
- If user mentions "Vijay and Trisha", assume they are referring to movies like "Ghilli", "GOAT", or "Kuruvi".
- If the query seems unrelated, DO NOT guess. Return no titles.

📌 Rules:
- Return either 1 title (for specific query) or 5 (for general queries).
- Return only **plain comma-separated movie titles**.
- No numbering, no extra words, no explanation.
- Do NOT include “I’m sorry” or say “I don't know.”

💡 Examples:

Input: "hero name vijay heroine name trisha recent movie"  
Output: GOAT, Ghilli, Kuruvi, Aathi, Thirupaachi

Input: "romantic tamil movies 2023"  
Output: Love Today, Dada, Thiruchitrambalam, Sita Ramam, Varisu

Input: "ajith movies"  
Output: Veeram, Vedalam, Mankatha, Thunivu, Yennai Arindhaal

This is a movie discovery app. Only return actual movie titles.`;
