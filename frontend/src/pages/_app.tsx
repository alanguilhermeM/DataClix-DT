import { ForecastProvider } from "@/context/myForecastContext";
import { FormProvider } from "@/context/myFormContext";
import { WeatherProvider } from "@/context/myWeatherContext";
import "@/styles/globals.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <FormProvider>
        <ForecastProvider>
          <Component {...pageProps} />
        </ForecastProvider>
      </FormProvider>
    </WeatherProvider>
  );
}

export default MyApp;
