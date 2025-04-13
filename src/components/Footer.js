import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/falcon-logo.png'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end ">
                <div className="social-icon">
                    <a target="_blank"  href="https://github.com/starboyagus"><img src={github} alt="" /></a>
                    <a target="_blank"  href="https://www.instagram.com/starboyagus/"><img src={instagram} alt="" /></a>
                    <a target="_blank"  href="#"><img src={linkedin} alt="" /></a>
                </div>
            <p>© 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}