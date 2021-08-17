import { useRef } from "react";
import { useState } from "react";
import "./Regdiv.css";
import axios from "axios";
import { useHistory } from "react-router";
import Recaptcha from "react-recaptcha";
const Regbox = (props) => {
  const API = axios.create({ baseURL: "http://localhost:4000" });
  API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      console.log("regbox" + localStorage.getItem("profile"));
      req.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem("profile")
      )}`;
    }
    return req;
  });
  const [emailotp, setotpemail] = useState(false);
  const [phoneotp, setotpphone] = useState(false);
  const [loginbox, setloginbox] = useState(false);
  const [otpshow, setotpshow] = useState(false);
  const phonenum = useRef();
  const [registerotp, registerotphandle] = useState(0);
  const [butt, buttonhandle] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const history = useHistory();
  var i = 120;
  var v;
  var timers = [];
  const otpbuttonshow = () => {
    if (phonenum.current.value.length == 10) {
      setotpshow(true);
      console.log("10..");
    } else {
      setotpshow(false);
    }
    // console.log("hii");
    //console.log(phonenum.current.value.length);
  };

  const emailotphandler = () => {
    setotpemail(true);
  };
  const otpequalornot = async () => {
    const phone = document.getElementById("phoneotp").value;
    console.log(
      phone +
        "  " +
        registerotp +
        "  type of phone " +
        typeof phone +
        "  typeof registration" +
        typeof registerotp
    );
    const x = registerotp.toString();
    if (x === phone) {
      alert("correct otp");
      i = 120;
      buttonhandle(true);
      return;
    } else {
      alert("Incorrect otp");
    }
  };
  const phoneotphandler = async () => {
    //
    try {
      console.log(phonenum.current.value);
      const phonedata = phonenum.current.value;
      var a = /^\d{10}$/;
      if (a.test(phonedata)) {
      } else {
        alert("Your Mobile Number Is Not Valid.");
        return;
      }

      const email = document.getElementById("emailhandle").value;
      const data = { mobile: phonenum.current.value, email: email };

      const response = await API.post(
        "http://localhost:4000/college/otpgen",
        data
      );
      console.log(response);
      if (response.data.data > 0) {
        //alert("Your otp is valid for 2 minutes only...");
        setTimeout(setTimer, 1000);
        registerotphandle(response.data.data);
      } else {
        alert("check your credentials....");
      }
      //console.log(response);
    } catch (error) {
      console.log(error);
    }
    setotpshow(false);
    setotpphone(true);
  };
  function setTimer() {
    i--;
    console.log(i);
    if (i == 0) {
      setotpshow(true);
      setotpphone(false);
      buttonhandle(false);
      registerotphandle(0);
      i = 120;
      return;
    }
    setTimeout(setTimer, 1000);
  }
  const loginboxhandler = () => {
    setloginbox(true);
    props.onregbox(loginbox);
  };
  // -------------
  const recaptchaloader = () => {
    console.log("recaptchaloader");
  };
  const verifyCallback = (response) => {
    if (response) {
      setIsVerify(true);
    }
  };

  async function registerhandle() {
    if (isVerify) {
      alert("you are human");
    } else {
      alert("you are Not human");
    }

    const value = document.getElementById("phone").value;
    const email = document.getElementById("emailhandle").value;
    const name = document.getElementById("naming").value;
    const data = { mobile: value, email: email };
    const totaldata = { mobile: value, email: email, name: name, role: "0" };
    try {
      const totallen = await API.post(
        "http://localhost:4000/college/totlen",
        data
      );
      //console.log(totallen.data.token);

      if (totallen !== undefined) {
        console.log("value of " + totallen.data.data);
        if (totallen.data.data > 0) {
          alert("User Already exists...");
          return;
        } else {
          console.log("value of " + totallen.data.data);
          if (totallen.data.data == 0) {
            const result = await API.post(
              "http://localhost:4000/college/postdata",
              totaldata
            );
            if (result !== undefined) {
              console.log(result.data.token);
              localStorage.setItem(
                "profile",
                JSON.stringify(result.data.token)
              );
            }
            props.onlogin(true);
            history.push("/enquiry");
          }
        }
      }
      /*if(totallen!==undefined&&totallen.length==0)
         const result=await axios.post('http://localhost:4000/college/postdata',data);
      else
         alert('already register user...'); 
      console.log(result.status);*/
    } catch (error) {
      console.error(error);
    }
  }
  console.log(registerotp + " " + i);
  return (
    <>
      <div className="card">
        <div className="card-heading">
          <h2 className="title">Register Yourself</h2>
        </div>
        <div className="card-bodydiv">
          {/* <form> */}
          <div className="form-row">
            <div className="name">Name</div>
            <div className="value">
              <div className="input-group-desc">
                <input
                  className="inputstyle"
                  type="text"
                  name="first_name"
                  placeholder="Name"
                  id="naming"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="name">Email</div>
            <div className="value">
              <div className="input-group-desc">
                <input
                  className="inputstyle"
                  type="email"
                  name="email"
                  id="emailhandle"
                  placeholder="Email"
                />
                {/* <button className="otpbutton" onClick={emailotphandler}>
                  OTP
                </button> */}
              </div>
              {/* <div className="input-group-desc">
                {emailotp && (
                  <input
                    className="inputstyle"
                    type="email"
                    name="otpemail"
                    placeholder="Otp"
                    style={{ marginTop: ".5rem" }}
                  />
                )}
                {/* <button className="otpbutton">OTP</button> 
              </div> */}
            </div>
          </div>
          <div className="form-row">
            <div className="name">Phone</div>
            <div className="value">
              <div className="input-group-desc">
                <input
                  className="inputstyle"
                  type="email"
                  name="email"
                  placeholder="Phone"
                  id="phone"
                  ref={phonenum}
                  onChange={otpbuttonshow}
                />
                {otpshow && (
                  <button className="otpbutton" onClick={phoneotphandler}>
                    OTP
                  </button>
                )}
              </div>
              <div className="input-group-desc">
                {phoneotp && (
                  <input
                    className="inputstyle"
                    type="text"
                    id="phoneotp"
                    onBlur={otpequalornot}
                    name="otpemail"
                    placeholder="Otp"
                    style={{ marginTop: ".5rem" }}
                  />
                )}
                {/* <button className="otpbutton">OTP</button> */}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="name">Course</div>
            <div className="value">
              <div className="input-group-desc">
                <select className="examtype">
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>BCA</option>
                  <option>MCA</option>
                  <option>BBA</option>
                  <option>MBA</option>
                  <option>B.Sc.</option>
                  <option>M.Sc.</option>
                </select>
              </div>

              {/* <button className="otpbutton">OTP</button> */}
            </div>
          </div>
          <div>
            <Recaptcha
              sitekey="6LfFqvsbAAAAAFAZygb6K5q7TLxjd7n9QE1VNHdh"
              render="explicit"
              onloadCallback={recaptchaloader}
              verifyCallback={verifyCallback}
            />
          </div>
          {/* butt -->true */}
          {butt && isVerify && (
            <button className="registerbutton" onClick={registerhandle}>
              Register
            </button>
          )}
          {(!butt || !isVerify) && (
            <button className="registerbutton dis" disabled>
              Register
            </button>
          )}
          {/* </form> */}
          <div onClick={loginboxhandler} className="regtext">
            EXISTING USER? LOGIN
          </div>
        </div>
      </div>
    </>
  );
};
export default Regbox;
