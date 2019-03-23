import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { rotate } from "./keyframes";
import {images, titles} from "./data"

const colWidth = 270;
const colHeight = 800;
const count = 22;
const rotateY = 360 / count;
const halfW = colWidth / 2;
const halfDeg = rotateY / 2;

const distance =  halfW / Math.tan((halfDeg * Math.PI) / 180);
let columns = [];

const Cylinder = styled.div`
  position: relative;
  width: ${colWidth}px;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  perspective: ${distance * 2 - 33}px;
  perspective-origin: center 30vh;
`;

const ColmunWrapper = styled.div`
  position: relative;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  animation: ${rotate(distance)} 100s linear 2;
  animation-fill-mode: forwards;
  :hover {
    animation-play-state: paused;
  }
`;
const Column = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  backface-visibility: none;
`;

for (let i = 0; i < count; i++) {
  let Col = styled(Column)`
    transform: rotateY(${i * rotateY + 180}deg) translateZ(${distance}px);
  `;
	let index = i % images.length
  columns.push(
    <Col key={i}>
      <Card url={images[index]} title={titles[index]} />
      <Card url={images[(i + 9) % images.length] }
						title ={titles[(i + 9) % images.length]}  />
    </Col>
  );
}

export default function() {
  return (
    <Cylinder>
      <ColmunWrapper>{columns}</ColmunWrapper>
    </Cylinder>
  );
}
