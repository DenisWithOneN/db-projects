import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-4xl text-red-800 md:text-6xl lg:text-8xl border-black border-4 rounded-lg p-5">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    </div>
  );
}
