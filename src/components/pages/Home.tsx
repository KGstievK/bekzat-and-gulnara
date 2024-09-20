import Dad from "./Dad/Dad"
import FormGuest from "./FormGuest/FormGuest"
import Gps from "./Gps/Gps"
import HappyEnd from "./HappyEnd/HappyEnd"
import HomeSection from "./HomeSections/HomeSection"
import Photo from "./Photo/Photo"
import Timer from "./Timer/Timer"
import Timing from "./Timing/Timing"

const Home = () => {
  return (
    <div>
      <HomeSection/>
      <Timer/>
      <Gps/>
      <Timing/>
      <Dad/>
      <Photo/>
      <FormGuest/>
      <HappyEnd/>
    </div>
  )
}

export default Home