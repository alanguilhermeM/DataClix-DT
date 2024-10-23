const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const setDate = (): void => {
  const dayEl: Element | null = document.querySelector("#default_day");
  const dateEl = document.querySelector("#default_date");

  const day = new Date();
  const dayName = days[day.getDay()];

  if (dayEl !== null && dateEl !== null) {
    dayEl.textContent = dayName;
  }

  const month = day.toLocaleString("default", { month: "long" });
  const date = day.getDate();
  const year = day.getFullYear();

  if (dateEl !== null) {
    dateEl.textContent = month + " " + date + " " + year;
  }
};

const foreCastDay = (frContent: { dt_txt: string | number | Date; }): string => {
  const day = new Date(frContent.dt_txt);
  const dayName = days[day.getDay()];
  const splitDay = dayName.split("", 3);
  const joinDay = splitDay.join("");

  return joinDay;
};

export {setDate, foreCastDay};
