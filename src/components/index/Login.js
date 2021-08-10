import { useState, useRef } from "react";

const Login = (props) => {
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
  const regboxhandler = () => {
    setloginbox(false);
    props.onlogbox(loginbox);
  };
  return (
    <>
      <div className="card">
        <div className="card-heading">
          <h2 className="title">Login Yourself</h2>
        </div>
        <div className="card-bodydiv">
          {/* <form> */}

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

          <button className="registerbutton">Login</button>
          {/* </form> */}
          <div onClick={regboxhandler} className="regtext">
            NEW REGISTRATION
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
