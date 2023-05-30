import { redirect } from "next/navigation";

const AnimalsPage = async () => {
  return redirect("/animals/dogs");
};

export default AnimalsPage;
