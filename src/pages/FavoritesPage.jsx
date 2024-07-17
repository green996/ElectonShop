import { useSelector } from "react-redux"
import CardProductComponent from '../components/CardProductComponent'


function FavoritesPage() {
    const { favoriteItems } = useSelector((state) => state.favoriteStore);


    return (
        <div className="">
            <div className=" flex flex-col items-center gap-3 lg:flex-row lg:justify-center lg:flex-wrap lg:gap-3">
                {
                    favoriteItems.map((item, index) => {
                        return (
                            <CardProductComponent key={item.id} item={item} activeView={'gridView'} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default FavoritesPage