"use client";
import React, { useState, useEffect } from "react";
import { products } from "../../../../utils/products";
import Container from "@/app/components/Container";
import Products from "@/app/components/product/Products";

const ProductsPage: React.FC = () => {

  //const product = [products];

  return (     
        <Products />
  );
};

export default ProductsPage;
