import { Headline } from "@/app/_components/headline";
import { StackY } from "@/app/_components/stack";
import { sdk } from "@/graphql/api";
import { cache } from "react";
import { Container, ListItem, ListLink } from "./breed-list.styles";

export const BreedList = async ({
  breedCollectionId,
  animalId,
}: {
  breedCollectionId?: string;
  animalId: string;
}) => {
  if (!breedCollectionId) return null;

  const data = await getBreedCollection(breedCollectionId);
  const breeds = data.breedCollection?.breedsCollection?.items ?? [];

  return (
    <Container gap={4}>
      <Headline level={2}>Breeds</Headline>
      <StackY as="ul" gap={2} role="list">
        {breeds.map((b) => {
          const { breed } = b ?? {};
          return (
            <ListItem key={b?.sys.id}>
              <ListLink href={`/animals/${animalId}/${b?.slug}`}>
                {breed?.name}
              </ListLink>
            </ListItem>
          );
        })}
      </StackY>
    </Container>
  );
};

const getBreedCollection = async (id: string) => {
  return await sdk({
    next: { tags: ["getBreedCollection", id] },
  }).getBreedCollection({ id });
};
