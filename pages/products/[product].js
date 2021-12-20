import { createClient } from "contentful";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import SingleProductCheckout from "../../components/common/SingleProductCheckout";

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
  const title = props.product.fields.title;
  const description =
    props.product.fields.description.content[0].content[0].value;
  const imageUrl = props.product.fields.images[0].fields.file.url;
  const price = props.product.fields.price;
  const stripePriceId = props.product.fields.stripePriceId;

  return (
    <main className="product">
      <h1>{title}</h1>
      <div
        className="product_image"
        style={{
          backgroundImage: `url("${imageUrl}")`,
        }}
      ></div>
      <p>{description}</p>

      <SingleProductCheckout price={price} stripePriceId={stripePriceId} />

    </main>
  );
};

export default Product;
