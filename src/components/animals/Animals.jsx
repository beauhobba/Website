import React, {Text} from "react";
import coverphoto from '../../images/coverphoto.png'
import white from '../../images/white.png'
import Koala from '../../images/Animals/koala.png'
import SwampWallaby from '../../images/Animals/swampwallaby.png'
import SacredKingfisher from '../../images/Animals/sacredkingfisher.png'
import "react-image-gallery/styles/css/image-gallery.css";
import AnimalPost from "./AnimalPost"
import AnimalGraph from "./AnimalGraph"

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
              I plan to ramp this hobby up in 2024, with some big plans. <br></br><br/>
              I post all my animal sightings to  <a href="https://www.inaturalist.org/people/beau_hobba">INaturalist (nonprofit website for mapping and sharing oversations of biodiversity)</a><br></br>
              Here are some of my favourite shoots. <br></br><br/>
              🚧 Note this part of the website is still very much under construction 🚧<br></br>
            </p>
            
          </div>
        </div>

        <div style={{
      display: "flex",
      flexDirection: "column"}}>
          <div class="row">

          <div class="col-sm">
          <AnimalPost animal_photo={Koala} animal_name={"Koala"} scientific_name={"Phascolarctos cinereus"}  description={"First time seeing a Koala and we saw 20! Got lost on French Island and ended up riding our bikes for more then 30km."} latitude={-38.3489} longitude ={145.3365} location_name={"French Island (VIC)"} date ={"Early 2022"}/>
          </div>

          <div class="col-sm">
          <AnimalPost animal_photo={SacredKingfisher} scientific_name={"Todiramphus sanctus"}  animal_name={"Sacred Kingfisher"} description={"First time seeing a kingfisher which isnt a kookaburra! Saw this with my brother between Megalong and Jenolan. First 4x4 experience to get to this campsite"}  latitude={-35.3489} longitude ={145.3365}  location_name={"Coxs River (NSW)"} date ={"Early 2023"} />
          </div>

          <div class="col-sm">
            <AnimalPost animal_photo={SwampWallaby} scientific_name={"Wallabia bicolor"} animal_name={"Swamp Wallaby"} description={"Had the pleasure of seeing this guy only 15 minutes from my house at Cudal"}   latitude={-33.741953} longitude ={150}  location_name={"Boree Creek (NSW)"} date ={"Early 2023"} />
          </div>

        </div>  
        <AnimalGraph animal_name={["Koala", "Sacred Kingfisher", "Swamp Wallaby"]} latitude={[-38.3489, -33.741953, -33.243912]} longitude ={[145.3365, 150.179281, 148.925880]}/>

        </div>

      </div>
      
    </div>
  );
}

export default Animals;
