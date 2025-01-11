import { products } from '@/common/constants';
import Catalog from './components/catalog';

const Products = () => {
    return (
        <div className='pt-16 relative flex justify-center items-center'>
            <Catalog products={products} />
        </div>
    )
}

export default Products
