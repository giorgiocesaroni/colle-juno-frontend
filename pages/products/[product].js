import { createClient } from "contentful";
import Head from "next/head";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

const client = createClient({
  space: process.env.SPACE,
  accessToken: process.env.ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "product" });
  const paths = res.items.map((product) => "/products/" + product.fields.slug);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await client.getEntries({
    content_type: "product",
    "fields.slug": params.product,
  });

  return {
    props: {
      product: res.items[0],
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
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
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