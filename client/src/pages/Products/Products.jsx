import React from "react";
import ProductsComponent from "../../components/Products/ProductsComponent";
import { PRODUCTS } from "../../data/Products";

const Products = () => {
  return (
    <div>
      <ProductsComponent list={PRODUCTS} />
    </div>
  );
};

export default Products;
