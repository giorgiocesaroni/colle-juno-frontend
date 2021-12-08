import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/text.css";
import "../styles/previewlist.css";
import type { AppProps } from "next/app";
import { AppWrapper } from "../state/state";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
