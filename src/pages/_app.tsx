import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import "./global.css";
import Layout from "@/layouts";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "styled-components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout classname={roboto.className}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
