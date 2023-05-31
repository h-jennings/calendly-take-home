"use client";

import { Grid } from "@/app/_components/grid";
import { StackY } from "@/app/_components/stack";
import styled from "styled-components";

export const ContentWrapper = styled(StackY)`
  padding-bottom: var(--space-7);
`;

export const ContentGrid = styled(Grid)`
  grid-template-columns: 1fr 2fr;
  position: sticky;
  top: calc(var(--nav-height) + var(--space-5));
`;
