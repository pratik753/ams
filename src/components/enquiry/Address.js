import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
let temp1 = 1;
const Address = () => {
  const [saved, setsaved] = useState(false);

  // setAadhar(localStorage.getItem("Country"));
  const [countrylog, setcountrylog] = useState();
  const [q1, setq1] = useState();
  const [q2, setq2] = useState();
  const [q3, setq3] = useState();
  const [q4, setq4] = useState();
  const [q5, setq5] = useState();

  const Countryhandler = (e) => {
    localStorage.setItem("Country", e.target.value);
    setcountrylog(localStorage.getItem("Country"));
  };
  let Country = localStorage.getItem("Country");

  const Statehandler = (e) => {
    localStorage.setItem("State", e.target.value);
    setq1(localStorage.getItem("State"));
    // setnamelog("hi");
  };
  let State = localStorage.getItem("State");

  const HouseNohandler = (e) => {
    localStorage.setItem("HouseNo", e.target.value);
    setq2(localStorage.getItem("HouseNo"));
  };
  let HouseNo = localStorage.getItem("HouseNo");

  const Addresshandler = (e) => {
    localStorage.setItem("Address", e.target.value);
    setq3(localStorage.getItem("Address"));
  };
  let Address = localStorage.getItem("Address");

  const Streethandler = (e) => {
    localStorage.setItem("Street", e.target.value);
    setq4(localStorage.getItem("Street"));
  };
  let Street = localStorage.getItem("Street");

  const Landmarkhandler = (e) => {
    localStorage.setItem("Landmark", e.target.value);
    setq5(localStorage.getItem("Landmark"));
  };
  let Landmark = localStorage.getItem("Landmark");

  const Pincodehandler = (e) => {
    localStorage.setItem("Pincode", e.target.value);
    setq5(localStorage.getItem("Pincode"));
  };
  let Pincode = localStorage.getItem("Pincode");
  const Cityhandler = (e) => {
    localStorage.setItem("City", e.target.value);
    setq5(localStorage.getItem("City"));
  };
  let City = localStorage.getItem("City");

  const savehandler = () => {
    setsaved(false);
  };
  const edithandler = () => {
    setsaved(true);
  };
  if (temp1 == 1) {
    setsaved(true);
    //  localStorage.setItem("gender", "Male");
    temp1 = 2;
  }

  return (
    <>
      <div className="formheading">Address Details</div>
      <Container>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Country</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Country"
                value={Country}
                onChange={Countryhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Country}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">State</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="State"
                onChange={Statehandler}
                value={State}
              />
            )}
            {!saved && <div className="labelfieldinput">{State}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">City</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="City"
                onChange={Cityhandler}
                value={City}
              />
            )}
            {!saved && <div className="labelfieldinput">{City}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">House No.</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="House No."
                value={HouseNo}
                onChange={HouseNohandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{HouseNo}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Address Line</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Address Line"
                value={Address}
                onChange={Addresshandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Address}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Street</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Street"
                value={Street}
                onChange={Streethandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Street}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Landmark</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Landmark"
                value={Landmark}
                onChange={Landmarkhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Landmark}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">PinCode</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="Pincode"
                value={Pincode}
                onChange={Pincodehandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Pincode}</div>}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            {" "}
            {saved && (
              <button className="buttonsavenext centbutt" onClick={savehandler}>
                Save{" "}
              </button>
            )}
            {!saved && (
              <button className="buttonsavenext centbutt" onClick={edithandler}>
                Edit{" "}
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Address;
