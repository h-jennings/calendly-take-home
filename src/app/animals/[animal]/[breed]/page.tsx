import { Headline } from "@/app/_components/headline";
import { ImageContainerNarrow } from "@/app/_components/image-container";
import { NextContentfulImage } from "@/app/_components/next-contentful-image";
import { ContentfulRichText } from "@/app/_components/rich-text";
import { StackY } from "@/app/_components/stack";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
} from "@/app/_components/table";
import { sdk } from "@/graphql/api";
import { BreedDogInfoFragment } from "@/graphql/generated/cms.generated";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { ContentGrid, ContentWrapper } from "./page.styles";

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
      {(() => {
        switch (breed?.__typename) {
          case "BreedDog": {
            return <BreedDogPage data={breed} />;
          }
          default: {
            return null;
          }
        }
      })()}
    </>
  );
};

interface BreedDogPageProps {
  data: BreedDogInfoFragment;
}
const BreedDogPage = ({ data }: BreedDogPageProps) => {
  const { name, bio, image, lifespan, friendliness, shedRate } = data;

  const lifespanString = `${lifespan?.range?.[0] ?? ""} - ${
    lifespan?.range?.[1] ?? ""
  } years`;

  return (
    <ContentWrapper>
      <ContentGrid columnGap={4} rowGap={5}>
        <StackY gap={3}>
          {image?.url != null && (
            <ImageContainerNarrow>
              <NextContentfulImage
                src={image.url}
                alt={image?.description ?? ""}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </ImageContainerNarrow>
          )}
          <Headline as="h1" level={3}>
            {name}
          </Headline>
        </StackY>
        <StackY gap={5}>
          <div>
            <ContentfulRichText json={bio?.json} />
          </div>
          <Table>
            <TableHead>
              <tr>
                <TableHeaderCell>Life span</TableHeaderCell>
                <TableHeaderCell>Friendliness (1-5)</TableHeaderCell>
                <TableHeaderCell>Shed rate (1-5)</TableHeaderCell>
              </tr>
            </TableHead>
            <TableBody>
              <tr>
                <TableCell>{lifespanString}</TableCell>
                <TableCell>{friendliness}</TableCell>
                <TableCell>{shedRate}</TableCell>
              </tr>
            </TableBody>
          </Table>
        </StackY>
      </ContentGrid>
    </ContentWrapper>
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
