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
  const courses = {
    Btech: [
      "ETC",
      "CS & IT",
      "CSE",
      "CSE AIML",
      "CST",
      "EE",
      "EEE",
      "ME",
      "CIVIL",
      "BIOTECH",
    ],
    Other: [
      "M.Sc(Biotechnology)",
      "B.Sc(Appl. Microbiology)",
      "B.Sc(Biotechnology)",
      "BCA",
      "BBA",
      "M.TECH(Comp. Sc.)",
      "MTech(ETC)",
      "MCA",
      "MBA",
    ],
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

  const centernohandler = (e) => {
    localStorage.setItem("centerno", e.target.value);
    setq5(localStorage.getItem("centerno"));
  };
  let centerno = localStorage.getItem("centerno");

  const tenthhandler = (e) => {
    localStorage.setItem("tenth", e.target.value);
    setq6(localStorage.getItem("tenth"));
  };
  let tenth = localStorage.getItem("tenth");

  const twelvehandler = (e) => {
    localStorage.setItem("twelve", e.target.value);
    setq7(localStorage.getItem("twelve"));
  };
  let twelve = localStorage.getItem("twelve");

  const thriteenhandler = (e) => {
    localStorage.setItem("thriteen", e.target.value);
    setq8(localStorage.getItem("thriteen"));
  };
  let thriteen = localStorage.getItem("thriteen");

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
                type="text"
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
                type="text"
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
            <div className="labelfield">+2 Roll No.</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Roll No"
                value={roll}
                onChange={rollhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{roll}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">+2 School No.</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="School No"
                value={schoolno}
                onChange={schoolnohandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{schoolno}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">+2 Center No.</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="Center No"
                value={centerno}
                onChange={centernohandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{centerno}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Aggr. % in 10th</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="%"
                value={tenth}
                onChange={tenthhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{tenth}</div>}
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Aggr. % in 12th</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="%"
                value={twelve}
                onChange={twelvehandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{twelve}</div>}
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Aggr. % in 13th</div>
            {saved && (
              <input
                className="inputstyleform"
                type="text"
                name="first_name"
                placeholder="%"
                value={thriteen}
                onChange={thriteenhandler}
              />
            )}
            {!saved && <div className="labelfieldinput">{thriteen}</div>}
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <select id="examtype" name="enquiry_course">
              {courses.Btech.map((el) => (
                <option value={el}>{`Btech ${el}`}</option>
              ))}
              {courses.Other.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <button className="buttonupload" onClick={savehandler}>
              Rank Card{""}
            </button>
            <span className="labelfield">Upload</span>
            {/* <div></div> */}
          </Col>
          <Col>
            {" "}
            <button className="buttonupload" onClick={edithandler}>
              10 Result{" "}
            </button>
            <span className="labelfield">Upload</span>
          </Col>
          <Col>
            {" "}
            <button className="buttonupload" onClick={edithandler}>
              12 Result{" "}
            </button>
            <span className="labelfield">Upload</span>
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
export default AcademicDetails;
