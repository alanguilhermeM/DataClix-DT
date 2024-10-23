const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const setDate = () => {
    const dayEl: Element | null  = document.querySelector("#default_day");
    const dateEl = document.querySelector("#default_date");

    const day = new Date();
    const dayName = days[day.getDay()];

    if (dayEl !== null && dateEl !== null) {
        dayEl.textContent = dayName;
    }

    const month = day.toLocaleString("default", { month: "long" });
    const date = day.getDate();
    const year = day.getFullYear()
    
    if (dateEl !== null) {
        dateEl.textContent = month + " " + date + " " + year
    }
}

export default setDate;