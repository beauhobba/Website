import React, {useState} from "react";
import cooking_robot from '../../images/cooking_robot.png'
import CardTile from "../cards/CardTile"
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import Robotatouille1 from '../../images/Robotatouille/Robotatouille1.png'
import Robotatouille2 from '../../images/Robotatouille/Robotatouille2.png'
import Robotatouille3 from '../../images/Robotatouille/Robotatouille3.png'
import Robotatouille4 from '../../images/Robotatouille/Robotatouille4.PNG'
import Robotatouille5 from '../../images/Robotatouille/Robotatouille5.jpg'

import robot from '../../images/Robotatouille/rat.png'

import pdfFile from "./Robotatouille.pdf"

import SinglePagePDFViewer from "./single-page";

const images = [
    {
      original: Robotatouille1,
      thumbnail: Robotatouille1,
    },
    {
      original: Robotatouille2,
      thumbnail: Robotatouille2,
    },
    {
      original: Robotatouille3,
      thumbnail: Robotatouille3,
    },
    {
      original: Robotatouille4,
      thumbnail: Robotatouille4,
    },
    {
      original: Robotatouille5,
      thumbnail: Robotatouille5,
    },
  ];

const Robotatouille = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const class_text = "Robotatouille"

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    const handleSubmit = (e) => {
      handleShow();
    };

    return(
    <><div class="col-sm">
        <CardTile
            photo={cooking_robot}
            text={class_text}
            event={() => handleSubmit()} 
        />
        </div>
        <Modal show={show} onHide={handleClose} size="lg">

            <Modal.Title style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}>
                <div>
                    <h1 class="font-weight-light" size="lg">
                    {class_text}
                    </h1>

                </div>
            </Modal.Title>

            <Modal.Body>
                <div class="font-weight-light">

                    <h4 class="font-weight-light">
                        Description
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    This project involved working with 2 other individuals to create a cooking robot, conned '<i>Robotatouille</i>'. This full-on role involved robotic arm movement using the UR-5 robotic arms, a weight sensor, a RGBD camera and various props. The software was built using ROS, and an accurate machine learning model was created to predict and locate recipe ingredients.  The training data was hand made with many hours of tedious labelling.  The system was able to read a recipe, locate the ingredients, perform cooking steps (stirring, measuring, mixing) and perform advanced path planning. 
                    <br>
                    </br>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                        Skills Used
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ul>
                        <li>Machine Learning</li>
                        <li>UAV Control</li>
                        <li>Sensors</li>
                        <li>ROS</li>
                        <li>System Design</li>
                    </ul>

                    <h4 class="font-weight-light">
                        Research Paper
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />

                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <div>   
                    <SinglePagePDFViewer pdf={pdfFile} />
                    </div>
                    </div>
                    <br>
                    </br>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                        Video
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                    <ImageGallery items={images} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Robotatouille