import { useWeatherContext } from "@/context/myWeatherContext";

const MeteorologicalData: React.FC = () => {
  const { weatherData } = useWeatherContext()!;
  return (
    <div className="p-4 text-black dark:text-white rounded-lg"> {/* Adicionadas classes para fundo e texto */}
      <div className="flex justify-between p-[0.4rem_0]">
        <p className="font-semibold">NAME</p>
        <span>
          {weatherData?.name} - {weatherData?.sys.country}
        </span>
      </div>
      <div className="flex justify-between p-[0.4rem_0]">
        <p className="font-semibold">TEMP</p>
        <span>{weatherData?.main.temp}°C</span>
      </div>
      <div className="flex justify-between p-[0.4rem_0]">
        <p className="font-semibold">HUMIDITY</p>
        <span>{weatherData?.main.humidity}%</span>
      </div>
      <div className="flex justify-between p-[0.4rem_0]">
        <p className="font-semibold">WIND SPEED</p>
        <span>{weatherData?.wind.speed} Km/h</span>
      </div>
    </div>
  );
};

export default MeteorologicalData;
