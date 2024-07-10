import axios from "axios";

class ProductService {
    static getAllCategory = () => axios.get('/products/categories')
}

export default ProductService;