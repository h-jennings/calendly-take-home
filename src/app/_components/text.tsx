import styled from "styled-components";
import { FontSize, FontWeight, Leading } from "../_styles/theme";

type TextProps = {
  size?: FontSize;
  weight?: FontWeight;
  color?: "textPrimary" | "textSecondary" | "textAccent";
  lineHeight?: Leading;
};

export const Text = styled.span<TextProps>`
  font-size: ${({ size }) => `var(--fontSizes-${size ?? "0"})`};
  font-weight: ${({ weight }) => `var(--fontWeights-${weight ?? "regular"})`};
  color: ${({ color }) => `var(--colors-${color ?? "textPrimary"})`};
  line-height: ${({ lineHeight }) => `var(--leading-${lineHeight ?? "1"})`};
`;
