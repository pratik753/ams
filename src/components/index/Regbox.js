import { useRef } from "react";
import { useState } from "react";
import "./Regdiv.css";

const Regbox = (props) => {
  const [emailotp, setotpemail] = useState(false);
  const [phoneotp, setotpphone] = useState(false);
  const [loginbox, setloginbox] = useState(false);
  const [otpshow, setotpshow] = useState(false);
  const phonenum = useRef();

  const otpbuttonshow = () => {
    if (phonenum.current.value.length == 10) {
      setotpshow(true);
      console.log("10..");
    } else {
      setotpshow(false);
    }
    console.log("hii");
    console.log(phonenum.current.value.length);
  };

  const emailotphandler = () => {
    setotpemail(true);
  };
  const phoneotphandler = () => {
    setotpphone(true);
  };
  const loginboxhandler = () => {
    setloginbox(true);
    props.onregbox(loginbox);
  };
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
                    type="email"
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
                <select id="examtype">
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

          <button className="registerbutton">Register</button>
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
