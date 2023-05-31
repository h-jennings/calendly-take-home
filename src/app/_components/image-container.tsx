"use client";

import styled from "styled-components";

export const ImageContainerWide = styled.div`
  position: relative;
  width: var(--sizes-full);
  margin: 0 auto;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  border-radius: 8px;
`;

export const ImageContainerNarrow = styled.div`
  position: relative;
  width: var(--sizes-full);
  margin: 0 auto;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  border-radius: 8px;
`;
