import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// Placeholder image for MCAD (replace with real image if available)
import mcadImage from '../../images/MCAD/mcad.png';

const images = [
    {
        original: mcadImage,
        thumbnail: mcadImage,
    },
];

const MCAD = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "MCAD Plugin";

    const handleSubmit = () => {
        handleShow();
    };

    return (
        <>
            <div className="col-sm">
                <CardTile
                    photo={mcadImage}
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

                        <h4 className="font-weight-light">Project Overview</h4>
                        <hr style={{ colour: "black", backgroundColour: "white", height: 5 }} />
                        <p>
                            I designed and developed the <strong>MCAD plugin</strong> to enhance Minecraft server interactivity through dynamic advertisements, holograms, and flash prompts. It provides a flexible interface for server admins to control messaging behaviour with live configuration.
                        </p>

                        <p>
                            I implemented a modular command system, real-time updates, and reloadable configs to ensure smooth operation under multiplayer loads. The plugin architecture separates responsibilities across each feature domain, making it easy to maintain and extend.
                        </p>

                        <p>
                            As part of the backend, I integrated <strong>AWS DynamoDB</strong> and <strong>API Gateway</strong> to store and retrieve advertisement data remotely. This allowed live syncing of broadcast content across multiple servers, ensuring centralised management and cloud scalability.
                        </p>

                        <h4 className="font-weight-light">Skills Used</h4>
                        <hr style={{ colour: "black", backgroundColour: "white", height: 5 }} />
                        <ul>
                            <li>Java Plugin Development (Spigot/Bukkit API)</li>
                            <li>AWS DynamoDB and API Gateway Integration</li>
                            <li>Command Framework Design</li>
                            <li>Live Configuration Reloading</li>
                            <li>Scheduled Task Management</li>
                            <li>Secure and Scalable Cloud Data Access</li>
                        </ul>

                        <h4 className="font-weight-light">Gallery</h4>
                        <hr style={{ colour: "black", backgroundColour: "white", height: 5 }} />
                        <ImageGallery items={images} />

                    </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
            </Modal>
        </>
    );
}

export default MCAD;