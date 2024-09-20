import { Montserrat } from 'next/font/google';
import scss from './Photo.module.scss'

const montserrat = Montserrat({
  subsets: ["latin"],
  // weight: "400", // Укажите нужный вес (например, 400)
});
const Photo = () => {
  return (
    <section className={scss.Photo}>
      <div className="container">
        <div className={scss.content}>
          <h1>ФОТО</h1>
          <p className={montserrat.className}>
            Для вашего удобства мы создали чат в Telegram, куда можно будет добавлять Фото и видео со свадьбы. Давайте поделимся друг с другом счастливыми моментами этого важного дня и будем на связи!
          </p>
          <button>
            <a href="">
              ВСТУПИТЬ
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Photo