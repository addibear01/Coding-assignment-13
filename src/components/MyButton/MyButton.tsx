import { FC } from "react";
import styled from "styled-components";
import { MyButtonProps } from "./MyButton.types";

export function sum(a: number, b:number) {
  return a + b;
}

const StyledButton = styled.button<{ disabled: boolean; backgroundColor?: string }>`
  background-color: ${(props) => (props.disabled ? "#ccc" : props.backgroundColor || "#007bff")}; // Default to blue if no backgroundColor is provided
  color: ${(props) => (props.disabled ? "#999" : "white")};
  font-size: 16px;
  padding: 10px 20px;
  border:2px solid black;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const MyButton: FC<MyButtonProps> = ({ disabled = false, label = "button", backgroundColor, onClick }) => {
  return (
    <StyledButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={onClick}  // Pass the onClick prop to StyledButton
    >
      {label}
    </StyledButton>
  );
};

export default MyButton;
