import { createClient } from "contentful";
import Product from "../../components/Product";
import Image from '../../components/Image';

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

const ProductPage = ({ product }) => {
  const title = product.fields.title;
  const description = product.fields.description.content[0].content[0].value;
  const imageUrl = product.fields.images[0].fields.file.url;
  const price = product.fields.price;
  const stripePriceId = product.fields.stripePriceId;

  return (
    <main className="product-page">
      <h1>{title}</h1>
      <Image url={imageUrl} className="product_image" />
      <p>{description}</p>

      {/* If price exists... */}
      {price ? <Product price={price} stripePriceId={stripePriceId} /> : ''}

    </main>
  );
};

export default ProductPage;
