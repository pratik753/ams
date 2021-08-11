import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
const AcademicDetails = () => {
  const [examtype, setexamtype] = useState("OJEE");
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
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Rank"
            />
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">{examtype} Application No.</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Rank"
            />
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">+2 Roll No.</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Roll No"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">+2 School No.</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="School No"
            />
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">+2 Center No.</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Center No"
            />
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Aggr. % in 10th</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="%"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Aggr. % in 12th</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="%"
            />
          </Col>
          <Col className="fieldcol">
            <div className="labelfield">Aggr. % in 13th</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="%"
            />
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <select name="enquiry_course">
              {courses.Btech.map((el) => (
                <option value={el}>{`Btech ${el}`}</option>
              ))}
              {courses.Other.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AcademicDetails;
