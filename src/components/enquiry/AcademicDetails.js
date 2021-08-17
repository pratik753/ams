import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

let temp3 = 1;
const AcademicDetails = () => {
  const [examtype, setexamtype] = useState("OJEE");
  const [q1, setq1] = useState();
  const [q2, setq2] = useState();
  const [q3, setq3] = useState();
  const [q4, setq4] = useState();
  const [q5, setq5] = useState();
  const [q6, setq6] = useState();
  const [q7, setq7] = useState();
  const [q8, setq8] = useState();
  const examtypehandler = () => {
    let exam = document.getElementById("examtype").value;
    console.log(exam);
    setexamtype(exam);
  };

  const [saved, setsaved] = useState(false);
  const savehandler = () => {
    setsaved(false);
  };
  const edithandler = () => {
    setsaved(true);
  };
  if (temp3 == 1) {
    setsaved(true);
    //  localStorage.setItem("gender", "Male");
    temp3 = 2;
  }

  // setAadhar(localStorage.getItem("Country"));
  const rankhandler = (e) => {
    localStorage.setItem("rank", e.target.value);
    setq1(localStorage.getItem("rank"));
  };
  let rank = localStorage.getItem("rank");

  const Applicationhandler = (e) => {
    localStorage.setItem("Application", e.target.value);
    setq2(localStorage.getItem("Application"));
  };
  let Application = localStorage.getItem("Application");

  const rollhandler = (e) => {
    localStorage.setItem("roll", e.target.value);
    setq3(localStorage.getItem("roll"));
  };
  let roll = localStorage.getItem("roll");

  const schoolnohandler = (e) => {
    localStorage.setItem("schoolno", e.target.value);
    setq4(localStorage.getItem("school"));
  };
  let schoolno = localStorage.getItem("schoolno");

  const tenthhandler = (e) => {
    localStorage.setItem("tenth", e.target.value);
    setq6(localStorage.getItem("tenth"));
  };
  let tenth = localStorage.getItem("tenth");

  const tenrollhandler = (e) => {
    localStorage.setItem("tenroll", e.target.value);
    setq5(localStorage.getItem("tenroll"));
  };
  let tenroll = localStorage.getItem("tenroll");

  const tenthperhandler = (e) => {
    localStorage.setItem("tenthper", e.target.value);
    setq6(localStorage.getItem("tenthper"));
  };
  let tenthper = localStorage.getItem("tenthper");

  const tenthyearhandler = (e) => {
    localStorage.setItem("tenthyear", e.target.value);
    setq6(localStorage.getItem("tenthyear"));
  };
  let tenthyear = localStorage.getItem("tenthyear");

  const twerollhandler = (e) => {
    localStorage.setItem("tweroll", e.target.value);
    setq5(localStorage.getItem("tweroll"));
  };
  let tweroll = localStorage.getItem("tweroll");

  const tweperhandler = (e) => {
    localStorage.setItem("tweper", e.target.value);
    setq6(localStorage.getItem("tweper"));
  };
  let tweper = localStorage.getItem("tweper");

  const tweyearhandler = (e) => {
    localStorage.setItem("tweyear", e.target.value);
    setq6(localStorage.getItem("tweyear"));
  };
  let tweyear = localStorage.getItem("tweyear");

  const thridrollhandler = (e) => {
    localStorage.setItem("thridroll", e.target.value);
    setq5(localStorage.getItem("thridroll"));
  };
  let thridroll = localStorage.getItem("thridroll");

  const thridperhandler = (e) => {
    localStorage.setItem("thridper", e.target.value);
    setq6(localStorage.getItem("thridper"));
  };
  let thridper = localStorage.getItem("thridper");

  const thridyearhandler = (e) => {
    localStorage.setItem("thridyear", e.target.value);
    setq6(localStorage.getItem("thridyear"));
  };
  let thridyear = localStorage.getItem("thridyear");

  return (
    <>
      <div className="formheading">Academic Details</div>
      <Container>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Type of Exam</div>
            <div className="input-group-desc">
              <select id="examtype" name="examtype" onChange={examtypehandler}>
                <option value="OJEE">OJEE</option>
                <option value="JEE Mains">JEE Mains</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">{examtype} Rank</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="Rank"
                value={rank}
                onChange={rankhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{rank}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">{examtype} Application No.</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="Rank"
                value={Application}
                onChange={Applicationhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{Application}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">10th Roll No.</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="Roll No"
                value={tenroll}
                onChange={tenrollhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{tenroll}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Aggr. % in 10th</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="%"
                value={tenthper}
                onChange={tenthperhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{tenthper}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">10th Passing Year</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="Year"
                value={tenthyear}
                onChange={tenthyearhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{tenthyear}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">12th Roll No.</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="Roll No."
                value={tweroll}
                onChange={twerollhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{tweroll}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Aggr. % in 12th</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="%"
                value={tweper}
                onChange={tweperhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{tweper}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Passing Year 12</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="Year"
                value={tweyear}
                onChange={tweyearhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{tweyear}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">13th Roll No.</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="Roll No."
                value={thridroll}
                onChange={thridrollhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{thridroll}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Aggr. % in 13th</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="%"
                value={thridper}
                onChange={thridperhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{thridper}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Passing Year 13</div>
            {saved && (
              <input
                className="inputstyleform"
                type="number"
                name="first_name"
                placeholder="Year"
                value={thridyear}
                onChange={thridyearhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{thridyear}</div>}
          </Col>
        </Row>

        <Row>
          <Col className="fieldcol">
            <span className="labelfield">10 Result</span>
            <input className="examtype" type="file" />
          </Col>
          <Col className="fieldcol">
            <span className="labelfield">12 Result</span>
            <input className="examtype" type="file" />
          </Col>
          <Col className="fieldcol">
            <span className="labelfield">13 Result</span>
            <input className="examtype" type="file" />
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
export default AcademicDetails;
