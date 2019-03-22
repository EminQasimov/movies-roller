import { keyframes } from "styled-components";

export const down = keyframes`
    from{
      perspective-origin: 0 0px;
    } 
    to {
      perspective-origin: 0 600px;
    }
  `;
export const rotate = distance => {
	return keyframes`
  from{
    transform: translate3d(0, 0,${distance}px) rotateY(0deg)  rotateX(-10deg);
    
  }
  50%{
    transform: translate3d(0,0,${distance}px) rotateY(180deg)  rotateX(10deg);
  }
  to {
    transform: translate3d(0,0,${distance}px) rotateY(360deg)  rotateX(0deg);
  }
`;
};

export const move = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;
