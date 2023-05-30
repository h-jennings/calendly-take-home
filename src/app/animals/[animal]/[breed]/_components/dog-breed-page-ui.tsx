"use client";
import { BreedDogInfoFragment } from "@/graphql/generated/cms.generated";
import { styled } from "styled-components";

interface DogBreedPageUIProps {
  data: BreedDogInfoFragment;
}
export const DogBreedPageUI = ({ data }: DogBreedPageUIProps) => {
  return <Headline>{data.name}</Headline>;
};

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;
