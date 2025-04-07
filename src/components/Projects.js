import { ProjectCard } from './ProjectCard'
import { Container, Col, Row, Tab, Nav } from 'react-bootstrap'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import ProjImg1 from '../assets/Project-img/UTIMBAN.png'

export const Projects = () => {
    const projects = [
        {
            title: "UTIMBAN",
            description: "UTIMBAN",
            imgUrl: ProjImg1,
            link: "https://github.com/starboyagus/DSW-TP-24"
        },
        {
            title: "Hola",
            description: "Hola",
            imgUrl: ProjImg1,
            link: "https://github.com/starboyagus/DSW-TP-24"
        },
        {
            title: "Holl",
            description: "OLll",
            imgUrl: ProjImg1,
            link: "https://github.com/starboyagus/DSW-TP-24"
        },
        {
            title: "Holl",
            description: "OLll",
            imgUrl: ProjImg1,
            link: "https://github.com/starboyagus/DSW-TP-24"
        },
        {
            title: "Holl",
            description: "OLll",
            imgUrl: ProjImg1,
            link: "https://github.com/starboyagus/DSW-TP-24"
        },
        {
            title: "Holl",
            description: "OLll",
            imgUrl: ProjImg1,
            link: "https://github.com/starboyagus/DSW-TP-24"
        },
    ];

    return(
        <section className='projects' id='projects'>
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {( { isVisible } ) => 
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Tab.Container id='projects-tabs' defaultActiveKey="first">
                                        <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id='slideInUp' className={isVisible ? "animate__animated animate__slideUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return(
                                                                <ProjectCard 
                                                                key={index}
                                                                {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="section">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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