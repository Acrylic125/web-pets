import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../components/navigation/NavigationBar";
import PageHead from "../components/page/PageHead";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <PageHead title="Home" />
      <NavigationBar selectedPage="My Pets" />
    </>
  );
};

export default Home;
