import { useState } from "react";
import Login from "./Login";
import Regbox from "./Regbox";
import "./Regdiv.css";
const Regdiv = (props) => {
  const [emailotp, setotpemail] = useState(false);
  const [phoneotp, setotpphone] = useState(false);
  const [regbox, setregbox] = useState(true);
  const [loginbox, setloginbox] = useState(false);
  const emailotphandler = () => {
    setotpemail(true);
  };
  const phoneotphandler = () => {
    setotpphone(true);
  };
  const regboxhandler = (data) => {
    console.log(data);
    setregbox(false);
  };
  const loginboxhandler = (data) => {
    console.log(data);
    setregbox(true);
  };
  function setlogin(a) {
    console.log(a);
    props.onlogin(true);
  }
  return (
    <>
      {regbox && <Regbox onregbox={regboxhandler} onlogin={setlogin} />}
      {!regbox && <Login onlogbox={loginboxhandler} onlogin={setlogin} />}
    </>
  );
};
export default Regdiv;
