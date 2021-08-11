import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
const ParentDetails = () => {
  return (
    <>
      <div className="formheading">Parent's Details</div>
      <Container>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Father's Name</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Father's Name"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Father's Phone Number</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Father's Phone Number"
            />
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Mother's Name</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Mother's Name"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Mother's Phone Number</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Mother's Phone Number"
            />
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Father's Occupation</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Father's Occupation"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Mother's Occupation</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Mother's Occupation"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ParentDetails;
