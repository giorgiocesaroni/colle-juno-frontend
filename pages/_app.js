import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/text.css";
import "../styles/previewlist.css";
import "../styles/product.css";
import "../styles/single-product-checkout.css";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

function MyApp({ Component, pageProps }) {
  const [locked, setLocked] = useState(false);
  
    return (
    <div className="container">
      <Header setLocked={locked, setLocked} />
      <Component className={locked ? "locked" : ""} {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
