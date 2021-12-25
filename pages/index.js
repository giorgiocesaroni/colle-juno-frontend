import { createClient } from "contentful";
import ProductList from "../components/ProductList";
import Image from '../components/Image';

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
  console.log(mainImageUrl);

  return (
    <>
      <section className="welcome large">
        <Image className="main-image" url={mainImageUrl} />
      </section>
      <ProductList title="Prodotti" products={products} url="/products" />
      <ProductList title="Attività" products={activities} url="/activities" />
    </>
  );
};

export default Home;
