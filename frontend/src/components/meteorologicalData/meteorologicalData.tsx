import { useWeatherContext } from "@/context/myWeatherContext";

const MeteorologicalData: React.FC = () => {
  const { weatherData } = useWeatherContext()!;
  return (
    <section
      className="p-4 text-black dark:text-white rounded-lg"
      aria-labelledby="meteorological-data-title"
    >
      <article className="flex justify-between p-[0.4rem_0]">
        <h3 className="font-semibold">NAME</h3>
        <p>
          <em>
            {weatherData?.name} - {weatherData?.sys.country}
          </em>
        </p>
      </article>
      <article className="flex justify-between p-[0.4rem_0]">
        <h3 className="font-semibold">TEMP</h3>
        <p>
          <em>{weatherData?.main.temp}°C</em>
        </p>
      </article>
      <article className="flex justify-between p-[0.4rem_0]">
        <h3 className="font-semibold">HUMIDITY</h3>
        <p>
          <em>{weatherData?.main.humidity}%</em>
        </p>
      </article>
      <article className="flex justify-between p-[0.4rem_0]">
        <h3 className="font-semibold">WIND SPEED</h3>
        <p>
          <em>{weatherData?.wind.speed} Km/h</em>
        </p>
      </article>
    </section>
  );
};

export default MeteorologicalData;
