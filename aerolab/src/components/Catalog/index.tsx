import { Container } from "../Container";
import { StyledCatalog } from "./style";
import type { Product } from "@/pages";
import { FunctionComponent } from "react";
import { ProductCard } from "../ProductCard";
import Image from "next/image";
import { RadioButton } from "../RadioButton";

type Props = {
  products: Product[];
};

export const Catalog: FunctionComponent<Props> = ({ products }) => {
  const categories = products.map((prod) => {
    return prod.category;
  });
  const setCategories = Array.from(new Set(categories));
  return (
    <StyledCatalog>
      <Container>
        <h2 className="catalog__title" id="Catalog">
          <span>tech</span> products
        </h2>
        <div className="filters__container">
          <div className="select__container">
            <label htmlFor="filter">Filter by:</label>
            <select name="" id="filter" className="filters__select">
              <option value="">All Products</option>
              {setCategories.map((cat) => {
                return <option key={cat}>{cat}</option>;
              })}
            </select>
          </div>
          <div className="radio__container">
            <p>Sorted by:</p>
            <RadioButton id="radio-1" name="sort" label="Most recent" />
            <RadioButton id="radio-2" name="sort" label="Lowest Price" />
            <RadioButton id="radio-3" name="sort" label="Highest Price" />
          </div>

          <div className="pagination__container">
            <button>
              <Image
                src="/assets/icons/chevron-default.svg"
                alt=""
                width="24"
                height="24"
                className="chevron-left"
              />
            </button>

            <p>
              Page <span>1 of 2</span>
            </p>
            <button>
              <Image
                className="chevron-right"
                src="/assets/icons/chevron-default.svg"
                alt=""
                width="24"
                height="24"
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
        <div className="catalog__footer">
          <p>x of 32 products</p>
          <div className="pagination__container">
            <button>
              <Image
                src="/assets/icons/chevron-default.svg"
                alt=""
                width="24"
                height="24"
                className="chevron-left"
              />
            </button>

            <p>
              Page <span>1 of 2</span>
            </p>
            <button>
              <Image
                className="chevron-right"
                src="/assets/icons/chevron-default.svg"
                alt=""
                width="24"
                height="24"
              />
            </button>
          </div>
        </div>
      </Container>
    </StyledCatalog>
  );
};
