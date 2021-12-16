import Head from "next/head";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { createClient } from "contentful";
import { useAppContext } from "../state/state";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const contacts = await client.getEntries({ content_type: "contatti" });

  return {
    props: {
      contacts: contacts.items[0],
    },
  };
}

const About = ({ contacts }) => {
  const context = useAppContext();
  context["string"] = "Hello";
  console.log(useAppContext());

  return (
    <div className="container">
      <Header />
      <main className="product">
        <h1>Contatti</h1>
      </main>
      <Footer contacts={contacts} />
    </div>
  );
};

export default About;
