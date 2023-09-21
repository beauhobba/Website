import React, { Text } from "react";
import coverphoto from "../images/coverphoto.png";
import brick from "../images/brick.png";
import Deepracer from "./modals/Deepracer";
import pychat from "../images/pychat.png";
import inspector from "../images/inspector.png";
import white from "../images/white.png";
import CardTile from "./cards/CardTile";

import Heineken from "./modals/Heineken";
import Shuffleboard from "./modals/Shuffleboard"
import HerbicideMapping from "./modals/HerbicideMapping";
import Robotatouille from "./modals/Robotatouille";
import Roost from "./modals/Roost";
import AustraliaDatabases from "./modals/AustraliaDatabases";

import Blackjack from "./modals/Blackjack";



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
            <div class="col-sm">
              <CardTile photo={inspector} text={"Inspector"} />
            </div>

            <div class="col-sm">
              <CardTile photo={brick} text={"Brick"} />
            </div>

            <div class="col-sm">
              <CardTile photo={pychat} text={"PyChat"} />
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
              <CardTile photo={white} text={"CoreNLP"} />
            </div>

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
              <CardTile photo={white} text={"NRL Web Scraper + Predictor"} />
            </div>
            <div class="col-sm">
              <CardTile photo={white} text={"Minecraft Tiktok Bot"} />
            </div>
            <div class="col-sm">
              <CardTile photo={white} text={""} />
            </div>

          </div>
        </div>



      </div>
    </div>
  );
}

export default Home;
