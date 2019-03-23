import React from "react";
import Card from "./Card";
import styled from "styled-components";
import { rotate } from "./keyframes";

import venom from "../assets/img/venom.jpg";
import airbender from "../assets/img/airbender.jpg";
import aliens from "../assets/img/aliens.jpg";
import assassin from "../assets/img/assassin.jpg";
import escaped from "../assets/img/escape.jpg";
import flash from "../assets/img/flash.jpg";
import harrypotter from "../assets/img/harrypotter.jpg";
import ironman from "../assets/img/ironman.jpg";
import joniuk from "../assets/img/jonuik.jpg";
import robinhood from "../assets/img/robinhood.jpg";
import spiderman from "../assets/img/spiderman.jpg";
import starwar from "../assets/img/starwar.jpg";
import superman from "../assets/img/superman.jpg";
import thor from "../assets/img/thor.jpg";
import valerian from "../assets/img/valerian.jpg";

const images = [
  venom,
  airbender,
  aliens,
  assassin,
  escaped,
  flash,
  harrypotter,
  ironman,
  joniuk,
  robinhood,
  spiderman,
  starwar,
  superman,
  thor,
  valerian
];

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
  top: 0;
  left: 50%;
  transform: translate(-50%);
  perspective: ${distance * 2 - 33}px;
  perspective-origin: center 50vh;
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

  columns.push(
    <Col key={i}>
      <Card url={images[i % images.length]} onMouseOver={() => {}} />
      <Card url={images[(i + 9) % images.length]} />
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
