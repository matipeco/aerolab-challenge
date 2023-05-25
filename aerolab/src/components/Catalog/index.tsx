import { Container } from "../Container";
import { StyledCatalog } from "./style";
import type { Product } from "@/pages";
import { ChangeEvent, FunctionComponent, useState } from "react";
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

  const [selectedFilter, setSelectedFilter] = useState("");

  const [selectedOrder, setSelectedOrder] = useState("most-recent");

  const catalogProducts = products
    .filter((prod) =>
      selectedFilter ? prod.category === selectedFilter : prod
    )
    .sort((a, b) => {
      if (selectedOrder === "most-recent") {
        return 0;
      }
      return selectedOrder === "highest-price"
        ? b.cost - a.cost
        : a.cost - b.cost;
    });

  const handleChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(ev.target.value);
  };

  const selectOrder = (ev: ChangeEvent<HTMLInputElement>) => {
    setSelectedOrder(ev.target.value);
  };

  return (
    <StyledCatalog>
      <Container>
        <h2 className="catalog__title" id="Catalog">
          <span>tech</span> products
        </h2>
        <div className="filters__container">
          <div className="select__container">
            <label htmlFor="filter">Filter by:</label>
            <select
              name=""
              id="filter"
              className="filters__select"
              onChange={handleChange}
            >
              <option value="">All Products</option>
              {setCategories.map((cat) => {
                return <option key={cat}>{cat}</option>;
              })}
            </select>
          </div>
          <div className="radio__container">
            <p>Sorted by:</p>
            <RadioButton
              id="radio-1"
              name="sort"
              label="Most recent"
              value="most-recent"
              onChange={selectOrder}
              checked={selectedOrder === "most-recent"}
            />
            <RadioButton
              id="radio-2"
              name="sort"
              label="Lowest Price"
              value="lowest-price"
              onChange={selectOrder}
              checked={selectedOrder === "lowest-price"}
            />
            <RadioButton
              id="radio-3"
              name="sort"
              label="Highest Price"
              value="highest-price"
              onChange={selectOrder}
              checked={selectedOrder === "highest-price"}
            />
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
          {catalogProducts.map((prod) => (
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
