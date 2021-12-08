import type { NextPage } from "next";
import Link from "next/link";

const ProductList = ({ title, products, url }) => {
  return (
    <main>
      <Link href={url ? url : ""}>
        <h1 className="list-title">{title}</h1>
      </Link>
      <div className="product-list">
        {products.map((product) => (
          <Link href={`${url}/${product.fields.slug}`} key={product.sys.id}>
            <div className="product">
              <h2 className="title">{product.fields.title}</h2>
              <div
                className="product_image"
                style={{
                  backgroundImage: `url("${product.fields.images[0].fields.file.url}")`,
                }}
              ></div>
              <p className="description">
                {product.fields.description.content[0].content[0].value}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ProductList;
