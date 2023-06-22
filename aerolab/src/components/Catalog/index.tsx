import { Container } from "../Container";
import { StyledCatalog } from "./style";
import type { Product } from "@/pages";
import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { RadioButton } from "../RadioButton";
import { Pagination } from "../Pagination";
import { NotificationContainer } from "../NotificationContainer";

type Props = {
  products: Product[];
};

export type Notification = {
  productName: string;
  id: string;
  type: "error" | "success";
};

export let PRODUCTS_PER_PAGE = 16;

export const Catalog: FunctionComponent<Props> = ({ products }) => {

  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsTablet(width <= 1024);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  isTablet ? PRODUCTS_PER_PAGE = 8 : PRODUCTS_PER_PAGE = 16;

  const [notifications, setNotifications] = useState<Notification[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const START_INDEX = PRODUCTS_PER_PAGE * (currentPage - 1);
  const END_INDEX = PRODUCTS_PER_PAGE * currentPage;

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
          <Pagination
            products={catalogProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="catalog__products">
          {catalogProducts.slice(START_INDEX, END_INDEX).map((prod) => (
            <ProductCard
              image={prod.img.url}
              name={prod.name}
              key={prod._id}
              category={prod.category}
              cost={prod.cost}
              id={prod._id}
              setNotifications={setNotifications}
            />
          ))}
        </div>
        <div className="catalog__footer">
          <p><span>{`${PRODUCTS_PER_PAGE > catalogProducts.length ? catalogProducts.length : PRODUCTS_PER_PAGE} of ${catalogProducts.length} `}</span>products</p>
          <Pagination
            products={catalogProducts}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </Container>

     {notifications.length > 0 && <NotificationContainer notifications={notifications} setNotifications={setNotifications}/>}
    </StyledCatalog>
  );
};
