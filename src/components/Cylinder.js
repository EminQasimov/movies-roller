import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { rotate, rotateBig } from "./keyframes";
import {images, titles} from "./data"

const colWidth = 270;
// const colHeight = 800;
const count = 18;
const rotateY = 360 / count;
const halfW = colWidth / 2;
const halfDeg = rotateY / 2;

const distance =  halfW / Math.tan((halfDeg * Math.PI) / 180);
let columns = [];

const Cylinder = styled.div`
  position: relative;
  width: ${colWidth}px;
  left: 50%;
  transform: translate(-50%);
  perspective: ${distance * 2 - 33}px;
  perspective-origin: center 40vh;

`;

const ColmunWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  animation: ${rotate(distance)} 200s linear infinite;
  animation-fill-mode: forwards;
  :hover {
    animation-play-state: paused;
  }
    @media (min-width: 2000px) {
      animation: ${rotateBig(distance)} 300s linear infinite;
      animation-fill-mode: forwards;
    } 
  } 
`;
const Column = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  backface-visibility: none;
  transition: opacity .3s linear; 
`;

for (let i = 0; i < count; i++) {
  let rotDeg = i * rotateY + 180;
  let Col = styled(Column)`
    transform: rotateY(${rotDeg}deg) translateZ(${distance}px);
  `;
	let index = i % images.length

  columns.push(
    <Col key={i}>
      <Card url={images[index]} title={titles[index]} />

      <Card url={images[(i + 9) % images.length]}  
						title ={titles[(i + 9) % images.length]}  /> 
    </Col>
  );
}

export default function({deg}) {
  return (
    <Cylinder>
      <ColmunWrapper>{columns}</ColmunWrapper>
    </Cylinder>
  );
}
