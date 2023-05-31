"use client";
import { Flex } from "@/app/_components/flex";
import { BreedDogInfoFragment } from "@/graphql/generated/cms.generated";
import { styled } from "styled-components";

interface DogBreedPageUIProps {
  data: BreedDogInfoFragment;
}
export const DogBreedPageUI = ({ data }: DogBreedPageUIProps) => {
  return (
    <Flex>
      <Headline>{data.name}</Headline>
    </Flex>
  );
};

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--colors-textAccent);
`;
