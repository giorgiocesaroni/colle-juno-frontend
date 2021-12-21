import { createClient } from "contentful";
import ProductList from "../../components/ProductList";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const products = await client.getEntries({ content_type: "product" });
  const contacts = await client.getEntries({ content_type: "contatti" });

  return {
    props: {
      products: products.items,
      contacts: contacts.items,
    },
  };
}

const Products = ({ products, contacts }) => {
  console.log(products);

  return (
    <>
      <ProductList title="Prodotti" products={products} url="/products" />
    </>
  );
};

export default Products;
