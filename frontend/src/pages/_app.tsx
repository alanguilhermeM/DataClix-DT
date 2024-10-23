import { ForecastProvider } from "@/context/myForecastContext";
import { FormProvider } from "@/context/myFormContext";
import { WeatherProvider } from "@/context/myWeatherContext";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/globals.css";
import { AppProps } from "next/app";
// import { ThemeProvider } from "@/components/theme-provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WeatherProvider>
        <FormProvider>
          <ForecastProvider>
            <Component {...pageProps} />
          </ForecastProvider>
        </FormProvider>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default MyApp;
