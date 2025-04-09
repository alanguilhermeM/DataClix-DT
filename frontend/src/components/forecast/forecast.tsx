import { useForecastContext } from "@/context/myForecastContext";
import { ForeCastData } from "@/interfaces/weatherTypes";
import Image from "next/image";
import { PropagateLoader } from "react-spinners";

const Forecast: React.FC = () => {
  const { foreCast, days } = useForecastContext()!;

  return (
    <article aria-labelledby="forecast-data">
      {foreCast && foreCast.length > 0 ? (
        <ul className="flex justify-between bg-gray-900 items-center list-none m-[3rem_0rem] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] ">
          {foreCast.slice(0, 4).map((forecast: ForeCastData, index: number) => (
            <li
              key={index}
              // Adicionadas classes para mudar a cor de fundo e do texto no hover
              className="flex flex-col items-center rounded-2xl p-[0.5rem] transition-all duration-300 ease-in hover:scale-[1.1] hover:bg-white text-white hover:text-gray-900 dark:text-[#f0eff4] hover:dark:text-gray-900 cursor-pointer"
            >
              <section className="relative w-[95%] h-0 pb-[100%]">
                <Image
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
                  alt={`Weather icon for ${forecast.weather[0].description}`}
                  layout="fill"
                  objectFit="contain"
                  className="object-cover"
                />
              </section>
              <p>{days[index]}</p>
              <p
                aria-label={`Temperature: ${Math.round(
                  forecast.main.temp - 273.15
                )} degrees Celsius`}
              >
                {Math.round(forecast.main.temp - 273.15)}°C
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="bg-gray-900 list-none m-[3rem_0rem] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
            <li
              // Adicionadas classes para mudar a cor de fundo e do texto no hover
              className="flex flex-col items-center justify-center rounded-2xl p-[0.5rem] transition-all duration-300 ease-in hover:scale-[1.1] hover:bg-white text-white hover:text-gray-900 dark:text-[#f0eff4] hover:dark:text-gray-900 cursor-pointer h-[99.75px]"
            >
              <PropagateLoader color="#6E07F3" size={10} />
            </li>
        </ul>
      )}
    </article>
  );
};

export default Forecast;
