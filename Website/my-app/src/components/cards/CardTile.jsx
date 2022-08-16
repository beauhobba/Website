import React from "react";
import {
    Card,
    CardBlock,
    CardTitle,
    CardImg,
    CardImgOverlay
  } from 'react-bootstrap-card';

const CardTile = (props) => {


    return (
        <Card onClick={props.event} >
        <CardBlock>
        <CardImg
            src={props.photo}
            alt=""
          />
        <CardImgOverlay style={{ display:'flex', justifyContent:'center', alignItems: 'center', backgroundColor: 'rgba(90, 90, 90, 0.35)'}}>
          <CardTitle  style={{ color: 'white', fontWeight:"light" }} >
          <p  class="font-weight-light">

            {props.text}
            </p>
          </CardTitle>
        </CardImgOverlay>

        </CardBlock>
      </Card>
    )
    
}

export default CardTile