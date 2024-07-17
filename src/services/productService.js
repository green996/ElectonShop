import axios from "axios";

class ProductService {
    static getAllProducts = () => axios.get(`/products`);
    static getAllCategory = () => axios.get('/products/categories');
    static getSingleProduct = (id) => axios.get(`/products/${id}`);
    static getSearchProducts = (search) => axios.get(`products/search?q=${search}`)
}

export default ProductService;