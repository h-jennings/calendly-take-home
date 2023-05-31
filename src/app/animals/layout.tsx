import { RootAnimalsLayout } from "./_components/root-animals-layout";

interface AnimalsLayoutProps {
  children: React.ReactNode;
}
const AnimalsLayout = ({ children }: AnimalsLayoutProps) => {
  return <RootAnimalsLayout>{children}</RootAnimalsLayout>;
};

export default AnimalsLayout;
