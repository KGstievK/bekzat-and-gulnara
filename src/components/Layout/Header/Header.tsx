"use client"
import { useEffect, useRef } from "react";
import scss from "./Header.module.scss";

const Header = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      // if (audioRef.current) {
      //   audioRef.current.volume = 0.2; // Установка громкости
      //   audioRef.current.play().catch((error) => {
      //     console.log("Не удалось воспроизвести аудио:", error);
      //   });
      // }
      // Удаляем обработчик после первого клика
      // document.removeEventListener("click", handleUserInteraction);
    };

    // Добавляем обработчик события клика на документ
    // document.addEventListener("click", handleUserInteraction);

    // Убираем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.modalOverlay}>
            <div className={scss.modalContent}>
              <audio ref={audioRef}>
                <source
                  src="/audio/05-EdSheeran-Perfect.mp3"
                  type="audio/mpeg"
                />
                <source
                  src="/audio/05-EdSheeran-Perfect.ogg"
                  type="audio/ogg"
                />
                Ваш браузер не поддерживает аудио.
              </audio>
              <p>Нажмите где угодно, чтобы запустить музыку.</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
