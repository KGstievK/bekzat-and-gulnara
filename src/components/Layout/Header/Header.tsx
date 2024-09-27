import { useState, useRef, useEffect } from "react";
import scss from "./Header.module.scss";

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(true); // Состояние воспроизведения
  const audioRef = useRef<HTMLAudioElement>(null); // Ссылка на аудио элемент

  // Эффект для автозапуска аудио при загрузке сайта
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Автозапуск аудио заблокирован браузером.", error);
      });
    }
  }, []);

  // Функция для переключения воспроизведения
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Остановка
      } else {
        audioRef.current.play(); // Воспроизведение
      }
      setIsPlaying(!isPlaying); // Обновление состояния
    }
  };

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.modalOverlay}>
            <div className={scss.modalContent}>
              <audio ref={audioRef} controls>
                <source
                  src="/audio/05-EdSheeran-Perfect.mp3"
                  type="audio/mpeg"
                />
                Ваш браузер не поддерживает элемент аудио.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
