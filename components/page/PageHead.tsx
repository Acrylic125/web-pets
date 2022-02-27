import Head from "next/head";

export interface PageHeadProps {
  title: string;
}

export default function PageHead({ title }: PageHeadProps) {
  return (
    <Head>
      <meta
        name="keywords"
        content="web, pet, cuddle, dog, internet, companion, fun, game"
      ></meta>
      <meta
        name="description"
        content="Just like your real life pets... really."
      ></meta>
      <meta http-equiv="refresh" content="30"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <title>{title}</title>
    </Head>
  );
}
