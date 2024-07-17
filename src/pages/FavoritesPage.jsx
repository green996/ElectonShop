import { useSelector } from "react-redux"
import CardProductComponent from '../components/CardProductComponent'
// framer
import { motion } from 'framer-motion';

function FavoritesPage() {
    const { favoriteItems } = useSelector((state) => state.favoriteStore);


    // Framer animtion
    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: -100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1,
                duration: 1,
            },
        },
    };
    return (
        <div className="">
            <motion.div variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                    once: true,
                }} className=" flex flex-col items-center gap-3 lg:flex-row lg:justify-center lg:flex-wrap lg:gap-3">
                {
                    favoriteItems.map((item, index) => {
                        return (
                            <CardProductComponent key={item.id} item={item} activeView={'gridView'} />
                        )
                    })
                }
            </motion.div>

        </div>
    )
}

export default FavoritesPage