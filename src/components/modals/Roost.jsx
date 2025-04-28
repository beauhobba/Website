import React, { useEffect } from "react";
import { isMobile } from "react-device-detect";
import heinkein_arm from '../../images/robot_arms_heinkein.png'
import CardTile from "../cards/CardTile"
import { Modal } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import ReactPlayer from "react-player";
import "react-image-gallery/styles/css/image-gallery.css";

import roost from '../../images/Roost/roost_game.png'
import box from "../../images/Roost/box.gif";
import roost1 from '../../images/Roost/roost1.png'
import roost2 from '../../images/Roost/roost2.png'
import roost3 from '../../images/Roost/roost3.png'
import roost4 from '../../images/Roost/roost4.png'
import roost5 from '../../images/Roost/roost5.png'
import roost6 from '../../images/Roost/roost6.png'


const images = [
    {
      original: roost,
      thumbnail: roost,
    },
    {
      original: roost1,
      thumbnail: roost1,
    },
    {
      original: roost2,
      thumbnail: roost2,
    },
    {
      original: roost3,
      thumbnail: roost3,
    },
    {
        original: roost4,
        thumbnail: roost4,
      },
      {
        original: roost5,
        thumbnail: roost5,
      },
      {
        original: roost6,
        thumbnail: roost6,
      },
  ];

const Roost = () => {
    const [show, setShow] = React.useState(false);

    const [mobile, setMobile] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const class_text = "Roost"

    const handleSubmit = (e) => {
      handleShow();
    };
    useEffect(() => {
        if (isMobile) {
            setMobile(true);
        }
    }, []);
    return(
    <><div class="col-sm">
        <CardTile
            photo={roost}
            text={class_text}
            event={() => handleSubmit()} 
        />
        </div>
        <Modal show={show} onHide={handleClose} size="lg">
          {mobile ? (
            <div
              onClick={handleClose}
              style={{
                justifyContent: "flex-end",
                display: "flex",
                paddingRight: 10,
              }}
            >
              <p style={{ fontSize: 30, marginTop: 0 }}>
                <b>x</b>
              </p>
            </div>
          ) : null}

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
                    Roost is a card game I created. Originally based on the popular card game 'dutch' or 'cabo', I made the game my own with new artwork, rules and gameplay. Roost is a card game about strategy, memorisation, alliances and most importantly birds. I designed Roost with the Adobe suite, made my own website, tracked finances and I am currently in the process of launching a kickstarter.
                    <br>
                    </br>
                    <div style={{ justifyItems: "center", display: 'flex', alignContent: 'center', alignItems: 'center', width: '50%' }}>
                    <img style={{width: '50%',}}
              src={box}
              alt=""
            />
            </div>
                    <br>
                    </br>
                    <h4 class="font-weight-light">
                        Skills Used
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <ul>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Adobe After Effects / Adobe Cinema 4D</li>
                        <li>React</li>
                        <li>AWS Amplify</li>
                        <li>AWS Dynamo DB</li>
                        <li>AWS App Sync</li>
                        <li>AWS Route 52</li>
                        <li>AWS Cli</li>
                        <li>Mailchimp</li>
                        <li>Google Analytics</li>
                    </ul>
                    <h4 class="font-weight-light">
                        Website
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />
                    <p>The following website was designed and hosted (using AWS) by myself. It has a version for both mobile and computer.</p>
                    <div  style={{paddingLeft:20, paddingBottom: 20}}>
                    <a href="https://www.roostgame.com/" rel="noreferrer">
    Roost Game
  </a>
  </div>

                    <h4 class="font-weight-light">
                        Media
                    </h4>
                    <hr style={{ color: "black", backgroundColor: "white", height: 5 }} />

            <div style={{ display: "flex", justifyContent: "center" }}>
              <ReactPlayer url="https://www.youtube.com/watch?v=9qXPUQvhqoA&ab_channel=Roostgame" />
            </div>
                    <br>
                    </br>
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

export default Roost
