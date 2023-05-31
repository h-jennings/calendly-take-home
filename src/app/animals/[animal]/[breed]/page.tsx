import { sdk } from "@/graphql/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { DogBreedPageUI } from "./_components/dog-breed-page-ui";

interface BreedPageProps {
  params: {
    animal: string;
    breed: string;
  };
}
const BreedPage = async ({ params }: BreedPageProps) => {
  const data = await getPageData(params.breed);
  const page = data.pageBreedCollection?.items[0];

  if (!page) {
    notFound();
  }

  const { breed } = page;
  return (
    <>
      {/* Need to render UI separately from the server components because styled-components can't render on the server  */}
      {(() => {
        switch (breed?.__typename) {
          case "BreedDog": {
            return <DogBreedPageUI data={breed} />;
          }
          default: {
            return null;
          }
        }
      })()}
    </>
  );
};

const getPageData = cache(async (breed: string) => {
  return await sdk().getBreedPage({ slug: breed });
});

export const generateMetadata = async ({
  params,
}: BreedPageProps): Promise<Metadata> => {
  const data = await getPageData(params.breed);
  const page = data.pageBreedCollection?.items[0];
  const { seo } = page ?? {};

  return {
    title: seo?.title,
    description: seo?.description,
    robots: seo?.hideFromSearch ? "noindex, nofollow" : "index, follow",
  };
};

export default BreedPage;
