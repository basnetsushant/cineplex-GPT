# Cineplex-GPT 🎬🍿

**Cineplex-GPT** is a Netflix-inspired web app powered by Google’s Gemini AI for smart movie recommendations. Built with React, Redux, and Tailwind CSS, it provides a dynamic, responsive interface where users can browse popular movies or search films using descriptive prompts.

---

## 🚀 Features

- 🔐 **User Authentication** – Seamless sign-in and sign-up functionality powered by Firebase Auth.
- 🎥 **Movie Browsing** – Explore extensive movie collections, including Now Playing, Popular, Top Rated, and Upcoming, all fetched from the TMDB API.
- 🤖 **Intelligent GPT Search** – Instead of a simple title search, describe what you want to watch and let Gemini suggest relevant films.
- ▶️ **Trailer Playback** – Watch movie trailers directly in the app.
- 🎯 **Fully Responsive** – A beautiful and consistent user experience across desktop, tablet, and mobile devices.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Redux Toolkit, React Router, Tailwind CSS
- **Backend & Services:** Firebase (Authentication), Google Gemini API (AI Search), TMDB API (Movie Data)

---

## ⚡ Getting Started

Follow these steps to run the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/basnetsushant/cineplex-GPT.git
   ```

2. Navigate into the project directory:

   ```bash
   cd cineplex-GPT
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Add environment variables**  
    Create a `.env` file in the root and add your keys:

   ```bash
    VITE_GEMINI_KEY="your_google_gemini_api_key"
    VITE_TMDB_KEY="your_tmdb_api_key"

    VITE_FIREBASE_KEY="your_firebase_api_key"
    VITE_FIREBASE_AUTH_DOMAIN="your-project.firebaseapp.com"
    VITE_FIREBASE_PROJECT_ID="your-project-id"
    VITE_FIREBASE_STORAGE_BUCKET="your-project.appspot.com"
    VITE_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
    VITE_FIREBASE_APP_ID="your-app-id"
   ```

5. **Run the app**
   ```bash
   npm run dev
   ```

Open http://localhost:5173 in your browser.
