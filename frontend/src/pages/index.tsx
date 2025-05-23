import React from "react";
import { useEffect } from "react";
import { fetchForeCastData, fetchWeatherData } from "@/service/weatherService";
import { setDate, foreCastDay } from "@/utils/dateScript";
import { useWeatherContext } from "@/context/myWeatherContext";
import { useForecastContext } from "@/context/myForecastContext";
import WeatherDisplay from "@/components/weatherDisplay/weatherDisplay";
import Form from "@/components/form/form";
import MeteorologicalData from "@/components/meteorologicalData/meteorologicalData";
import Forecast from "@/components/forecast/forecast";
import ThemeSwitcher from "@/components/theme-switcher";
import { GetServerSideProps } from "next";
import { ForeCastData, WeatherData } from "@/interfaces/weatherTypes";

interface HomeProps {
  weatherData: WeatherData;
  forecastData: ForeCastData[];
}

const Home: React.FC<HomeProps> = ({ weatherData, forecastData }) => {
  const { handleWeather } = useWeatherContext()!;
  const { handleForecast, handleDays } = useForecastContext()!;

  useEffect(() => {
    setDate();
    
    if (weatherData) {
      handleWeather(weatherData);
    }
    if (forecastData) {
      handleForecast(forecastData);

      const daysArray = forecastData.map(
        (fore: { dt_txt: string | number | Date }) => foreCastDay(fore)
      );
      handleDays(daysArray);
    }
  }, [weatherData, forecastData]);


  return (
    <main className="lg:max-w-[800px] lg:min-w-[800px] w-full max-md:h-[600px] bg-[#232931] text-[#fff] rounded-[25px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
      <header className="md:grid md:grid-cols-[3fr_4fr] md:gap-0">
        <section className="rounded-tl-[25px] max-md:rounded-t-[25px] md:rounded-bl-[25px] bg-img bg-center bg-no-repeat bg-cover relative transform-[scale(1.03)_perspective(200px)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(135deg,#0d47a1_10%,#0d47a1_100%)] before:opacity-50 before:z-[-1] before:rounded-[25px]">
          <div className="p-[1.5rem] text-center">
            <h2 className="text-[3rem] font-bold" id="default_day" />
            <time id="default_date" aria-live="polite" />
            <WeatherDisplay />
          </div>
        </section>
        <section className="p-[1.5rem] bg-[#f0eff4] md:rounded-r-[25px] dark:bg-[#232931]">
          <Form />
          <MeteorologicalData />
          <Forecast />
          <div className="max-md:flex max-md:justify-center">
            <ThemeSwitcher />
          </div>
        </section>
      </header>
    </main>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async (_context) => {
  const weatherData = await fetchWeatherData("São João Del Rei");

  let forecastData = null;
  if (weatherData?.coord) {
    forecastData = await fetchForeCastData(
      weatherData.coord.lat,
      weatherData.coord.lon
    );
  }

  return {
    props: {
      weatherData,
      forecastData,
    },
  };
};

export default Home;
