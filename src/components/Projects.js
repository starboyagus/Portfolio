import { ProjectCard } from './ProjectCard'
import { DesignCard } from './DesignCard';
import { Container, Col, Row, Tab, Nav } from 'react-bootstrap'
import 'animate.css';
import TrackVisibility from 'react-on-screen';



import { devP } from './Lists/dev';
import { desP } from './Lists/des';

export const Projects = () => {

    return(
        <section className='projects' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {( { isVisible } ) => 
                                <div className={isVisible ? "animate__animated" : ""}>
                                    <h2>Projects</h2>
                                    <p>I’ve worked on a variety of projects that blend both web development and graphic design. In web development, I’ve built responsive websites and landing pages using HTML, CSS, JavaScript, and React
                                    <br/>
                                    On the graphic design side, I’ve created from brand identities to social media content.
                                    <br/>
                                    Each project has helped me grow creatively and technically — allowing me to approach problems from both a designer’s and a developer’s perspective.
                                    </p>
                                    <Tab.Container id='projects-tabs' defaultActiveKey="first">
                                        <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Developer</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Design</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Soon...</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id='slideInUp' className={isVisible ? "animate__animated animate__slideUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        devP.map((devP, index) => {
                                                            return(
                                                                <ProjectCard 
                                                                key={index}
                                                                {...devP}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row className='design-box' lg="2">
                                                    {
                                                        desP.map((desP, index1) => {
                                                            return(
                                                                <DesignCard
                                                                key={index1}
                                                                {...desP}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>

                                </div> }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}