//icons
import { IoPaperPlaneSharp } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
function SubscribedComponent() {
    return (
        <section className="bg-textWhite px-10 py-7 mt-10 flex flex-col lg:flex-row items-center justify-between rounded-2xl">
            <h3 className="text-2xl font-bold text-mainBlue">Subscribe newsletter</h3>
            <div className="bg-mainOrange rounded-xl flex items-center px-4 py-2">
                <input type="text" placeholder="Enter yout email" className="bg-transparent outline-none text-textWhite placeholder:text-textWhite" />
                <IoPaperPlaneSharp size={25} color="white" />
            </div>
            <div className='flex items-center gap-[10px]'>
                <span className="text-2xl">Call us 24/7</span>
                <span className="text-2xl">+381691054643</span>
                <FaHeadphones size={40} color={'#EDA415'} />
            </div>
        </section>
    )
}

export default SubscribedComponent