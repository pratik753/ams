import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
const Applicantdetails = () => {
  return (
    <>
      <div className="formheading">Applicant's Details</div>
      <Container>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Name</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Name"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Aadhar No.</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Aadhar No."
            />
          </Col>
        </Row>
        <Row>
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
            <div className="input-group-desc">
              <select id="examtype" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </Col>

          <Col className="fieldcol">
            <div className="labelfield"> Date of Birth</div>
            <input
              className="inputstyleform"
              type="date"
              name="first_name"
              placeholder="Name"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Applicantdetails;
