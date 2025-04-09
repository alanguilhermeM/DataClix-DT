import { useWeatherContext } from "@/context/myWeatherContext";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const WeatherDisplay = () => {
  const { weatherData, notFound } = useWeatherContext()!;

  if (weatherData === null) {
    return (
      <section className="p-4 text-[#f0eff4] rounded-lg flex justify-center">
        <header className="h-[390.03px] content-center">
          <ClipLoader color="#6E07F3" size={100} />
        </header>
      </section>
    );
  } else if (notFound === true) {
    return (
      <section className="p-4 text-[#f0eff4] rounded-lg">
      <article aria-labelledby="weather-info">
        <section className="w-[80%] mx-auto h-0 pb-[100%]">
          <ExclamationTriangleIcon className="relative top-[60px] w-32 h-32 text-white mx-auto" />
        </section>
        <header>
          <h2 className="text-[3rem] font-[600]" aria-live="polite">
            Not Found
          </h2>
        </header>
      </article>
    </section>
    );
  }

  return (
    <section className="p-4 text-[#f0eff4] rounded-lg">
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
    </section>
  );
};

export default WeatherDisplay;
