//images
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
//icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useDispatch, useSelector } from 'react-redux';

//framer motion
import { motion } from "framer-motion"
import { useRef } from 'react';
import { saveSearchValue } from '../store/productSlice';


function NavbarComponent() {
    const searchValue = useRef()
    const { totalProduct } = useSelector(state => state.cartStore);
    const { favoriteTotal } = useSelector((state) => state.favoriteStore);

    const dispatch = useDispatch()

    function searchHandle() {
        dispatch(saveSearchValue(searchValue.current.value));
        searchValue.current.value = '';
    }

    return (
        <div className=' bg-mainBlue py-3 xl:py-0 lg:h-24 flex items-center'>
            <div className="container mx-auto lg:flex-row  flex justify-between items-center flex-col gap-4">
                <Link to='/'>
                    <img src={logo} alt='electonShoplogo' />
                </Link>
                {/*search component*/}
                <div className='bg-textWhite rounded-[20px] '>
                    <input ref={searchValue} type="text" placeholder='Search product...' className='px-6 py-4 rounded-[20px] outline-none placeholder:text-black' />
                    <button onClick={() => searchHandle()} className='rounded-[20px] bg-mainOrange text-textWhite px-10 py-5 text-[14px]'>Search</button>
                </div>
                {/*General info*/}
                <div className='flex items-center gap-3 text-textWhite'>
                    {/*Login: Clerk library*/}
                    <div className='flex items-center gap-1'>
                        <CiUser size={30} />
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSwitchSessionUrl='/' />
                        </SignedIn>
                    </div>
                    {/*Favorite*/}
                    <div className='flex items-center gap-1'>
                        <div className='flex items-center'>
                            <CiHeart size={30} />
                            <span className='bg-mainOrange rounded-[50%] w-6 h-6 flex items-center justify-center'>{favoriteTotal}</span>
                        </div>
                        <motion.div whileHover={{ scale: 0.8 }}>
                            <Link to='/favorites'>Favorite</Link>
                        </motion.div>
                    </div>
                    {/*Cart/Products*/}
                    <div className='flex items-center gap-1'>
                        <div className='flex items-center'>
                            <CiShoppingCart size={30} />
                            <span className='bg-mainOrange rounded-[50%] w-6 h-6 flex items-center justify-center'>{totalProduct}</span>
                        </div>
                        <motion.div whileHover={{ scale: 0.8 }} >
                            <Link to='/cartProducts'>Cart</Link>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavbarComponent