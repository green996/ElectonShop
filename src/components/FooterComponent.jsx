

import { FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

//exports
import {
    aboutUs,
    footerContent,
    getHelp,
} from '../exports/footerContent.js';

// icons

import SubscribedComponent from './SubscribedComponent.jsx';
import FooterListComponent from './FooterListComponent.jsx';

function FooterComponent() {
    return (
        <div className='bg-[#E2F4FF]  py-10 mt-12'>
            <div className='container mx-auto'>
                <SubscribedComponent />

                {/* content fotter */}
                <div className='mt-12 flex flex-col items-center'>
                    {/* left side */}
                    <div className='ml-2 flex flex-col gap-5 w-full md:w-[20%]'>
                        <img src={logo} alt='myLogo' className='w-36' />

                        <div className='flex items-center gap-4'>
                            <FaFacebook size={24} color='' />
                            <FaInstagram size={24} color='' />
                        </div>
                    </div>

                    {/* right side */}
                    <div className='flex items-start gap-7 w-full ml-5 md:w-[80%] justify-between'>
                        <FooterListComponent
                            title='Find Products'
                            items={footerContent}
                        />
                        <FooterListComponent title='Get Help' items={getHelp} />
                        <FooterListComponent title='About Us' items={aboutUs} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;