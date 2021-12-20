import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/text.css";
import "../styles/previewlist.css";
import "../styles/product.css";
import "../styles/single-product-checkout.css";
import { AppWrapper } from "../state/state";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
