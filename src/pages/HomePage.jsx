import { useEffect, useState } from "react";
import ProductService from "../services/productService";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getProductHandler } from "../store/productSlice";
import CardProductComponent from "../components/CardProductComponent";

//icons
import { FaListUl } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";


function HomePage() {
    const [activeView, setActiveView] = useState('gridView')

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const { allProducts } = useSelector((state) => state.productStore)

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
        <div className="container mx-auto">
            <div className="flex items-center justify-end gap-5 cursor-pointer mt-5">
                <FaListUl size={30} onClick={() => { setActiveView('listView') }} style={{
                    backgroundColor: activeView !== 'gridView' ? '#EDA415' : null
                }} className="p-3 h-10 w-10 rounded-md" />
                <IoGrid size={30} onClick={() => { setActiveView('gridView') }} style={{
                    backgroundColor: activeView === 'gridView' ? '#EDA415' : null
                }} className="p-3 h-10 w-10 rounded-md" />
            </div>
            {/*Our product*/}
            <div className={activeView === 'gridView' ? 'flex flex-wrap gap-8 items-center justify-center mt-10' : 'flex flex-col'}>
                {allProducts.map((item, index) => {
                    return <CardProductComponent key={item.id} item={item} activeView={activeView} />
                })}
            </div>
        </div>
    );
}

export default HomePage;
