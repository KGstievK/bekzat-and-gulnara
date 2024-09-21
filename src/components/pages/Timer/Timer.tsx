"use client";

import { Montserrat, Oswald, Playfair_Display } from "next/font/google";
import scss from "./Timer.module.scss";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400", // Укажите нужный вес (например, 400)
});
const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: "400", // Укажите нужный вес (например, 400)
});


const Timer: React.FC = () => {
  return (
    <section className={scss.Timer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.titlee}>
            <div className={scss.line}></div>
            <h1 className={playfairDisplay.className}>
              Чакыруу!
            </h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.ourDay}>
            <p className={montserrat.className}>
            Урматтуу биздин коноктор! Сиздерди үйлөнүү үлпөт тоюбузга арналган салтанатка, кадырлуу коногубуз болуп кетүүгө чакырабыз
            </p>
            <h1 className={playfairDisplay.className}>
              Той ээси: Бакыта
            </h1>
          </div>
          <div className={scss.titlee}>
            <div className={scss.line}></div>
            <h1 className={playfairDisplay.className}>
              Приглашение!
            </h1>
            <div className={scss.line}></div>
          </div>
          <div className={scss.ourDay}>
            <p className={montserrat.className}>
              Совсем скоро, в жизни двух любящих людей произойдет одно из самых важных событий, свидетелями которого мы просим вас быть и разделить радость этого дня вместе с нами.
            </p>
            <p className={montserrat.className}>
              Будем рады пригласить вас стать почётными гостями торжества, посвящённого бракосочетания
            </p>
            <h1 className={playfairDisplay.className}>
              С уважением хозяйка торжества: <br /> Бакыта
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timer;