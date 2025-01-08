import { products } from '@/common/constants';
import Catalog from './components/catalog';
import NavBar from '@/components/nav';

const Products = () => {
    return (
        <div className='pt-16 relative flex justify-center items-center'>
            <NavBar />
            <Catalog products={products} />
        </div>
    )
}

export default Products
