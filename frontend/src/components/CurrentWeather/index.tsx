// import Image from "next/image";
// import { api } from "@/service/api";
import { fetchForeCastData, fetchWeatherData } from "@/service/weatherService";
import { setDate, foreCastDay } from "@/utils/dateScript";
import { useEffect, useState } from "react";

const CurrentWeather: React.FC = () => {
  const [formData, setFormData] = useState({
    city: "",
  });
  const [weatherData, setWeatherData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [foreCast, setForeCast] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
    setDate();

    const loadWeatherAndForeData = async () => {
      const data = await fetchWeatherData("São João Del Rei");
      setWeatherData(data);
      if (data?.coord) {
        const foreData = await fetchForeCastData(
          data.coord.lat,
          data.coord.lon
        );
        setForeCast(foreData);
        
        const daysArray = foreData.map((fore: { dt_txt: string | number | Date; }) => foreCastDay(fore));
        setDays(daysArray);
      }
    };
    console.log(weatherData)
    loadWeatherAndForeData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData({ city: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await fetchWeatherData(formData.city);

    if (!data) {
      setNotFound(true);
      console.log("erro");
    } else {
      setNotFound(false);
      setWeatherData(data);
      const foreData = await fetchForeCastData(data.coord.lat, data.coord.lon);
      setForeCast(foreData);
    }
    
    setFormData({ city: "" });
  };

  return (
    <div className="grid grid-cols-[3fr_4fr] gap-4">
      <div className="rounded-tl-[25px] rounded-bl-[25px] bg-img bg-center bg-no-repeat bg-cover relative transform-[scale(1.03)_perspective(200px)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(135deg,#0d47a1_10%,#0d47a1_100%)] before:opacity-50 before:z-[-1] before:rounded-[25px]">
        <div className="p-[1.5rem] text-center">
          <h2 className="text-[3rem] font-bold" id="default_day" />
          <span id="default_date" />
          <div className="">
            {notFound ? (
              <div>
                <h1>404 Not Found</h1>
                <span>City or Country not found</span>
              </div>
            ) : (
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@4x.png`}
                  alt="a"
                  className="w-[80%] object-cover mx-auto"
                />
                <h2 className="text-[4rem] font-[800] ">
                  {weatherData?.main.temp}°C
                </h2>
                <h3 className="text-[1.3rem] capitalize">
                  {weatherData?.weather[0].description}
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-[1.5rem]">
        <form className="m-[1.5rem_0] relative" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search a location"
            className="w-[84%] outline-none bg-transparent border-solid border border-[#37474f] rounded-[5px] p-[0.95rem_0.7rem] text-[#fff] text-[1rem]"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 rounded-tr-[5px] rounded-br-[5px] p-[1rem_0.7rem] outline-none border-none bg-[#5c6bc0] text-[#fff] cursor-pointer"
          >
            Search
          </button>
        </form>

        <div className="  ">
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

        <div>
          {foreCast && foreCast.length > 0 && (
            <ul className="flex justify-between items-center list-none m-[3rem_0rem] shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
              {foreCast.slice(0, 4).map((forecast, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center rounded-2xl p-[0.5rem] transition-all duration-300 ease-in hover:scale-[1.1] hover:bg-[#fff] hover:text-[#232931] hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] cursor-pointer"
                >
                  <img
                    src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`}
                    alt={`Weather icon for ${forecast.weather[0].description}`}
                    className="w-1/2 object-cover"
                  />
                  <span>{days[index]}</span>
                  <span>{Math.round(forecast.main.temp - 273.15)}°C</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
