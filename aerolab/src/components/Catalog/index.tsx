import { Container } from "../Container";
import { StyledCatalog } from "./style";
import type { Product } from "@/pages";
import { FunctionComponent } from "react";
import { ProductCard } from "../ProductCard";

type Props = {
  products: Product[];
};

export const Catalog: FunctionComponent<Props> = ({ products }) => {
  return (
    <StyledCatalog>
      <Container>
        <h2 className="catalog__title">
          <span>tech</span> products
        </h2>
        <div>filtros</div>
        <div className="catalog__products">
          {products.map((prod) => (
            <ProductCard
              image={prod.img.url}
              name={prod.name}
              key={prod._id}
              category={prod.category}
              cost={prod.cost}
              id={prod._id}
            />
          ))}
        </div>
        <div>cant products + pagination</div>
      </Container>
    </StyledCatalog>
  );
};
