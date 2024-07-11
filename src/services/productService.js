import axios from "axios";

class ProductService {
    static getAllProducts = () => axios.get('/products');
    static getAllCategory = () => axios.get('/products/categories')
}

export default ProductService;