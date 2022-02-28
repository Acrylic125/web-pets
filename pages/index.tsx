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
      <div className="bg-sky-50 w-full h-screen flex flex-col">
        <NavigationBar selectedPage="My Pets" />
        <div className="flex flex-1 flex-col md:flex-row">
          <section className="flex-1"></section>
          <aside className="bg-gray-800 w-full md:w-1/5 h-full overflow-y-scroll"></aside>
        </div>
      </div>
    </>
  );
};

export default Home;
