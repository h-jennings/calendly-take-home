import styled from "styled-components";
import { FontSize, FontWeight, Leading } from "../_styles/theme";

type TextProps = {
  prose?: "true" | "false";
  size?: FontSize;
  weight?: FontWeight;
  color?: "textPrimary" | "textSecondary" | "textAccent";
  lineHeight?: Leading;
};

export const Text = styled.span<TextProps>`
  ${({ prose }) => {
    return (
      prose === "true" &&
      `
      display: block;
      max-width: var(--sizes-prose); 
      line-height: var(--leading-2);
    `
    );
  }};

  font-size: ${({ size }) => `var(--fontSizes-${size ?? "0"})`};
  font-weight: ${({ weight }) => `var(--fontWeights-${weight ?? "regular"})`};
  color: ${({ color }) => `var(--colors-${color ?? "textPrimary"})`};
  line-height: ${({ lineHeight }) => `var(--leading-${lineHeight ?? "1"})`};
`;
