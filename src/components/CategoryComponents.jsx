import { useEffect, useState } from "react"
import ProductService from "../services/productService"
import { toast } from "react-toastify"


function CategoryComponents() {
    const [category, setCategory] = useState([])
    const [isActive, setIsActive] = useState(false)



    useEffect(() => {
        ProductService.getAllCategory()
            .then((res) => setCategory(res.data))
            .catch((err) => toast.warning(err));

    }, []);


    return (
        <div className="bg-[#F4F4F4] py-5">
            <div className="container mx-auto flex items-center flex-col lg:flex-row h-full gap-8">
                <button
                    className="bg-mainBlue text-textWhite px-4 py-2 rounded-md cursor-pointer hover:bg-mainOrange text-sm"
                    onClick={() => setIsActive(!isActive)}
                >
                    {!isActive ? 'Show category' : 'Hide category'}
                </button>
                {isActive && (
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 w-full lg:w-auto">
                        {category.map((cat, index) => (
                            <li
                                key={index}
                                className="bg-mainBlue text-textWhite px-4 py-2 rounded-lg cursor-pointer hover:bg-mainOrange text-center transition-all w-60"
                            >
                                {cat.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );



}

export default CategoryComponents