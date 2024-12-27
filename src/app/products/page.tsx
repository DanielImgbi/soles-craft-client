import React from 'react'


import { products } from '@/common/constants';
import Catalog from './components/catalog';

const Products = () => {
    return (
        <div className='pt-20'>
            <Catalog products={products} />
        </div>
    )
}

export default Products
