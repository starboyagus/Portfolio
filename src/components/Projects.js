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
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Tab.Container id='projects-tabs' defaultActiveKey="first">
                                        <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Developer Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Design Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Coming Soon...</Nav.Link>
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
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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