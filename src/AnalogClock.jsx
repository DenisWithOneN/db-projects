import { useState, useEffect } from "react";

export default function AnalogClock() {
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

  const hourAngle = ((hours % 12) + minutes / 60) * 30;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const secondAngle = seconds * 6;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-64 h-64">
        <div className="w-full h-full bg-white rounded-full border border-black flex justify-center items-center">
          <div
            className="absolute h-20 w-2 bg-black"
            style={{
              transform: `rotate(${hourAngle}deg) translate(-50%, -50%)`,
            }}
          />
          <div
            className="absolute h-28 w-1 bg-black"
            style={{
              transform: `rotate(${minuteAngle}deg) translate(-50%, -50%)`,
            }}
          />
          <div
            className="absolute h-32 w-1 bg-red-500"
            style={{
              transform: `rotate(${secondAngle}deg) translate(-50%, -50%)`,
            }}
          />
          <div className="w-4 h-4 bg-black rounded-full" />
        </div>
      </div>
    </div>
  );
}
