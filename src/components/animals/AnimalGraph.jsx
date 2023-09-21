import React, { useState, useEffect } from "react";
import CardTile from "../cards/CardTile";
import { Modal } from "react-bootstrap";
import "react-image-gallery/styles/css/image-gallery.css";
import MapChart from "./Map";
import Plotly from "plotly.js-dist";


const AnimalGraph = (props) => {

  useEffect(() => {

      const trace1 = {
        type: "scattermapbox",
        lat: props.latitude,
        lon: props.longitude,
        hovertext: props.animal_name,
        mode: "markers",
        marker: {
          size: 10,
          color: "#333333 ",
        },
        text: props.animal_name,
      };

          const layout = {
            title: {
              text: props.animal_name,
              font: {
                size: 24,
                font: "sans-serif",
              },
            },
            mapbox: {
              center: {
                lat: -28,
                lon: 133.4,
              },
              style: "open-street-map",
              zoom: 3.5,
            },
            autosize: true,
            height: 650,
            paper_bgcolor: "#FFFFFF", // Set the background color of the entire chart to black
            plot_bgcolor: "#FFFFFF", // Set the background color of the plot area to black
            margin: {
              l: 0,
              r: 0,
              t: 40,
              b: 0,
            },
            legend: {
              bgcolor: "rgba(0, 0, 0, 0.7)",
              bordercolor: "rgba(0, 0, 0, 0.2)",
              borderwidth: 1,
              x: 0,
              y: 1,
              orientation: "v",
            },
          };
          Plotly.newPlot("map", [trace1], layout);
  }, []);



  return (

            <div id="map" style={{"padding": 20}}></div>
  );
};

export default AnimalGraph;
