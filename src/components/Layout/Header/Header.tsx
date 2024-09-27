import scss from "./Header.module.scss";



const Header = () => {

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.modalOverlay}>
            <div className={scss.modalContent}>
              <audio controls>
                <source src="/public/audio/05-EdSheeran-Perfect.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
