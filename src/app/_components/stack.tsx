import styled from "styled-components";
import { Space } from "../_styles/theme";

type StackProps = {
  gap?: Space;
  align?: "flex-start" | "center" | "flex-end" | "stretch";
};

export const StackY = styled.div<StackProps>`
  display: flex;
  width: var(--sizes-full);
  flex-direction: column;
  gap: ${({ gap }) => gap != null && `var(--space-${gap})`};
  align-items: ${({ align }) => align ?? "stretch"};
`;

export const StackX = styled.div<StackProps>`
  display: flex;
  flex-direction: row;
  gap: ${({ gap }) => gap != null && `var(--space-${gap})`};
  align-items: ${({ align }) => align ?? "stretch"};
`;
