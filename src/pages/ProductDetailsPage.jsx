import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ProductService from "../services/productService"

//icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Rating } from "@mui/material";
//import ButtonComponent from "../components/ButtonComponent";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { saveInCartHandler } from "../store/cartSlice";


function ProductDetailsPage() {
    const [currentImage, setCurrentImage] = useState(0)
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams();

    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        const fetchProduct = async () => {
            try {
                const res = await ProductService.getSingleProduct(id);
                setSingleProduct(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    //to gsm REDUX
    function handleProduct() {
        dispatch(saveInCartHandler(singleProduct))
    }

    return (
        <>
            {isLoading ? (
                <>Loading...</>
            ) : (
                <div className="flex flex-col lg:flex-row container mx-auto mb-12">
                    {/* Left side */}
                    <div className="flex flex-col gap-7 justify-center items-center lg:gap-3 lg:w-1/2">
                        <img
                            src={singleProduct.images[currentImage]}
                            alt={singleProduct.title}
                            className="border border-mainBlue rounded-2xl h-96 cursor-pointer"
                        />
                        {/* Image thumbnails */}
                        <div className="flex flex-wrap gap-3">
                            {singleProduct.images.map((el, i) => (
                                <img
                                    src={el}
                                    key={i}
                                    alt="..."
                                    className={`${currentImage === i
                                        ? 'border-mainOrange'
                                        : 'border-mainBlue'
                                        } w-24 h-24 p-1 object-cover border border-mainBlue rounded-2xl cursor-pointer`}
                                    onClick={() => setCurrentImage(i)}
                                />
                            ))}
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="lg:w-1/2 lg:pl-8">
                        <h2 className="text-3xl lg:text-3xl text-mainBlue font-bold">
                            {singleProduct.title}
                        </h2>
                        <span className="text-xl font-bold">${singleProduct.price}</span>
                        <div className="flex items-center gap-2">
                            <span className="mr-2">Reviews:</span>
                            <Rating name="half-rating-read" defaultValue={singleProduct.rating} precision={0.5} readOnly />
                        </div>
                        <div className="flex items-center mb-2">
                            {singleProduct.stock ? (
                                <span className="flex items-center text-green-500 ml-1 gap-2">
                                    <FaCheck color="#30BD657" size={20} />
                                    In stock
                                </span>
                            ) : (
                                <span className="flex items-center text-red-500 ml-1 gap-2">
                                    <ImCross color="#FF0000" size={20} />
                                    Out of stock
                                </span>
                            )}
                        </div>
                        <div className="mb-2">
                            Hurry up! Only <span className="font-bold underline">{singleProduct.stock}</span>  product left in
                            stock!
                        </div>
                        <hr className="my-3" />
                        <div className="text-lg">
                            Total price: <span className="font-bold">${singleProduct.price}</span>
                        </div>
                        {/*Add favorite section*/}
                        <div className="flex items-center gap-3 mt-3">
                            {/*<ButtonComponent label='Add Cart' bgColor='#EDA415' textColor='#fff' />*/}
                            {/*fix add cart to redux*/}
                            <Link to='/cartProducts' className="px-6 py-3 rounded-full bg-mainOrange text-textWhite " onClick={() => handleProduct()}>
                                Add Cart
                            </Link>
                            <button className="px-6 py-3 rounded-full bg-slate-400 ">
                                <FaRegHeart size={28} color="#fff" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );


}

export default ProductDetailsPage