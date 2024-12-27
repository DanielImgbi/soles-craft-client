"use client"

import Image from "next/image";
import Link from 'next/link';
import Masonry from 'react-masonry-css';

import { type Product } from "@/common/types/product";

type CatalogProps = {
    products: Product[]
}

const Catalog = ({ products }: CatalogProps) => {
    const breakpointColumnsObj = {
        default: 5,
        1100: 3,
        700: 2,
        500: 2
    };

    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {
                products.map(({ images, id }, i) => (
                    <Link href={`/products/${id}`} key={i}>
                        <Image src={images[i > 5 ? 1 : i]}
                            height={i % 2 ? 200 : 400}
                            width={i % 2 ? 200 : 300}
                            alt='hero'
                            className={`rounded-lg flex-grow lg:my-2`}
                        />
                    </Link>
                ))
            }
        </Masonry>
    )
}

export default Catalog
