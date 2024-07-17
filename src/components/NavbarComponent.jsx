//images
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
//icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { useSelector } from 'react-redux';


function NavbarComponent() {

    const { totalProduct } = useSelector(state => state.cartStore);
    const { favoriteTotal } = useSelector((state) => state.favoriteStore)

    return (
        <div className=' bg-mainBlue py-3 xl:py-0 lg:h-24 flex items-center'>
            <div className="container mx-auto lg:flex-row  flex justify-between items-center flex-col gap-4">
                <Link to='/'>
                    <img src={logo} alt='electonShoplogo' />
                </Link>
                {/*search component*/}
                <div className='bg-textWhite rounded-[20px] '>
                    <input type="text" placeholder='Search product...' className='px-6 py-4 rounded-[20px] outline-none placeholder:text-black' />
                    <button className='rounded-[20px] bg-mainOrange text-textWhite px-10 py-5 text-[14px]'>Search</button>
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
                        <Link to='/favorites'>Favorite</Link>
                    </div>
                    {/*Cart/Products*/}
                    <div className='flex items-center gap-1'>
                        <div className='flex items-center'>
                            <CiShoppingCart size={30} />
                            <span className='bg-mainOrange rounded-[50%] w-6 h-6 flex items-center justify-center'>{totalProduct}</span>
                        </div>
                        <Link to='/cartProducts'>Cart</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavbarComponent