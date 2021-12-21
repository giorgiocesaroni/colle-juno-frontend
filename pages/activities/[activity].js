import { createClient } from "contentful";
import Image from "../../components/Image";

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
    <>
      <main className="product">
        <h1>{title}</h1>
        <Image url={imageUrl} className="product_image" />
        <p>{description}</p>
      </main>
    </>
  );
};

export default Product;
