"use client";

import { StackY } from "@/app/_components/stack";
import styled from "styled-components";

export const ContentWrapper = styled(StackY)`
  padding-bottom: var(--space-7);
`;

export const ImageContainer = styled.div`
  position: relative;
  width: var(--sizes-full);
  margin: 0 auto;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
`;

export const RichTextContainer = styled.div`
  padding-left: var(--space-4);

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;
