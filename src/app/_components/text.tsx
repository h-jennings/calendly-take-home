"use client";

import styled from "styled-components";
import { FontSize, FontWeight, Leading } from "../_styles/theme";

type TextProps = {
  prose?: "true" | "false";
  size?: FontSize;
  weight?: FontWeight;
  align?: "left" | "center" | "right";
  color?: "textPrimary" | "textSecondary" | "textAccent";
  leading?: Leading;
};

export const Text = styled.span<TextProps>`
  text-align: ${({ align }) => align ?? "left"};
  font-size: ${({ size }) => `var(--fontSizes-${size ?? "0"})`};
  font-weight: ${({ weight }) => `var(--fontWeights-${weight ?? "regular"})`};
  color: ${({ color }) => `var(--colors-${color ?? "textPrimary"})`};
  line-height: ${({ leading }) => `var(--leading-${leading ?? "1"})`};

  ${({ prose }) => {
    return (
      prose === "true" &&
      `
      font-size: var(--fontSizes-1);
      display: block;
      max-width: var(--sizes-prose); 
      line-height: var(--leading-2);
    `
    );
  }};
`;
