import Head from "next/head";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { createClient } from "contentful";
import ProductList from "../components/common/PreviewList";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    revalidate: 10,
  };
}

const Home = ({ intro, products, activities }) => {
  const introduction = intro.fields.introduction;
  const introImages = intro.fields.images;
  const mainImageUrl = introImages[0].fields.file.url;

  useEffect(() => {
    const products = gsap.utils.toArray(".product");

    products.forEach((p) => {
      gsap.from(p, {
        scrollTrigger: p,
        // start: 200,
        opacity: "0",
        // delay: ".25",
      });
    });
  });

  return (
    <div className="container">
      <Head>
        <title>Colle Juno</title>
      </Head>
      <Header />

      <main className="welcome large">
        <div
          className="main_image"
          style={{
            backgroundImage: `url("${mainImageUrl}")`,
          }}
        ></div>
        {/* <p className="introduction">{introduction}</p> */}
      </main>

      <ProductList title="Prodotti" products={products} url="/products" />
      <ProductList title="Attività" products={activities} url="/activities" />
      <Footer />
    </div>
  );
};

export default Home;
