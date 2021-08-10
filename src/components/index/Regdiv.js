import { useState } from "react";
import Login from "./Login";
import Regbox from "./Regbox";
import "./Regdiv.css";
const Regdiv = () => {
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
  return (
    <>
      <br />
      <br />
      {regbox && <Regbox onregbox={regboxhandler} />}
      {!regbox && <Login onlogbox={loginboxhandler} />}
      <br />
      <br />
      <br />
      <h2>Steps to Follow : </h2>
    </>
  );
};
export default Regdiv;
