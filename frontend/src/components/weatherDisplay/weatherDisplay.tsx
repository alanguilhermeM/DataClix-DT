import { useWeatherContext } from "@/context/myWeatherContext";
import Image from "next/image";

const WeatherDisplay = () => {
  const { weatherData, notFound } = useWeatherContext()!;
  return (
    <section className="p-4 text-[#f0eff4] rounded-lg">
      {notFound ? (
        <header>
          <h1>404 Not Found</h1>
          <p>City or Country not found</p>
        </header>
      ) : (
        <article aria-labelledby="weather-info">
          <section className="relative w-[80%] mx-auto h-0 pb-[100%]">
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`}
              alt={`Weather icon showing ${weatherData?.weather[0].description}`}
              layout="fill"
              objectFit="contain"
              className="object-cover"
            />
          </section>
          <header>
            <h2 className="text-[4rem] font-[800]" aria-live="polite">
              {weatherData?.main.temp}°C
            </h2>
            <h3 className="text-[1.3rem] capitalize" aria-live="polite">
              {weatherData?.weather[0].description}
            </h3>
          </header>
        </article>
      )}
    </section>
  );
};

export default WeatherDisplay;
