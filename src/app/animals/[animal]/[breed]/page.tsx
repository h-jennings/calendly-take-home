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
      <h1>{animal}</h1>
      <h2>{breed}</h2>
    </>
  );
};

export default BreedPage;
