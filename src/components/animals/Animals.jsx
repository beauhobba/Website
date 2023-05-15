import React, {Text} from "react";
import coverphoto from '../../images/coverphoto.png'
import white from '../../images/white.png'
import CardTile from "../cards/CardTile"
import "react-image-gallery/styles/css/image-gallery.css";
import AnimalPost from "./AnimalPost"


function Animals() {
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
            <h1 class="font-weight-light">Animal Documentation</h1>
            <p>
              In 2022 I wanted to document every Aussie animal <br></br>
              🚧 Note this part of the website is still very much under construction 🚧
              
            </p>
            
          </div>
        </div>

        <div style={{
      display: "flex",
      flexDirection: "column"}}>
          <div class="row">

          <div class="col-sm">
          <AnimalPost animal_photo={white} animal_name={"Koala"} description={"Lipsum"} latitude={-35.19147} longitude ={-148.1357} location_name={"Tumut"} date ={"31/08/2022"}/>
          </div>

          <div class="col-sm">
          <AnimalPost animal_photo={white} animal_name={"Kangaroo"} description={"Lipsum"} />
          </div>

          <div class="col-sm">
            <AnimalPost animal_photo={white} animal_name={"Emu"} description={"Lipsum"} />
          </div>

        </div>       
        </div>

      </div>
      
    </div>
  );
}

export default Animals;
