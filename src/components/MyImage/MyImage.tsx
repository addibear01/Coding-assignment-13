import { FC } from "react";
import styled from "styled-components";
import { MyImageProps } from "./MyImage.types";

const StyledImage = styled.img<{ disabled: boolean }>`
  /* Add styles here */
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  /* Additional styles for hero image */
`;

const MyImage: FC<MyImageProps> = ({ disabled = false, src }) => {
  return <StyledImage disabled={disabled} src={src} />;
};

export default MyImage;
