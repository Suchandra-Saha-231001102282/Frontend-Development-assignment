function WeatherCard({ weather }) {

  if (!weather) {
    return null;
  }

  const sunrise = new Date(
    weather.sys.sunrise * 1000
  ).toLocaleTimeString();

  const sunset = new Date(
    weather.sys.sunset * 1000
  ).toLocaleTimeString();

  const iconUrl =
    `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">

      <div className="weather-location">
        <h2>
          {weather.name}, {weather.sys.country}
        </h2>

        <p>
          {weather.weather[0].description}
        </p>
      </div>

      <img
        src={iconUrl}
        alt={weather.weather[0].description}
        className="weather-icon"
      />

      <div className="temperature">
        {Math.round(weather.main.temp)}°C
      </div>

      <div className="weather-info">

        <div className="info-box">
          <span>💧</span>
          <strong>Humidity</strong>
          <p>{weather.main.humidity}%</p>
        </div>

        <div className="info-box">
          <span>💨</span>
          <strong>Wind Speed</strong>
          <p>{weather.wind.speed} m/s</p>
        </div>

        <div className="info-box">
          <span>🌅</span>
          <strong>Sunrise</strong>
          <p>{sunrise}</p>
        </div>

        <div className="info-box">
          <span>🌇</span>
          <strong>Sunset</strong>
          <p>{sunset}</p>
        </div>

      </div>

    </div>
  );
}

export default WeatherCard;