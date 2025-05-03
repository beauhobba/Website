import React, { Text } from "react";
import coverphoto from "../images/coverphoto.png";
import brick from "../images/brick.png";
import Deepracer from "./modals/Deepracer";
import pychat from "../images/pychat.png";
import inspector from "../images/inspector.png";
import white from "../images/white.png";
import smarttrafficlantern from "../images/smarttrafficlight.png"
import CardTile from "./cards/CardTile";

import {Brick, PyChat, CoreNLP, EVChargingMap, InspectorRobot, ElectricCouncilMap, Heineken, Shuffleboard, HerbicideMapping, Robotatouille, Roost, Blackjack, AustraliaDatabases, SmartTrafficLantern} from "./modals"




function Home() {
  return (
    <div>
      <div
        class="container"
        style={{
          paddingBottom: "80px",
        }}
      >
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={coverphoto}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Hi, I'm Beau</h1>
            <p>
              and I like robots. Here are some projects I have worked on...{" "}
              <br></br>
              <i>🚧 Note this website is still under construction 🚧</i>
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div class="row">
            <Heineken> </Heineken>

            <HerbicideMapping> </HerbicideMapping>

            <Robotatouille> </Robotatouille>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            <InspectorRobot></InspectorRobot>

            <Brick></Brick>

            <PyChat></PyChat>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            <CoreNLP></CoreNLP>

            <Roost> </Roost>
            <AustraliaDatabases />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            <Deepracer/>


              <Shuffleboard></Shuffleboard>
            <Blackjack></Blackjack>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            <div class="col-sm">
              <CardTile photo={white} text={"NRL Open Source Tools"} />
            </div>
  
              <SmartTrafficLantern></SmartTrafficLantern>
              <div class="col-sm">
              <CardTile photo={white} text={"Pale Pavements and AI Animal Detection"} />
            </div>

          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            <div class="col-sm">
              <CardTile photo={white} text={"ANCAP Reporting Tools"} />
            </div>
            <ElectricCouncilMap></ElectricCouncilMap>
            <EVChargingMap></EVChargingMap>

          </div>
        </div>


        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            <div class="col-sm">
              <CardTile photo={white} text={"Traffic Lantern Publisher Subscriber"} />
            </div>
            <div class="col-sm">
              <CardTile photo={white} text={"Sydney Harbour Tunnel C-ITS"} />
            </div>
            <div class="col-sm">
              <CardTile photo={white} text={"MCAD"} />
            </div>

          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            <div class="col-sm">
              <CardTile photo={white} text={"Chippendale C-ITS Project"} />
            </div>
            <div class="col-sm">
              <CardTile photo={white} text={"CAREFUL Buses"} />
            </div>
            <div class="col-sm">
              <CardTile photo={white} text={"EV Recovery Trailer"} />
            </div>

          </div>

        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "20px",
          }}
        >
          <div class="row">
            <div class="col-sm">
              <CardTile photo={white} text={"Geospan"} />
            </div>
            <div class="col-sm">
              <CardTile photo={white} text={"LiDAR CPM Creator"} />
            </div>
            <div class="col-sm">
              <CardTile photo={white} text={"ITLP"} />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;
