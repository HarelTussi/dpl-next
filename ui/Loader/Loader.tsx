import Paragraph from "@ui/Paragraph";
import React from "react";
import styled, { css } from "styled-components";
type Props = {
  size?: number;
  stroke?: number;
  centered?: boolean;
  text?: string;
};

const StyledLoader = styled.div<Props>`
  ${(props) =>
    props.centered
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          background-color: rgba(255, 255, 255, 0.75);
        `
      : css`
          position: relative;
        `};

  .lds-ring__container {
    position: relative;
  }

  .lds-ring {
    display: inline-block;
    position: relative;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border: ${(props) => props.stroke}px solid var(--clr-primary-30);
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--clr-primary-90) transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = ({
  size = 40,
  stroke = 2,
  centered = false,
  text = "Loading...",
}: Props) => {
  return (
    <StyledLoader size={size} stroke={stroke} centered={centered}>
      <div className="lds-ring__container">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Paragraph className="font-semibold">{text}</Paragraph>
    </StyledLoader>
  );
};

export default Loader;
