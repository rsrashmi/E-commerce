import React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/main3.png";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className="footer_logo text-start">
              <img src={logo} alt="logo" />
              <h5>ईCom</h5>
              <p>
                ईCom is an online shopping platform that offers a seamless
                shopping experience with a wide range of products. It provides
                users with easy navigation, secure payments, and fast delivery
                options, making shopping convenient and enjoyable.
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Delivery Time</h5>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Contact</h5>
            <ListGroup className="deliver_time-list">
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <p>Location: Lodhi Road, New Delhi-3200, Delhi</p>
              </ListGroupItem>
              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Phone: 01712345678</span>
              </ListGroupItem>

              <ListGroupItem className="delivery_time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer_title">Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i className="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row className="mt-6">
          <Col lg="6" md="6">
            <p className="copyright_text">
              Copyright - 2024, website made by Rashmi. All Right Reserved.{" "}
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social_links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow:</p>
              <span>
                {" "}
                <Link to="https://www.facebook.com">
                  <i className="ri-facebook-line"></i>
                </Link>{" "}
              </span>
              <span>
                <Link to="https://github.com">
                  <i className="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.youtube.com">
                  <i className="ri-youtube-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://www.linkedin.com">
                  <i className="ri-linkedin-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
