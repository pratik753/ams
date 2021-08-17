import Footer from "../nav_footer/Footer";
import MainNavigation from "../nav_footer/MainNavigation";
import Regdiv from "../index/Regdiv";
import { useHistory } from "react-router";
import Slider from "../index/Slider";
import "./pages.css";
import Content from "../index/Content";
// import Reportvalue from "./components/Reportvalue";
// import MainReport from "./components/MainReport";
const Home = (props) => {
  /*const history=useHistory();
  history.push('/');*/
  function setlogin(a) {
    console.log(a);

    props.onlogin(a);
  }
  return (
    <div>
      <MainNavigation />

      <Slider />
      <div className="logindiv">
        <Regdiv onlogin={setlogin} />
      </div>
      <Content />
      <Footer />
      {/* <Reportvalue /> */}
      {/* <MainNavigation /> */}
    </div>
  );
};

export default Home;
