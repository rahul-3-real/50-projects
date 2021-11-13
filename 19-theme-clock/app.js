const clock = () => {
  const hourPin = document.querySelector(".hour");
  const minutePin = document.querySelector(".minute");
  const secondPin = document.querySelector(".second");
  const timeText = document.querySelector(".time");
  const dateText = document.querySelector(".date");
  const toggle = document.querySelector(".toggle-theme");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const setTime = () => {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hourPin.style.transform = `translate(-50%, -100%) rotate(${scale(
      hoursForClock,
      0,
      12,
      0,
      360
    )}deg)`;
    minutePin.style.transform = `translate(-50%, -100%) rotate(${scale(
      minutes,
      0,
      60,
      0,
      360
    )}deg)`;
    secondPin.style.transform = `translate(-50%, -100%) rotate(${scale(
      seconds,
      0,
      60,
      0,
      360
    )}deg)`;

    timeText.innerHTML = `${hoursForClock}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${ampm}`;
    dateText.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  };

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  toggle.addEventListener("click", (e) => {
    const body = document.querySelector("body");
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      e.target.innerHTML = `<i class="fal fa-moon"></i>`;
    } else {
      body.classList.add("dark");
      e.target.innerHTML = `<i class="fal fa-sun"></i>`;
    }
  });

  setTime();
  setInterval(setTime, 1000);
};
clock();
