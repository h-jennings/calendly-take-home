"use client";

import { styled } from "styled-components";

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

interface BreedPageUIProps {
  headline: string;
}
export const BreedPageUI = ({ headline }: BreedPageUIProps) => {
  return (
    <div>
      <Headline>{headline}</Headline>
    </div>
  );
};
