import { sdk } from "@/graphql/api";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

interface AnimalPageParams {
  params: {
    animal: string;
  };
}
const AnimalPage = async ({ params }: AnimalPageParams) => {
  const data = await getPageData(params.animal);
  const page = data.pageAnimalCollection?.items[0];

  if (!page) {
    notFound();
  }

  const { name, breedCollection } = page;
  const breedCollectionId = breedCollection?.sys.id;

  return (
    <div>
      <h1>{name}</h1>
      {breedCollectionId != null && (
        // @ts-expect-error - Async component
        <BreedList
          animalId={params.animal}
          breedCollectionId={breedCollectionId}
        />
      )}
    </div>
  );
};

const getBreedCollection = cache(async (id: string) => {
  return await sdk().getBreedCollection({ id });
});

const BreedList = async ({
  breedCollectionId,
  animalId,
}: {
  breedCollectionId: string;
  animalId: string;
}) => {
  const data = await getBreedCollection(breedCollectionId);
  const breeds = data.breedCollection?.breedsCollection?.items ?? [];

  return (
    <div>
      <h2>Breeds</h2>
      <ul>
        {breeds.map((b) => {
          const { breed } = b ?? {};
          return (
            <li key={b?.sys.id}>
              <Link href={`/animals/${animalId}/${b?.slug}`}>
                {breed?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const getPageData = cache(async (animal: string) => {
  return await sdk().getAnimalPage({ slug: animal });
});

export const generateMetadata = async ({
  params,
}: AnimalPageParams): Promise<Metadata> => {
  const data = await getPageData(params.animal);
  const page = data.pageAnimalCollection?.items[0];
  const { seo } = page ?? {};

  return {
    title: seo?.title,
    description: seo?.description,
    robots: seo?.hideFromSearch ? "noindex, nofollow" : "index, follow",
  };
};

export default AnimalPage;
