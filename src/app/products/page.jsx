import AllProducts from "@/components/productsPage/AllProducts";
import Brands from "@/components/productsPage/Brands";
import Categoris from "@/components/productsPage/Categoris";
import DisCoiunt from "@/components/productsPage/DisCoiunt";
import Popular from "@/components/productsPage/Popolur";
import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <DisCoiunt />
      <Popular />
      <Categoris/>
      <AllProducts/>
      <Brands/>
    </div>
  );
};

export default ProductsPage;
