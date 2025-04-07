import { Container, Row, Col } from "react-bootstrap"
import { useState, useEffect } from "react"
import falcon from '../assets/falcon.png'
import 'animate.css'
import TrackVisibility from 'react-on-screen'



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
                                <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas dui ac lorem gravida, eleifend rhoncus purus iaculis. Proin a rutrum mauris. Suspendisse accumsan nisi ut sem sodales, a viverra ante fringilla. Vivamus quis elementum ipsum, ac luctus erat. Praesent faucibus augue purus, id finibus lorem convallis vel. Sed lobortis velit ac nibh porta, eget pretium mi ultricies. Donec et elit mollis, accumsan justo id, tempor metus. Quisque nec diam a tortor pulvinar vehicula at eget justo. Integer id est eu dui dignissim tincidunt sed nec metus. In hac habitasse platea dictumst. In laoreet erat augue, sed ullamcorper ipsum venenatis sed. Etiam nec augue libero.  </p>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} lg={5}>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                <img src={falcon} alt="header_img" className="falcon"/>    
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
