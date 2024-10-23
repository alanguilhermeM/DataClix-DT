import { useForecastContext } from "@/context/myForecastContext";
import { ForeCastData } from "@/interfaces/weatherTypes";
import Image from "next/image";

const Forecast: React.FC = () => {
  const { foreCast, days } = useForecastContext()!;

  return (
    <div>
      {foreCast && foreCast.length > 0 && (
        <ul className="flex justify-between bg-gray-900 items-center list-none m-[3rem_0rem] rounded-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] ">
          {foreCast.slice(0, 4).map((forecast: ForeCastData, index: number) => (
            <li
              key={index}
              // Adicionadas classes para mudar a cor de fundo e do texto no hover
              className="flex flex-col items-center rounded-2xl p-[0.5rem] transition-all duration-300 ease-in hover:scale-[1.1] hover:bg-white text-white hover:text-gray-900 dark:text-[#f0eff4] hover:dark:text-gray-900 cursor-pointer"
            >
              <div className="relative w-[95%] h-0 pb-[100%]">
                <Image
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
                  alt={`Weather icon for ${forecast.weather[0].description}`}
                  layout="fill"
                  objectFit="contain"
                  className="object-cover"
                />
              </div>
              <span>{days[index]}</span>
              <span>{Math.round(forecast.main.temp - 273.15)}°C</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Forecast;
