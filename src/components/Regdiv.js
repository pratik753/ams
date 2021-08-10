import { useState } from "react";
import "./Regdiv.css";
const Regdiv = () => {
  const [emailotp, setotpemail] = useState(false);
  const [phoneotp, setotpphone] = useState(false);
  const emailotphandler = () => {
    setotpemail(true);
  };
  const phoneotphandler = () => {
    setotpphone(true);
  };
  return (
    <>
      {/* <h2>Register Yourself</h2>
      <div className="center">
        <hr />
        <div className="box">
          <label className="name">Name</label>
          <input className="inputname" type="text" placeholder="Name" />
          <label className="name">Email</label>
          <input className="inputname" type="text" />
          {<button>OTP</button>}
          <input className="inputname" type="text" placeholder="OTP" />
          <br />
          <label className="name">Phone number</label>
          <input className="inputname" type="text" />
          {<button>OTP</button>}
          <input className="inputname" type="text" placeholder="OTP" />
          <button>Submit</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br /> */}

      {/* <hr /> */}
      <br />
      <br />
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
                <button className="otpbutton" onClick={emailotphandler}>
                  OTP
                </button>
              </div>
              <div className="input-group-desc">
                {emailotp && (
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
            <div className="name">Phone</div>
            <div className="value">
              <div className="input-group-desc">
                <input
                  className="inputstyle"
                  type="email"
                  name="email"
                  placeholder="Phone"
                />
                <button className="otpbutton" onClick={phoneotphandler}>
                  OTP
                </button>
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
            <div className="name">State</div>
            <div className="value">
              <div className="input-group-desc">
                <select>
                  <option>Bihar</option>
                  <option>Jharkhand</option>
                  <option>Orissa</option>
                </select>
              </div>

              {/* <button className="otpbutton">OTP</button> */}
            </div>
          </div>

          <button className="registerbutton">Register</button>
          {/* </form> */}
        </div>
      </div>
      <br />
      <br />
      <br />
      <h2>Steps to Follow : </h2>
    </>
  );
};
export default Regdiv;
