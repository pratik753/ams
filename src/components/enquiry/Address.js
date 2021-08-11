import "./Iconnav.css";
import { Container, Row, Col } from "react-bootstrap";
const Address = () => {
  return (
    <>
      <div className="formheading">Address Details</div>
      <Container>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Country</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Country"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">State</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="State"
            />
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">House No.</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="House No."
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Address Line</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Address Line"
            />
          </Col>
        </Row>
        <Row>
          <Col className="fieldcol">
            <div className="labelfield">Street</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Street"
            />
          </Col>

          <Col className="fieldcol">
            <div className="labelfield">Landmark</div>
            <input
              className="inputstyleform"
              type="text"
              name="first_name"
              placeholder="Landmark"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Address;
