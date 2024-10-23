import { WeatherData } from "@/interfaces/weatherTypes";
import { createContext, useCallback, useContext, useState } from "react";

interface MyContextData {
    weatherData: WeatherData | null;
    handleWeather: (weather: WeatherData) => void;
    notFound: boolean;
    handleNotFound: (notFound: boolean) => void;
}

const WeatherContext = createContext<MyContextData | undefined>(undefined)

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [notFound, setNotFound] = useState<boolean>(false);

    const handleWeather = useCallback((weather: WeatherData) => {
        setWeatherData(weather);
    }, []);

    const handleNotFound = useCallback((notFound: boolean) => {
        setNotFound(notFound)
    }, []);

    return <WeatherContext.Provider value={{ weatherData, handleWeather, notFound, handleNotFound}}>{children}</WeatherContext.Provider>;
}

export const useWeatherContext = () => useContext(WeatherContext);