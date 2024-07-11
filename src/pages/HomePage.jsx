import { useEffect, useState } from "react";
import ProductService from "../services/productService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getProductHandler } from "../store/productSlice";

function HomePage() {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    function fetchAllProducts() {
        // setLoading(true);
        ProductService.getAllProducts()
            .then((res) => dispatch(getProductHandler((res.data.products))))
            .catch((err) => toast.warning(err))
            .finally(() => setLoading(false))

    }

    useEffect(() => {
        fetchAllProducts();
    }, []);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>true</div>
            )}
        </div>
    );
}

export default HomePage;
