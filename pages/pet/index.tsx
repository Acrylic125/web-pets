import NavigationBar from "../../components/navigation/NavigationBar";
import PageHead from "../../components/page/PageHead";

export default function PetPage() {
  return (
    <>
      <PageHead title="Home" />
      <NavigationBar selectedPage="My Pets" />
    </>
  );
}
