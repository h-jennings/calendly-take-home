import { CSSProperties } from "react";
import styled from "styled-components";
import { Space } from "../_styles/theme";

type FlexProps = {
  direction?: CSSProperties["flexDirection"];
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
  gap?: Space;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "stretch"};
  gap: ${({ gap }) => gap != null && `var(--space-${gap})`};
`;
