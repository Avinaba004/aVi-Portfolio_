import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";


const projects = [
  {
    title: "Query Website",
    description: "A Q&A platform built with full authentication, posting, and real-time answers.",
    techStack: "React, Firebase, Express, MongoDB",
    pptLink: "/ppt/Query Website.pptx", 
    videoLink: "/videos/Query_video.mp4", 
    liveLink: "https://github.com/Avinaba004/Query_new",
  },
  {
    title: "PokeDex",
    description: "A dynamic Pokémon explorer web app with advanced search, filtering, comparison, and favorites features.",
    techStack: "React.js, React Router, Context API, Custom CSS, React Context API, Custom Hooks",
    pptLink: "/ppt/PokeDex.pptx",
    videoLink: "/videos/Pokedex.mp4",
    liveLink: "https://poke-dex-avi.vercel.app/",
  },
   {
    title: "Signature Maker",
    description: "A simple web application that allows users to draw, clear, and download their handwritten digital signature using a canvas-based interface.",
    techStack: "React.js, HTML5 Canvas,CSS",
    pptLink: "/ppt/Signaturemaker.pptx",
    videoLink: "/videos/Signaturemaker.mp4",
    liveLink: "https://signaturemakeravi.vercel.app/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <h3>.</h3>
        <h3>.</h3>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} className="mb-4" key={index}>
              <Card className="h-100 shadow-lg">
                <Card.Body>
                  {/* Video Preview */}
                  <div className="video-preview mb-3">
                   <video width="100%" height="300" controls autoPlay loop muted>
                   <source src={project.videoLink} type="video/mp4" />
                   Your browser does not support the video tag.
                  </video>
                  </div>

                  {/* Download PPT */}
                  <div className="mb-3">
                    <a
                      href={project.pptLink}
                      download
                      className="btn btn-outline-secondary btn-sm"
                    >
                      Download PPT
                    </a>
                  </div>

                  {/* Project Title */}
                  <Card.Title>{project.title}</Card.Title>

                  {/* Description */}
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>

                  {/* Tech Stack */}
                  <Card.Text>
                    <strong>Tech Stack:</strong> {project.techStack}
                  </Card.Text>

                  {/* Live Link */}
                  <Button
                    variant="primary"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live/Github Repo
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h5 className="project-heading">
          New <strong className="purple">Projects</strong> Coming Soon :)
        </h5>
      </Container>
    </Container>
  );
}

export default Projects;
