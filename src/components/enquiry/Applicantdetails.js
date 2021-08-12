import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
let temp = 1;
const Applicantdetails = () => {
  const [saved, setsaved] = useState(false);
  const savehandler = () => {
    try {
      if (localStorage.getItem("mname").length == 0) {
        setmnamelog("N/A");
      }
      if (localStorage.getItem("lname").length == 0) {
        setmnamelog("N/A");
      }
      if (localStorage.getItem("mname").length == 0) {
        setmnamelog("N/A");
      }
    } catch (error) {}
    setsaved(false);
  };
  const edithandler = () => {
    setsaved(true);
  };
  if (temp == 1) {
    setsaved(true);
    localStorage.setItem("gender", "Male");
    temp = 2;
  }

  const [namelog, setnamelog] = useState();
  const namehandler = (e) => {
    localStorage.setItem("name", e.target.value);
    setnamelog(localStorage.getItem("name"));
  };
  let namee = localStorage.getItem("name");

  const [mnamelog, setmnamelog] = useState("");
  const mnamehandler = (e) => {
    localStorage.setItem("mname", e.target.value);
    setmnamelog(localStorage.getItem("mname"));
  };
  let mnamee = localStorage.getItem("mname");

  const [lnamelog, setlnamelog] = useState("");
  const lnamehandler = (e) => {
    localStorage.setItem("lname", e.target.value);
    setlnamelog(localStorage.getItem("lname"));
  };
  let lnamee = localStorage.getItem("lname");

  const [Aadhar, setAadhar] = useState("");
  const Aadharhandler = (e) => {
    localStorage.setItem("Aadhar", e.target.value);
    setAadhar(localStorage.getItem("Aadhar"));
  };
  let aadharr = localStorage.getItem("Aadhar");

  const datehandlar = (e) => {
    localStorage.setItem("datee", e.target.value);
    setAadhar(localStorage.getItem("datee"));
    console.log(e.target.value);
  };
  let datelog = localStorage.getItem("datee");

  const genderhandlar = (e) => {
    localStorage.setItem("gender", e.target.value);
    setAadhar(localStorage.getItem("gender"));
    console.log(e.target.value);
  };
  let genderr = localStorage.getItem("gender");

  return (
    <>
      <div className="formheading">Applicant's Details</div>
      <Container>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">First Name * : </div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Name"
                value={namee}
                onChange={namehandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{namee}</div>}
            {/* {<div className="labelfieldinput">{namee}</div>} */}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Middle Name : </div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Name"
                value={mnamee}
                onChange={mnamehandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{mnamee}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Last Name : </div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Name"
                value={lnamee}
                onChange={lnamehandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{lnamee}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Aadhar No. * :</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Aadhar No."
                value={aadharr}
                onChange={Aadharhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{aadharr}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Email Address</div>
            <input
              className="inputstyleform"
              type="email"
              name="first_name"
              placeholder="Email Address"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Phone No.</div>
            <input
              className="inputstyleform"
              type="number"
              name="first_name"
              placeholder="Phone No."
            />
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Gender</div>
            {saved && (
              <div className="input-group-desc">
                <select id="examtype" name="gender" onClick={genderhandlar}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}
            {!saved && <div className="labelfieldinput">{genderr}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield"> Date of Birth</div>
            {saved && (
              <input
                className="inputstyleform"
                type="date"
                name="first_name"
                placeholder="Name"
                onChange={datehandlar}
              />
            )}
            {!saved && <div className="labelfieldinput">{datelog}</div>}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            {" "}
            <button className="buttonsavenext" onClick={savehandler}>
              Save{" "}
            </button>
          </Col>
          <Col>
            {" "}
            <button className="buttonsavenext" onClick={edithandler}>
              Edit{" "}
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Applicantdetails;
