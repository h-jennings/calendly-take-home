import styled from "styled-components";
import { FontSize, FontWeight, Leading } from "../_styles/theme";

type HeadlineProps = {
  level?: 1 | 2 | 3;
  color?: "textPrimary" | "textSecondary" | "textAccent";
  leading?: Leading;
};

export const Headline = styled.h2<HeadlineProps>`
  font-weight: var(--fontWeights-bold);

  ${({ level }) => {
    switch (level) {
      case 2: {
        return `
          font-size: var(--fontSizes-3);
          line-height: var(--leading-0);
        `;
      }
      case 3: {
        return `
          font-size: var(--fontSizes-2);
          line-height: var(--leading-1);
        `;
      }
      case 1:
      default: {
        return `
          font-size: var(--fontSizes-4);
          line-height: var(--leading-0);
        `;
      }
    }
  }};
  color: ${({ color }) => `var(--colors-${color ?? "textPrimary"})`};
  line-height: ${({ leading }) =>
    leading != null && `var(--leading-${leading})`};
`;
