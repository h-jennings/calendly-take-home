import { sdk } from "@/graphql/api";
import { cache } from "react";

const getSeo = cache(async (id: string) => {
  return await sdk().getSeo({ id });
});

const Home = async () => {
  const data = await getSeo("3nQpKNWNOcg3vB76gFGMYV");
  const { metadataSeo } = data;

  return <h1>Home</h1>;
};

export default Home;
