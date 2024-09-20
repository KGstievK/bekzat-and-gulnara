"use client";
import scss from "./HappyEnd.module.scss";
import { useEffect, useState } from "react";
import { Oswald, Playfair_Display } from "next/font/google";
import Image from "next/image";
import footer from "@/assets/footer.jpg";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const oswald = Oswald({ subsets: ["latin"] });
const playfair_display = Playfair_Display({ subsets: ["latin"] });

const HappyEnd = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2024-10-10T17:00:00");

  const updateTimer = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateTimer, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className={scss.HappyEnd}>
      <div className="container">
        <div className={scss.content}>
          <Image
            className={scss.footer}
            src={footer}
            alt="dfgdfg"
            layout="fill"
            objectFit="cover"
          />
          <div className={scss.ourDay}>
          <h1 className={playfair_display.className}>
            "Место для счастья - здесь,
            <br /> время для счастья - сейчас"
          </h1>
            <div className={scss.time}>
              <h2 className={oswald.className}>
                {timeLeft.days}{" "}
                {/* <span className={playfair_display.className}>КҮН</span> */}
                <span className={playfair_display.className}>ДЕНЬ</span>
              </h2>
              <h2 className={oswald.className}>
                {timeLeft.hours}{" "}
                {/* <span className={playfair_display.className}>СААТ</span> */}
                <span className={playfair_display.className}>ЧАСС</span>
              </h2>
              <h2 className={oswald.className}>
                {timeLeft.minutes}{" "}
                <span className={playfair_display.className}>МИНУТА</span>
              </h2>
              <h2 className={oswald.className}>
                {timeLeft.seconds}{" "}
                <span className={playfair_display.className}>СЕКУНДА</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyEnd;
