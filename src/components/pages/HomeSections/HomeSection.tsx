"use client";
import scss from "./HomeSection.module.scss";
import { Montserrat, Playfair_Display } from "next/font/google";
import back from "@/assets/bg_hone.jpg";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400", // Укажите нужный вес (например, 400)
});
const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: "400", // Укажите нужный вес (например, 400)
});

const HomeSection = () => {
  return (
    <section className={scss.HomeSection}>
      <div className="container">
        <div className={scss.content}>
          <Image
            className={scss.back}
            src={back}
            alt="dfgdfg"
            layout="fill"
            objectFit="cover"
          />
          <div className={scss.home_bg}>
            <h1 className={playfairDisplay.className}>Бекзат</h1>
            <h1 className={montserrat.className}>&</h1>
            <h1 className={playfairDisplay.className}>Гулнара</h1>
            <p>10.10.24</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
