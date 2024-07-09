//icons
import { GrLocation } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
function HeaderComponent() {
    return (
        <div className="container mx-auto flex-col sm:flex-row py-3 flex justify-between items-center h-[70px]">
            <p className="text-sm">Need help? Call us: (+98) 0234 456 789</p>
            <div className="flex items-center gap-9">
                <div className="flex items-center gap-3 text-sm" >
                    <GrLocation size={24} />
                    <span>Our store</span>
                    <div className="flex items-center gap-3 text-sm" >
                        <CiDeliveryTruck size={24} />
                        <span>Track your order</span>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeaderComponent