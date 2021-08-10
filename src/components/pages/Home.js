import Footer from "../nav_footer/Footer";
import MainNavigation from "../nav_footer/MainNavigation";
import Regdiv from "../index/Regdiv";
import Slider from "../index/Slider";
// import Reportvalue from "./components/Reportvalue";
// import MainReport from "./components/MainReport";
const Home = () => {
  return (
    <div>
      <MainNavigation />
      <Slider />
      <Regdiv />
      <Footer />
      {/* <Reportvalue /> */}
      {/* <MainNavigation /> */}
    </div>
  );
};

export default Home;
