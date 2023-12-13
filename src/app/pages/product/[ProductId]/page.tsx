"use client";
import Container from "@/app/components/Container";
//import { products } from "../../../../../utils/products";
import ProductDetails from "@/app/components/product/ProductDetails";
import RatingList from "@/app/components/product/RatingList";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
interface ProductDinamicProps {
  productId?: string;
}

type Product = {
  ID: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  inStock: boolean;
  sizeAvailable: string[];
  image: string;
  reviews: string[];
  Category: string;
};

const ProductDinamic = ({ params }: { params: ProductDinamicProps }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("id");
  const [Product, setProduct] = useState<Product>();

  //const product = products.find((item) => item.id === search);

  return (
    
      <div className="p-8">
        <Container>
          {Product ? (
            <>
              <ProductDetails product={Product} />
              <div className="flex flex-col mt-20 gap-4">
                <div>Add Rating</div>
                <RatingList product={Product} />
              </div>
            </>
          ) : (
            <></>
          )}
        </Container>
      </div>
    
  );
};

export default ProductDinamic;
