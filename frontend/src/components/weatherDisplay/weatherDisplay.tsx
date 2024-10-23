import { useWeatherContext } from "@/context/myWeatherContext";
import Image from "next/image";

const WeatherDisplay = () => {
  const { weatherData, notFound } = useWeatherContext()!;
  return (
    <div className="p-4 text-[#f0eff4] rounded-lg">
      {notFound ? (
        <div>
          <h1>404 Not Found</h1>
          <span>City or Country not found</span>
        </div>
      ) : (
        <div>
          <div className="relative w-[80%] mx-auto h-0 pb-[100%]">
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`}
              alt="Weather icon"
              layout="fill"
              objectFit="contain"
              className="object-cover"
            />
          </div>
          <h2 className="text-[4rem] font-[800] ">
            {weatherData?.main.temp}°C
          </h2>
          <h3 className="text-[1.3rem] capitalize">
            {weatherData?.weather[0].description}
          </h3>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
