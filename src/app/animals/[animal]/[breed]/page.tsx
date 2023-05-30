import { BreedPageUI } from "./_components/breed-page-ui";

interface BreedPageProps {
  params: {
    animal: string;
    breed: string;
  };
}
const BreedPage = ({ params }: BreedPageProps) => {
  const { animal, breed } = params;

  return (
    <>
      <BreedPageUI headline={`${animal} - ${breed}`} />
    </>
  );
};

export default BreedPage;
