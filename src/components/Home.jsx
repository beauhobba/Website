import React, {Text} from "react";
import coverphoto from '../images/coverphoto.png'
import heinkein_arm from '../images/robot_arms_heinkein.png'
import weed_farm from '../images/weed_farm.png'
import cooking_robot from '../images/cooking_robot.png'
import white from '../images/white.png'
import CardTile from "./cards/CardTile"
import "react-image-gallery/styles/css/image-gallery.css";

import Heineken from './modals/Heineken'
import HerbicideMapping from './modals/HerbicideMapping'
import Robotatouille from './modals/Robotatouille'
import Roost from './modals/Roost'


function Home() {
  return (
    <div >
      <div class="container" style={{
      paddingBottom: '80px'}}>
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
              and I like robots. Here are some projects I have worked on... <br></br>
              <i>🚧 Note this website is still under construction 🚧</i>
              
            </p>
            
          </div>
        </div>

        <div style={{
      display: "flex",
      flexDirection: "column"}}>
          <div class="row">

          <Heineken> </Heineken>

          <HerbicideMapping> </HerbicideMapping>

          <Robotatouille> </Robotatouille>

        </div>       
        </div>

        <div style={{
      display: "flex",
      flexDirection: "column",
      paddingTop: '20px'}}>
          <div class="row">

          <div class="col-sm">
            <CardTile photo={white} text={"Inspector"} />
          </div>

          <div class="col-sm">
            <CardTile photo={white} text={"Brick"} />
          </div>

          <div class="col-sm">
            <CardTile photo={white} text={"PyChat"} />
          </div>

        </div>       
        </div>

        <div style={{
      display: "flex",
      flexDirection: "column",
      paddingTop: '20px'}}>
          <div class="row">

          <div class="col-sm">
            <CardTile photo={white} text={"CoreNLP"} />
          </div>

          <Roost> </Roost>

          <div class="col-sm">
            <CardTile photo={white} text={"API Tools"} />
          </div>
        </div>   
        </div>

        <div style={{
      display: "flex",
      flexDirection: "column",
      paddingTop: '20px'}}>
          <div class="row">

          <div class="col-sm">
            <CardTile photo={white} text={"Deepracer 2022"} />
          </div>

          <div class="col-sm">
            <CardTile photo={white} text={"Shuffleboard CV"} />
          </div>

          <div class="col-sm">
            <CardTile photo={white} text={"Blackjack Assistant"} />
          </div>
        </div>   
        </div>


      </div>
      
    </div>
  );
}

export default Home;
