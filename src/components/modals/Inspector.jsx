import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// Sample images for Inspector Robot (replace with real ones later)
import inspector1 from '../../images/Inspector/inspector.png';
import inspector2 from '../../images/Inspector/inspector_2.png';

const images = [
    {
      original: inspector2,
      thumbnail: inspector2,
    },
    {
      original: inspector1,
      thumbnail: inspector1,
    },
];

const InspectorRobot = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "Inspector Robot";

    const handleSubmit = (e) => {
      handleShow();
    };

    return (
    <>
        <div className="col-sm">
            <CardTile
                photo={inspector1}
                text={class_text}
                event={() => handleSubmit()}
            />
        </div>
        <Modal show={show} onHide={handleClose} size="lg">

            <Modal.Title style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}>
                <div>
                    <h1 className="font-weight-light">
                        {class_text}
                    </h1>
                </div>
            </Modal.Title>

            <Modal.Body>
                <div className="font-weight-light">

                    <h4 className="font-weight-light">Description</h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <p>
                        As Lead Mechatronics Engineer at AKIN AI, I designed and developed the embedded systems and AI backend for the "Inspector Robot," an AI-driven robot for NASA JPL applications. The robot performed person identification, ambient environmental monitoring, emotion and fatigue detection, navigation, actuation, speech recognition, and object detection.
                    </p>

                    <h4 className="font-weight-light">Skills Used</h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ul>
                        <li>ROS2 / MicroROS</li>
                        <li>Python, C, C++</li>
                        <li>Sensor and Actuator Integration</li>
                        <li>Embedded Electronics</li>
                        <li>Computer Vision (TensorFlow/Keras)</li>
                        <li>AI and Multimodal Learning Systems</li>
                        <li>Flask APIs and Web Development</li>
                        <li>System Design and Assembly</li>
                        <li>Agile Development and Team Leadership</li>
                    </ul>

                    <h4 className="font-weight-light">Gallery</h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ImageGallery items={images} />

                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default InspectorRobot;
