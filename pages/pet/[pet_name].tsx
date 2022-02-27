import { useRouter } from "next/router";
import NavigationBar from "../../components/navigation/NavigationBar";
import PageHead from "../../components/page/PageHead";

export default function PetPage() {
  const router = useRouter();
  const { pet_name } = router.query;

  return (
    <>
      <PageHead title="Home" />
      <NavigationBar selectedPage="My Pets" />
      {pet_name}
    </>
  );
}
