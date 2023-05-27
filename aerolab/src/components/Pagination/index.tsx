import { StyledPagination } from "./style";
import Image from "next/image";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { Product } from "@/pages";
import { PRODUCTS_PER_PAGE } from "../Catalog";

type Props = {
  products: Product[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export const Pagination: FunctionComponent<Props> = ({
  products,
  currentPage,
  setCurrentPage,
}) => {
  const TOTAL_PAGES = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviusPage = () => {
    setCurrentPage(currentPage - 1 || 1);
  };

  return (
    <StyledPagination>
      <button disabled={currentPage === 1} onClick={handlePreviusPage}>
        <Image
          src="/assets/icons/chevron-default.svg"
          alt=""
          width="24"
          height="24"
          className="chevron-left"
        />
      </button>

      <p>
        Page <span>{`${currentPage} of ${TOTAL_PAGES}`}</span>
      </p>
      <button onClick={handleNextPage} disabled={currentPage === TOTAL_PAGES}>
        <Image
          className="chevron-right"
          src="/assets/icons/chevron-default.svg"
          alt=""
          width="24"
          height="24"
        />
      </button>
    </StyledPagination>
  );
};
