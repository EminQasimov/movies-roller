import React, { useState } from "react";
import styled from "styled-components";
import StarRatingComponent from "react-star-rating-component";
import { Star } from "styled-icons/fa-solid/Star";
import { ArrowBackOutline as Back } from "styled-icons/typicons/ArrowBackOutline";
import { move } from "./keyframes";

const Img = styled.div`
	width: 90%;
	height: 70%;
	min-height: 260px;
	background-image: url(" ${({ src }) => src}");
	background-size: cover;
	background-repeat: no-repeat;
	border-radius: 10px;
	box-sizing: border-box;
	margin: 15px auto;
	transition: width .3s ease-in-out;
	box-shadow: 0px 27px 63px -14px #0000009e, 0px -25px 40px -20px #00000054;
	animation: ${move} 5s ease infinite;
`;

const Card = styled.div`
	width: 210px;
	min-height: 430px;
	padding: 10px 15px;
	background-color: #fff;
	border-radius: 20px;
	text-align: left;
	background-color: #fdf6f6;
	margin: 20px auto;
	transition: transform 0.3s ease-in-out,box-shadow 0.3s ease-in-out;;
	transform-style: preserve-3d;
	transform: rotateY(180deg) translateZ(0px) translateY(0px);
	backface-visibility: hidden;

	:hover {
		cursor: pointer;
		transform: rotateY(180deg) translateZ(150px) translateY(0px);
		box-shadow: 0px 10px 30px 0px rgba(0,0,0,.2);
 
	} 
`;
const Detail = styled.div`
	font-weight: 600;
	font-size: 14px;
	text-transform: uppercase;
	color: #666;
`;

const Title = styled.h2`
	font: bold small-caps normal 18px/20px Palatino, Helvetica, sans-serif;
	text-align: center;
	margin: 18px auto 0px auto;
`;
const Desc = styled.p`
	font-size: 12px;
	margin: 0;
	padding: 5px 15px;
	text-align: center;
`;

export default function CardComp({ colHeight, url, title }) {
	let [rating, setRating] = useState(Math.floor(Math.random()*5));

	return (
		<>
			<Card colHeight={colHeight}>
				<Detail>MOVIE DETAILS</Detail>
				<Img src={url} />
				<Title>{title}</Title>
				<div style={{ textAlign: "center" }}>
					<StarRatingComponent
						name="rate1"
						starCount={5}
						value={rating}
						renderStarIcon={() => <Star size="16" />}
						emptyStarColor={"#777"} 
						onStarClick={nextValue => {
							setRating(nextValue);
						}}
					/>
				</div>
				<Desc>Journalist Eddie Brock is trying to take down Carlton Drake</Desc>
				<Back size="20" style={{color: "#777"}}/>
			</Card>
		</>
	);
}
