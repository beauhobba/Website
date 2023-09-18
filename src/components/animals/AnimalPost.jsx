import React, { useState } from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import MapChart from "./Map";

const AnimalPost = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    handleShow();
  };

  return (
    <>
      <div class="col-sm">
        <CardTile
          photo={props.animal_photo}
          text={props.animal_name}
          event={() => handleSubmit()}
        />
      </div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Title
          style={{ paddingLeft: 10, display: "flex", justifyContent: "center" }}
        >
          <div>
            <h1 class="font-weight-light" size="lg">
              {props.animal_name}
            </h1>
          </div>
        </Modal.Title>

        <Modal.Body>
          <div class="font-weight-light">
            <h4 class="font-weight-light">Details</h4>
            Scientific Name: <i>Phascolarctos cinereus</i>
            <br></br>
            Located: <i>{props.latitude}</i>, <i>{props.longitude}</i>
            <br></br>
            Observed: <i>{props.date}</i>
            <br></br>
            Location Name: <i>{props.location_name}</i>
            <br></br>
            <br></br>
            <h4 class="font-weight-light">Description</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            {props.description}
            <br></br>
            <br></br>
            <h4 class="font-weight-light">Geographic Location</h4>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
            <br></br>
            <br></br>
            <MapChart
              markers={{
                name: props.location_name,
                coordinates: [props.latitude, props.longitude],
              }}
            ></MapChart>
            <hr
              style={{ color: "black", backgroundColor: "white", height: 5 }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default AnimalPost;
