import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { StyleMain } from "@/pages/styles";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Layout({ children, classname }: any) {
  const router = useRouter();
  const url = router.asPath;
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated with love" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={classname}
        style={{
          maxHeight: "100vh",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {url !== "/" && <Header />}
        <section
          style={{
            display: "flex",
            width: "100%",
            flex: 1,
            overflowY: "hidden",
          }}
        >
          {url !== "/" && <Sidebar />}
          <StyleMain boolean={url !== "/" ? true : false}>{children}</StyleMain>
        </section>
      </div>
    </>
  );
}
