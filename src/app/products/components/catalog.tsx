"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';

import { type Product } from "@/common/types";
import { genRandomNum } from "@/lib/utils";
import Motion from "@/components/motion";

type CatalogProps = {
    products: Product[]
}

const Catalog = ({ products: data }: CatalogProps) => {
    const [imgHeight, setImgHeight] = useState<number[]>([])
    const [products, setProducts] = useState<Product[][]>([]);

    useEffect(() => {
        const rearrange = (productArr: Product[]) => {
            const total = productArr.length;
            const oneThird = Math.floor(total / 3);
            const twoThird = oneThird * 2;

            const arr1 = productArr.slice(0, oneThird), arr2 = productArr.slice(oneThird, twoThird), arr3 = productArr.slice(twoThird);
            return [arr1, arr2, arr3]
        }

        const p = rearrange(data);
        setProducts((prev) => [...prev, ...p]);
        setImgHeight(data.map((_, i) => genRandomNum() + i));
    }, [data])


    return (
        <main className="w-full  grid grid-cols-2 gap-x-0 align-middle content-center  px-2 columns-sm grid-col md:grid-cols-3 lg:w-5/6">
            {
                products.map((items, index) => (
                    <div key={index} className="flex flex-col items-center relative ">
                        <Motion>


                            {
                                items.map(({ images, id }, i) => (
                                    <Link key={i} href={`/products/${id}`}>
                                        <div key={i} className={`pinterest-grid-item w-[10.7rem] mb-4  md:w-[17rem] lg:w-[22rem]`} style={{
                                            height: imgHeight[index++]
                                        }}>
                                            <Image
                                                src={images[0]}
                                                fill
                                                alt='hero'
                                                objectFit="cover"
                                                sizes="300rem"
                                                style={{ objectFit: 'cover' }}
                                                priority
                                                className="w-full h-full object-cover object-center"
                                            />
                                        </div>
                                    </Link>
                                ))
                            }
                        </Motion>
                    </div>
                ))
            }
        </main>
    )
}


export default Catalog;
