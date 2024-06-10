import { FC } from "react";
import styled from "styled-components";
import { MyTextProps } from "./MyText.types";

const StyledText = styled.p<{ disabled: boolean; backgroundColor?: string }>`
  color: ${(props) => (props.disabled ? "#999" : "black")};
  background-color: ${(props) => (props.disabled ? "#ccc" : props.backgroundColor || "#FFFF00")}; // Default to yellow if no backgroundColor is provided
  padding: 10px; // Add padding for better readability
`;

const MyText: FC<MyTextProps> = ({ disabled = false, text, backgroundColor }) => {
  return <StyledText disabled={disabled} backgroundColor={backgroundColor}>{text}</StyledText>;
};

export default MyText;
