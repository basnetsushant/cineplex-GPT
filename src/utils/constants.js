export const LOGO =
  "https://fontmeme.com/permalink/251106/47cca2177862d436cbd5634c67af44e1.png";
export const AVATAR =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3SFVmXoYNHl2D22fjIEAwMuEqrbDYiUUwsWi6-K0AEnh9QZzAhgaOayZ6hFG4Eh_1m4&usqp=CAU";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",

    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "nepali",
    name: "Nepali",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
  {
    identifier: "french",
    name: "French",
  },
];

export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY;
