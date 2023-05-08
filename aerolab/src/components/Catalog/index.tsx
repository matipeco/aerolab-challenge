import { Container } from "../Container";
import { StyledCatalog } from "./style";
import type { Product } from "@/pages";
import { FunctionComponent } from "react";
import { ProductCard } from "../ProductCard";
import Image from "next/image";

type Props = {
  products: Product[];
};

export const Catalog: FunctionComponent<Props> = ({ products }) => {
  const categories = products.map((prod) => {
    return prod.category;
  });
  const setCategories = Array.from(new Set(categories));
  console.log(setCategories);
  return (
    <StyledCatalog>
      <Container>
        <h2 className="catalog__title">
          <span>tech</span> products
        </h2>
        <div>
          <label htmlFor="filter">Filter by:</label>
          <select name="" id="filter">
            <option value="">All Products</option>
            {setCategories.map((cat) => {
              return <option key={cat}>{cat}</option>;
            })}
          </select>
          <p>Sorted by:</p>
          <label htmlFor="radio-1">Most recent</label>
          <input type="radio" id="radio-1" name="sort" />
          <label htmlFor="radio-2">Lowest Price</label>
          <input type="radio" id="radio-2" name="sort" />
          <label htmlFor="radio-3">Highest Price</label>
          <input type="radio" id="radio-3" name="sort" />

          <div>
            <button>
              <Image
                src="/assets/icons/chevron-default.svg"
                alt=""
                width="40"
                height="40"
                className="chevron-left"
              />
            </button>
            <p>{`Page 1 of 2`}</p>
            <button>
              <Image
                className="chevron-right"
                src="/assets/icons/chevron-default.svg"
                alt=""
                width="40"
                height="40"
              />
            </button>
          </div>
        </div>
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
