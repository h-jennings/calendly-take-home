import { Headline } from "@/app/_components/headline";
import { ImageContainerWide } from "@/app/_components/image-container";
import { NextContentfulImage } from "@/app/_components/next-contentful-image";
import { ContentfulRichText } from "@/app/_components/rich-text";
import { StackY } from "@/app/_components/stack";
import { sdk } from "@/graphql/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { BreedList } from "./_components/breed-list";
import { ContentWrapper, RichTextContainer } from "./page.styles";

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

  const { breedCollection, name, content, image } = page;
  const breedCollectionId = breedCollection?.sys.id;

  return (
    <ContentWrapper gap={7}>
      <StackY gap={5}>
        <Headline align="center" as="h1" level={1}>
          {name}
        </Headline>
        <ImageContainerWide>
          {image?.url != null && (
            <NextContentfulImage
              src={image?.url}
              alt={image?.description ?? ""}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          )}
        </ImageContainerWide>
        <RichTextContainer>
          <ContentfulRichText json={content?.json} />
        </RichTextContainer>
      </StackY>
      {/* @ts-expect-error - Async Server Component */}
      <BreedList
        breedCollectionId={breedCollectionId}
        animalId={params.animal}
      />
    </ContentWrapper>
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
