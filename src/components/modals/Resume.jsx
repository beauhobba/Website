import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";

import pdfFile from "./resume_2023.pdf"

import SinglePagePDFViewer from "./single-page";


const Resume = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const class_text = "Resume"

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    const handleSubmit = (e) => {
      handleShow();
    };

    return(
    <><div className="nav-item">
        <p onClick={() => handleSubmit()} >{"Resume"}</p>
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
                    <SinglePagePDFViewer pdf={pdfFile} />
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Resume