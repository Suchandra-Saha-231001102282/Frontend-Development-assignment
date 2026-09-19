import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Footer from "./components/Footer";

const API_KEY =
  import.meta.env.VITE_WEATHER_API_KEY;

function App() {

  const [city, setCity] = useState("Kolkata");

  const [weather, setWeather] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const fetchWeather = async () => {

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(
          "City not found. Please check the city name."
        );
      }

      const data = await response.json();

      setWeather(data);

    } catch (error) {

      setWeather(null);

      setError(error.message);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="app">

      <Header />

      <main className="main-content">

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={fetchWeather}
        />

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading weather...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading && !error && weather && (
          <WeatherCard
            weather={weather}
          />
        )}

      </main>

      <Footer />

    </div>
  );
}

export default App;