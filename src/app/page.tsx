import { redirect } from "next/navigation";

const Home = async () => {
  return redirect("/animals/dogs");
};

export default Home;
