import { useForecastContext } from "@/context/myForecastContext";
import { useFormContext } from "@/context/myFormContext";
import { useWeatherContext } from "@/context/myWeatherContext";
import { fetchForeCastData, fetchWeatherData } from "@/service/weatherService";

const Form: React.FC = () => {
  const { formData, handleForm } = useFormContext()!;
  const { handleWeather, handleNotFound } = useWeatherContext()!;
  const { handleForecast } = useForecastContext()!;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleForm({ city: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = await fetchWeatherData(formData.city);

    if (!data) {
      handleNotFound(true);
    } else {
      handleNotFound(false);
      handleWeather(data);
      const foreData = await fetchForeCastData(data.coord.lat, data.coord.lon);
      handleForecast(foreData);
    }

    handleForm({ city: "" });
  };

  return (
    <form className="m-[1.5rem_0] relative" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search a location"
        className="w-[84%] outline-none bg-gray-900 border-solid border border-[#37474f] rounded-[5px] p-[0.95rem_0.7rem] text-[#fff] text-[1rem] dark:bg-white dark:border-gray-600 dark:text-black"
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
  );
};

export default Form;
