"use client";
import { Flex } from "@/app/_components/flex";
import { Headline } from "@/app/_components/headline";
import { StackX, StackY } from "@/app/_components/stack";
import { Text } from "@/app/_components/text";
import { BreedDogInfoFragment } from "@/graphql/generated/cms.generated";

interface DogBreedPageUIProps {
  data: BreedDogInfoFragment;
}
export const DogBreedPageUI = ({ data }: DogBreedPageUIProps) => {
  return (
    <div>
      <Headline>{data.name}</Headline>
      <Headline level={2}>{data.name}</Headline>
      <Headline level={3}>{data.name}</Headline>
      <Text prose>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </Text>
      <StackY gap={5}>
        <div>
          <StackX gap={2}>
            <Text size={1} color="textAccent">
              Item 1
            </Text>
            <Text size={1} color="textAccent">
              Item 2
            </Text>
          </StackX>
        </div>
        <StackY gap={2}>
          <Text size={1} color="textAccent">
            Item 1
          </Text>
          <Text size={1} color="textAccent">
            Item 2
          </Text>
        </StackY>
      </StackY>
    </div>
  );
};
