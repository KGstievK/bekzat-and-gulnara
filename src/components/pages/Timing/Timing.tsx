"use client";
import scss from "./Timing.module.scss";
import { Montserrat, Playfair_Display } from "next/font/google";
import image from "@/assets/Сбор.jpg";
import image2 from "@/assets/back.jpg";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: "400", // Укажите нужный вес (например, 400)
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400", // Укажите нужный вес (например, 400)
});
const Timing = () => {
  return (
    <section className={scss.Timing}>
      <div className="container">
        <div className={scss.content}>
          <h1 className={playfairDisplay.className}>ТАЙМИНГ</h1>
          <div className={scss.timing_cart}>
            {/* <img src='../../../assets/Сбор.jpg' alt="" /> */}
            <Image src={image} alt="sdfs" />
            <h2 className={playfairDisplay.className}>СБОР ГОСТЕЙ</h2>
            <p className={montserrat.className}>
              Живая музака <br /> Время для Ваших инстаграмных фото
            </p>
            <h2 className={playfairDisplay.className}>17:30</h2>
          </div>
          <div className={scss.Points}></div>
          <div className={scss.Points}></div>
          <div className={scss.Points}></div>
          <div className={scss.timing_cart}>
            <Image src={image2} alt="sdfs" />
            <h2 className={playfairDisplay.className}>НАЧАЛО ЦЕРЕМОНИЙ</h2>
            <h2 className={playfairDisplay.className}>17:30</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timing;
