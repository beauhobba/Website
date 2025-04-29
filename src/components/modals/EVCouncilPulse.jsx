import React from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import councilmap from '../../images/EVCouncil/council_pulse1.PNG';
import councilmap2 from '../../images/EVCouncil/council_pulse2.PNG';
import councilmap3 from '../../images/EVCouncil/council_pulse3.PNG';

const images = [
    {
      original: councilmap,
      thumbnail: councilmap,
    },
    {
        original: councilmap3,
        thumbnail: councilmap3,
      }
];

const ElectricCouncilMap = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const class_text = "Electric Council Map";

    const handleSubmit = (e) => {
      handleShow();
    };

    return (
    <>
        <div className="col-sm">
            <CardTile
                photo={councilmap2}
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
                        I developed a dynamic, filterable dashboard that provides geographic insights into electric vehicle (EV) infrastructure by council area. Built using Plotly Dash and hosted via Elastic Beanstalk with a Python runtime, this dashboard allows users to explore EV charger statistics and filter data by council. The app dynamically updates charts and maps based on user input.
                    </p>

                    <h4 className="font-weight-light">Skills Used</h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ul>
                        <li>Plotly Dash</li>
                        <li>Python</li>
                        <li>Elastic Beanstalk</li>
                        <li>Docker (optional deployment)</li>
                        <li>Data Visualization</li>
                        <li>Geographic Analytics</li>
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

export default ElectricCouncilMap;
