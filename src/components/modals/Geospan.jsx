import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";

// Placeholder image – replace with your own logo or system screenshot
import geospanImage from '../../images/Geospan/geospan.png';

const GeoSpan = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "GeoSpan Wildlife Platform";

    const handleSubmit = () => {
        handleShow();
    };

    return (
        <>
            <div className="col-sm">
                <CardTile
                    photo={geospanImage}
                    text={class_text}
                    event={() => handleSubmit()}
                />
            </div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Title style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}>
                    <div>
                        <h1 className="font-weight-light">{class_text}</h1>
                    </div>
                </Modal.Title>

                <Modal.Body>
                    <div className="font-weight-light">

                        <h4 className="font-weight-light">My Contributions</h4>
                        <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />

                        <p>
                            I founded GeoSpan to deliver proactive, AI-driven wildlife monitoring solutions that reduce vehicle-wildlife collisions and support conservation efforts. I led the design and development of the platform’s key components, including real-time mapping tools, smart sensors, and wildlife detection models.
                        </p>
                        <p>
                            I created the HabitatIQ system to map wildlife impact zones using GPS, environmental inputs, and behavioural analytics. This system integrates live data streams to generate predictive alerts and visualise high-risk areas.
                        </p>
                        <p>
                            I also developed and integrated the <strong>RoadPulse</strong> and <strong>FieldPulse</strong> sensor units, engineered for roadside and field deployment. These devices support multi-sensor data capture (including thermal, radar, and LiDAR) and connect directly to the HabitatDB backend for structured storage and analysis.
                        </p>
                        <p>
                            In addition to sensor and AI development, I led the creation of setup and deployment services, ensuring ease of field installation and data reliability for scientific and government clients.
                        </p>

                        <h4 className="font-weight-light">Skills Used</h4>
                        <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                        <ul>
                            <li>Startup Development & Product Strategy</li>
                            <li>AI Model Design (Wildlife Detection)</li>
                            <li>Geographic Mapping & Environmental Analytics</li>
                            <li>Sensor Integration (Thermal, Radar, LiDAR)</li>
                            <li>Full-Stack Platform Development</li>
                            <li>Deployment, Testing, and Field Services</li>
                        </ul>

                        <h4 className="font-weight-light">Links</h4>
                        <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                        <ul>
                            <li>
                                <a href="https://www.geospan.au/" target="_blank" rel="noopener noreferrer">
                                    GeoSpan Website
                                </a>
                            </li>
                        </ul>

                    </div>
                </Modal.Body>
                <Modal.Footer />
            </Modal>
        </>
    );
};

export default GeoSpan;
