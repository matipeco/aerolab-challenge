import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Walkthrough } from "@/components/Walkthrough";
import axios from "axios";
import { FunctionComponent } from "react";
import { Provider } from "@/context";

export type Product = {
  img: {
    url: string;
    hdUrl: string;
  };
  _id: string;
  name: string;
  cost: number;
  category: string;
};

type Props = {
  products: Product[];
};

const Home: FunctionComponent<Props> = ({ products }) => {
  return (
    <Provider>
      <Navbar />
      <Hero />
      <Walkthrough />
      <Catalog products={products} />
      <Footer />
    </Provider>
  );
};

export async function getServerSideProps(context: any) {
  return axios<Product[]>("https://coding-challenge-api.aerolab.co/products", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  })
    .then((response) => {
      return {
        props: {
          products: response.data,
        },
      };
    })
    .catch((error) => {
      console.error(error);
    });
}

export default Home;
