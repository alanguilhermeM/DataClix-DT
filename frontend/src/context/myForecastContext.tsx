// import { FormData } from "@/interfaces/weatherTypes";
import { ForeCastData } from "@/interfaces/weatherTypes";
import { createContext, useCallback, useContext, useState } from "react";

interface MyContextData {
    foreCast: ForeCastData[];
    handleForecast: (foreCast: ForeCastData[]) => void;
    days: string[];
    handleDays: (days: string[]) => void;
}

const ForecastContext = createContext<MyContextData | undefined>(undefined)

export const ForecastProvider = ({ children }: { children: React.ReactNode }) => {
    const [foreCast, setForeCast] = useState<ForeCastData[]>([]);
    const [days, setDays] = useState<string[]>([]);

    const handleForecast = useCallback((foreCast: ForeCastData[]) => {
        setForeCast(foreCast);
    }, []);

    const handleDays = useCallback((days: string[]) => {
        setDays(days);
    }, []);


    return <ForecastContext.Provider value={{ foreCast, handleForecast, days, handleDays }}>{children}</ForecastContext.Provider>;
}

export const useForecastContext = () => useContext(ForecastContext);