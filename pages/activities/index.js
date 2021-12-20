import { createClient } from "contentful";
import ProductList from "../../components/common/PreviewList";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "activities" });

  return {
    props: {
      activities: res.items,
    },
  };
}

const Activities = ({ activities }) => {
  console.log(activities);

  return (
    <ProductList products={activities} title="Attività" url="/activities" />
  );
};
export default Activities;
