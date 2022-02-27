import { useRouter } from "next/router";

export default function PetPage() {
  const router = useRouter();
  const { pet_name } = router.query;

  return <div>{pet_name}</div>;
}
