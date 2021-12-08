import Head from "next/head";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { createClient } from "contentful";
import ProductList from "../components/common/PreviewList";
import { useAppContext } from "../state/state";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const home = await client.getEntries({
    content_type: "home",
  });

  const products = await client.getEntries({
    content_type: "product",
  });

  const activities = await client.getEntries({
    content_type: "activities",
  });

  return {
    props: {
      intro: home.items[0],
      products: products.items,
      activities: activities.items,
    },
  };
}

const Home = ({ intro, products, activities }) => {
  const introduction = intro.fields.introduction;
  const introImages = intro.fields.images;
  const mainImageUrl = introImages[0].fields.file.url;

  return (
    <div className="container">
      <Head>
        <title>Colle Juno</title>
      </Head>
      <Header />

      <main className="welcome">
        <div
          className="main_image"
          style={{
            backgroundImage: `url("${mainImageUrl}")`,
          }}
        ></div>
        <p className="introduction">{introduction}</p>
      </main>

      <ProductList title="Prodotti" products={products} url="/products" />
      <ProductList title="Attività" products={activities} url="/activities" />
      <Footer />
    </div>
  );
};

export default Home;
