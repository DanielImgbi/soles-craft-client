"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { genRandomNum } from "@/lib/utils";
import { type Product } from "@/common/types";

type CatalogProps = {
  products: Product[];
};

const Catalog = ({ products: data }: CatalogProps) => {
  const [imgHeight, setImgHeight] = useState<number[]>([]);
  const [products, setProducts] = useState<Product[][]>([]);

  const rearrange = useCallback((productArr: Product[]) => {
    const total = productArr.length;
    const oneThird = Math.floor(total / 3);
    const twoThird = oneThird * 2;

    const arr1 = productArr.slice(0, oneThird),
      arr2 = productArr.slice(oneThird, twoThird),
      arr3 = productArr.slice(twoThird);
    return [arr1, arr2, arr3];
  }, []);

  useEffect(() => {
    const p = rearrange(data);
    setProducts((prev) => [...prev, ...p]);
    setImgHeight(data.map((_, i) => genRandomNum() + i));
  }, [data, rearrange]);

  return (
    <main className="w-full grid grid-cols-2 gap-x-0 align-middle content-center px-2 columns-sm grid-col md:grid-cols-3 lg:w-5/6">
      {products.map((items, index) => (
        <div key={index} className="flex flex-col items-center relative ">
          {items.map(({ images, id }, i) => (
            <Link key={i} href={`/products/${id}`}>
              <div
                key={i}
                style={{
                  height: imgHeight[index++],
                }}
                className={`pinterest-grid-item w-[10.7rem] mb-4 overflow-hidden md:w-[17rem] lg:w-[22rem]`}
              >
                <Image
                  fill
                  priority
                  alt="hero"
                  sizes="300rem"
                  src={images[0]}
                  objectFit="cover"
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover transition object-center hover:scale-1108"
                />
              </div>
            </Link>
          ))}
        </div>
      ))}
    </main>
  );
};

export default Catalog;
