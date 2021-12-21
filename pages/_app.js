import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/text.css";
import "../styles/previewlist.css";
import "../styles/product.css";
import "../styles/single-product-checkout.css";
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
