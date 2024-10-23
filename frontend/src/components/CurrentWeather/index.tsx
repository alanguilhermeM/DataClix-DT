// import Image from "next/image";
import setDate from "@/utils/dateScript";
import { useEffect } from "react";

const CurrentWeather: React.FC = () => {

  useEffect(() => {
    setDate()
  });

  return (
    <div className="grid grid-cols-[3fr_4fr] gap-4">
      <div className="rounded-tl-[25px] rounded-bl-[25px] bg-img bg-center bg-no-repeat bg-cover relative transform-[scale(1.03)_perspective(200px)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[linear-gradient(135deg,#0d47a1_10%,#0d47a1_100%)] before:opacity-50 before:z-[-1] before:rounded-[25px]">
        <div className="p-[1.5rem] text-center">
          <h2 className="text-[3rem] font-bold" id="default_day" />
          <span id="default_date" />
          <div className="">
            <img
              src="https://openweathermap.org/img/wn/10d@4x.png"
              alt="a"
              className="w-[80%] object-cover mx-auto"
            />
            <h2 className="text-[4rem] font-[800] ">22°C</h2>
            <h3 className="text-[1.3rem] capitalize">Overwelming Clounds</h3>
          </div>
        </div>
      </div>
      <div className="p-[1.5rem]">
        <form className="m-[1.5rem_0] relative">
          <input
            id="input_field"
            type="text"
            placeholder="Search a location"
            className="w-[84%] outline-none bg-transparent border-solid border border-[#37474f] rounded-[5px] p-[0.95rem_0.7rem] text-[#fff] text-[1rem]"
          />
          <button
            id="btn_search"
            type="submit"
            className="absolute top-0 right-0 rounded-tr-[5px] rounded-br-[5px] p-[1rem_0.7rem] outline-none border-none bg-[#5c6bc0] text-[#fff] cursor-pointer"
          >
            Search
          </button>
        </form>

        <div className="  ">
          <div className="flex justify-between p-[0.4rem_0]">
            <p className="font-semibold">NAME</p>
            <span>UNITED STATES</span>
          </div>
          <div className="flex justify-between p-[0.4rem_0]">
            <p className="font-semibold">TEMP</p>
            <span>23°C</span>
          </div>
          <div className="flex justify-between p-[0.4rem_0]">
            <p className="font-semibold">HUMIDITY</p>
            <span>2%</span>
          </div>
          <div className="flex justify-between p-[0.4rem_0]">
            <p className="font-semibold">WIND SPEED</p>
            <span>2.9 Km/h</span>
          </div>
        </div>

        <div>
          <ul className="flex justify-between items-center list-none m-[3rem_0rem] shadow-[0_5px_15px_rgba(0,0,0,0.35)]">
            <li className="flex flex-col items-center rounded-2xl p-[0.5rem] transition-all duration-300 ease-in hover:scale-[1.1] hover:bg-[#fff] hover:text-[#232931] hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] cursor-pointer">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                className="w-1/2 object-cover"
              />
              <span>Seg</span>
              <span>23°C</span>
            </li>
            <li className="flex flex-col items-center rounded-2xl p-[0.5rem] transition-all duration-300 ease-in hover:scale-[1.1] hover:bg-[#fff] hover:text-[#232931] hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] cursor-pointer">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                className="w-1/2 object-cover"
              />
              <span>Ter</span>
              <span>23°C</span>
            </li>
            <li className="flex flex-col items-center rounded-2xl p-[0.5rem] transition-all duration-300 ease-in hover:scale-[1.1] hover:bg-[#fff] hover:text-[#232931] hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] cursor-pointer">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                className="w-1/2 object-cover"
              />
              <span>Qua</span>
              <span>23°C</span>
            </li>
            <li className="flex flex-col items-center rounded-2xl p-[0.5rem] transition-all duration-300 ease-in hover:scale-[1.1] hover:bg-[#fff] hover:text-[#232931] hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] cursor-pointer">
              <img
                src="https://openweathermap.org/img/wn/10d@2x.png"
                alt=""
                className="w-1/2 object-cover"
              />
              <span>Qui</span>
              <span>23°C</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
