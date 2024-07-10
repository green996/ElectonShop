import { Link } from "react-router-dom"


function CategoryComponents() {
    return (
        <div className="flex flex-col text-center text-mainBlue text-base underline font-bold sm:flex-row justify-between h-14 md:bg-amber-200">
            <div className="flex flex-col sm:flex-row space-x-5 md:ml-8 mt-3 ">
                <Link to='/'>Home</Link>
                <Link to='pages'>Pages</Link>
                <Link to='contact'>Contact</Link>
                <Link to='about'>About Us</Link>
            </div>
            <div className="font-bold text-mainBlue text-base underline sm:mt-3">30 Days Free Return</div>
        </div >
    )
}

export default CategoryComponents