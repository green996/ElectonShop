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


    return (<>
        {isLoading ?
            (<>Loading...</>)
            :
            (
                <>
                    <div className=" flex flex-col container mx-auto mb-12">
                        {/*left side*/}
                        <div className="flex mt-12 flex-col gap-7 justify-center items-center lg:gap-3 lg:flex-row ">
                            <img src={singleProduct.images[currentImage]} alt={singleProduct.title} className="border border-mainBlue rounded-2xl h-96 cursor-pointer" />
                        </div>
                        <div className="flex gap-3">
                            {singleProduct.images.map((el, i) => {
                                return <img src={el} key={i} alt="..." className={`${currentImage === i ? 'border-mainOrange' : 'border-mainBlue'} w-24 h-24 p-1 object-cover border border-mainBlue rounded-2xl`} onClick={() => setCurrentImage(i)} />
                            })}
                        </div>
                        {/*right side*/}
                        <div>
                            <h2 className=" text-[30px] text-mainBlue font-bold">{singleProduct.title}</h2>
                            <span>${singleProduct.price}</span>
                            <p>
                                <span>Reviews:</span>
                                {singleProduct.rating}
                            </p>
                            Availability:
                            {singleProduct.stock ?
                                (<span>
                                    <FaCheck />
                                    Available
                                </span>) :
                                (<span>
                                    <ImCross />
                                    Out of stock
                                </span>
                                )}
                            <p>Hurry up! Only {singleProduct.stock} product left in stock!</p>
                            <hr className="mt-3" />
                            <p>Total price: <span>${singleProduct.price}</span></p>
                        </div>
                    </div></>)}
    </>
    )
}

export default ProductDetailsPage