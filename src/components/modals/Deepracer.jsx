import React, {Text} from "react";
import CardTile from "../cards/CardTile"
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import deepracer_1 from '../../images/Deepracer/deepracer_1.png'
import deepracer_2 from '../../images/Deepracer/deepracer_2.PNG'
import deepracer from "../../images/deepracer.png";



const images = [
    {
      original: deepracer_1,
      thumbnail: deepracer_1,
    },
    {
      original: deepracer_2,
      thumbnail: deepracer_2,
    },
  ];

const Deepracer = () => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const class_text = "Deepracer"

    const handleSubmit = (e) => {
      handleShow();
    };

    return(
    <><div class="col-sm">
        <CardTile
            photo={deepracer}
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
                    Deepracer is an AWS challenge which involves racing simulated vehicles. These vehicles are trained to move using an reinforcement neural network. I was able to progress to the prefessional division by coming in the top 10% of the pool. This challenege involved using AWS services, performing reinforcement learning and learning a lot about vehicle mechnics. In order to rank so highly I optimised the vehicle for the race track, ensuring the vehicle's reinforcement learning was based on slowing down at corners and gunning it during straights.
                    <br>
                    </br>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                        Skills Used
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ul>
                        <li>Reinforcement Learning</li>
                        <li>AWS</li>
                        <li>Mechnics</li>
                    </ul>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                        Gallery
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ImageGallery items={images} />
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Deepracer