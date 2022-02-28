import NavigationBar from "../../components/navigation/NavigationBar";
import PageHead from "../../components/page/PageHead";

export default function PetPage() {
  return (
    <>
      <PageHead title="Home" />
      <div className="w-full h-full">
        <NavigationBar selectedPage="My Pets" />
        <div>
          <aside></aside>
        </div>
      </div>
    </>
  );
}
