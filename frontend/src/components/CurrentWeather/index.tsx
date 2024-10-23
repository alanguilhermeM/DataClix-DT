import { useEffect } from "react";
import { fetchForeCastData, fetchWeatherData } from "@/service/weatherService";
import { setDate, foreCastDay } from "@/utils/dateScript";
import { useWeatherContext } from "@/context/myWeatherContext";
import WeatherDisplay from "../weatherDisplay/weatherDisplay";
import { useForecastContext } from "@/context/myForecastContext";
import Form from "../form/form";
import MeteorologicalData from "../meteorologicalData/meteorologicalData";
import Forecast from "../forecast/forecast";

const CurrentWeather: React.FC = () => {
  const { handleWeather } = useWeatherContext()!;
  const { handleForecast, handleDays } = useForecastContext()!;

  useEffect(() => {
    setDate();

    const loadWeatherAndForeData = async () => {
      const data = await fetchWeatherData("São João Del Rei");
      handleWeather(data);
      if (data?.coord) {
        const foreData = await fetchForeCastData(
          data.coord.lat,
          data.coord.lon
        );
        handleForecast(foreData);

        const daysArray = foreData.map(
          (fore: { dt_txt: string | number | Date }) => foreCastDay(fore)
        );
        handleDays(daysArray);
      }
    };

    loadWeatherAndForeData();
  }, []);

  return (
    <div className="grid grid-cols-[3fr_4fr] gap-4">
      <div className="rounded-tl-[25px] rounded-bl-[25px] bg-img bg-center bg-no-repeat bg-cover relative transform-[scale(1.03)_perspective(200px)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(135deg,#0d47a1_10%,#0d47a1_100%)] before:opacity-50 before:z-[-1] before:rounded-[25px]">
        <div className="p-[1.5rem] text-center">
          <h2 className="text-[3rem] font-bold" id="default_day" />
          <span id="default_date" />
          <div>
            <WeatherDisplay />
          </div>
        </div>
      </div>
      <div className="p-[1.5rem]">
        <Form />
        <MeteorologicalData />
        <Forecast />
      </div>
    </div>
  );
};

export default CurrentWeather;
