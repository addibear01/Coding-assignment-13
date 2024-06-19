import { FC } from "react";
import styled from "styled-components";
import { MyHeroImageProps } from "./MyHeroImage.types";

export function sum(a: number, b:number) {
  return a+ b;
}

const StyledHeroImage = styled.img<{ disabled: boolean; backgroundColor?: string }>`
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  background-color: ${(props) => (props.disabled ? "#ccc" : props.backgroundColor || "#FFFF00")}; // Default to yellow if no backgroundColor is provided
  width: 100%;
  height: auto;
`;

const MyHeroImage: FC<MyHeroImageProps> = ({ disabled = false, src, backgroundColor }) => {
  return <StyledHeroImage disabled={disabled} src={src} backgroundColor={backgroundColor} />;
};

export default MyHeroImage;
