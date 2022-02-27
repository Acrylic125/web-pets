import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavigationBar from "../components/navigation/NavigationBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Web Pets</title>
      </Head>
      <NavigationBar />
    </div>
  );
};

export default Home;
