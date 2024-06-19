import { FC } from "react";
import styled from "styled-components";
import { MyLabelProps } from "./MyLabel.types";

export function sum(a: number, b:number) {
  return a+ b;
}

const StyledLabel = styled.label<{ disabled: boolean; backgroundColor?: string }>`
  color: ${(props) => (props.disabled ? "#999" : "black")};
  background-color: ${(props) => props.backgroundColor || "purple"}; // Default to purple if no backgroundColor is provided
  /* Additional styles for label */
`;

const MyLabel: FC<MyLabelProps> = ({ disabled = false, text, backgroundColor }) => {
  return (
    <StyledLabel disabled={disabled} backgroundColor={backgroundColor}>
      {text}
    </StyledLabel>
  );
};

export default MyLabel;
