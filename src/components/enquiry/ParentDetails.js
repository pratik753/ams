import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
let temp2 = 1;
const ParentDetails = () => {
  const [saved, setsaved] = useState(false);
  const [q1, setq1] = useState();
  const [q2, setq2] = useState();
  const [q3, setq3] = useState();
  const [q4, setq4] = useState();
  const [q5, setq5] = useState();
  const [q6, setq6] = useState();
  const [q7, setq7] = useState();

  const savehandler = () => {
    setsaved(false);
  };
  const edithandler = () => {
    setsaved(true);
  };
  if (temp2 == 1) {
    setsaved(true);
    //  localStorage.setItem("gender", "Male");
    temp2 = 2;
  }

  const Fatherhandler = (e) => {
    localStorage.setItem("Father", e.target.value);
    setq1(localStorage.getItem("Father"));
  };
  let Father = localStorage.getItem("Father");

  const Fathernohandler = (e) => {
    localStorage.setItem("Fatherno", e.target.value);
    setq2(localStorage.getItem("Fatherno"));
  };
  let Fatherno = localStorage.getItem("Fatherno");

  const Motherhandler = (e) => {
    localStorage.setItem("Mother", e.target.value);
    setq3(localStorage.getItem("Mother"));
  };
  let Mother = localStorage.getItem("Mother");

  const Mothernohandler = (e) => {
    localStorage.setItem("Motherno", e.target.value);
    setq4(localStorage.getItem("Motherno"));
  };
  let Motherno = localStorage.getItem("Motherno");

  const Fatherocchandler = (e) => {
    localStorage.setItem("Fatherocc", e.target.value);
    setq5(localStorage.getItem("Fatherocc"));
  };
  let Fatherocc = localStorage.getItem("Fatherocc");

  const Motherocchandler = (e) => {
    localStorage.setItem("Motherocc", e.target.value);
    setq6(localStorage.getItem("Motherocc"));
  };
  let Motherocc = localStorage.getItem("Motherocc");

  return (
    <>
      <div className="formheading">Parent's Details</div>
      <Container>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Father's Name</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Father's Name"
                value={Father}
                onChange={Fatherhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Father}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Father's Phone Number</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Father's Phone Number"
                value={Fatherno}
                onChange={Fathernohandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Fatherno}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Mother's Name</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Mother's Name"
                value={Mother}
                onChange={Motherhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Mother}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Mother's Phone Number</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Mother's Phone Number"
                value={Motherno}
                onChange={Mothernohandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Motherno}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Father's Occupation</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Father's Occupation"
                value={Fatherocc}
                onChange={Fatherocchandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Fatherocc}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Mother's Occupation</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Mother's Occupation"
                value={Motherocc}
                onChange={Motherocchandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Motherocc}</div>}
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
export default ParentDetails;
