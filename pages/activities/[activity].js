import { createClient } from "contentful";
import Head from "next/head";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

const client = createClient({
  space: process.env.SPACE,
  accessToken: process.env.ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "activities" });
  const paths = res.items.map(
    (activity) => "/activities/" + activity.fields.slug
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "activities",
    "fields.slug": params.activity,
  });

  return {
    props: {
      product: res.items[0],
      params,
    },
  };
}

const Product = (props) => {
  console.log(props);

  const title = props.product.fields.title;
  const description =
    props.product.fields.description.content[0].content[0].value;
  const imageUrl = props.product.fields.images[0].fields.file.url;

  return (
    <div className="container">
      <Header />
      <main className="product">
        <h1>{title}</h1>
        <div
          className="product_image"
          style={{
            backgroundImage: `url("${imageUrl}")`,
          }}
        ></div>
        <p>{description}</p>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
