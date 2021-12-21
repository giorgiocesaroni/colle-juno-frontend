import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/header.css";
import "../styles/footer.css";
import "../styles/home.css";
import "../styles/text.css";
import "../styles/product-list.css";
import "../styles/product-page.css";
import "../styles/product.css";
import "../styles/cart.css";
import Layout from '../components/Layout';
import { CartProvider } from "react-use-cart";


export default function MyApp({ Component, pageProps }) {
  return <>
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  </>
}
