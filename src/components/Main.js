import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import falcon from '../assets/falcon.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import { ArrowRightCircle } from 'react-bootstrap-icons';



export const Main = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "UX/UI Designer", "Graphic Designer" ];
    const period = 2000

    useEffect( () => {
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return() => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setDeleting(false);
            setLoopNum(loopNum + 1 );
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={7}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline"> Welcome to my Portfolio! </span>
                                <h1> {`Hi!, I'm Agus`} <br/> 
                                    <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Web Designer", "UX/UI Designer", "Graphic Designer"]'><span className="wrap">{text}</span></span></h1>
                                <p> based in Argentina, currently on my fourth year of System Engineering in "Universidad Tecnologica Nacional". Looking for new experiences and new ways to connect with others.I'm a Full-Stack Developer with experience in React, MySQL, PHP, and other programming languages. and also do graphic design, UX/UI design using programs like Figma, Photoshop, Blender. </p>
                                <a target="_blank" href="https://www.linkedin.com/in/agus-gil-72626b360/">
                                <button onClick={() => console.log('connect')}> Let’s Connect <ArrowRightCircle size={25} /></button>
                                </a>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <img src={falcon} className="falcon"/>
                                   
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
