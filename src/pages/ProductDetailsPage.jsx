import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductService from "../services/productService"

//icons
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


function ProductDetailsPage() {
    const [currentImage, setCurrentImage] = useState(0)
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { id } = useParams();
    useEffect(() => {
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
                        <div className="flex gap-3">
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
                        <h2 className="text-3xl lg:text-4xl text-mainBlue font-bold">
                            {singleProduct.title}
                        </h2>
                        <span className="text-xl">${singleProduct.price}</span>
                        <p className="flex items-center">
                            <span className="mr-2">Reviews:</span>
                            {singleProduct.rating}
                        </p>
                        <div className="flex items-center mb-2">
                            Availability:{' '}
                            {singleProduct.stock ? (
                                <span className="flex items-center text-green-500 ml-1">
                                    <FaCheck className="mr-1" />
                                    Available
                                </span>
                            ) : (
                                <span className="flex items-center text-red-500 ml-1">
                                    <ImCross className="mr-1" />
                                    Out of stock
                                </span>
                            )}
                        </div>
                        <p className="mb-2">
                            Hurry up! Only {singleProduct.stock} product left in
                            stock!
                        </p>
                        <hr className="my-3" />
                        <p className="text-lg">
                            Total price: <span className="font-bold">${singleProduct.price}</span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );


}

export default ProductDetailsPage