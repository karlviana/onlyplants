import {UseState} from 'react';
import {FaSearch} from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => {
   return(
    <nav className='w-full h-[70px] flex justify-between items-center'>
            <h1 className='text-[#344C11] text-3xl px-2 mx-4 mt-3'>OnlyPlants?</h1>
            <div className='flex h-8 mt-3'>
            <input type='text' className='bg-[#fffff] rounded-l-full' />
            <button className='bg-[#AEC670] rounded-r-full'><FaSearch size={30} className='p-2'/></button> 
           </div>
           
           <ul className='hidden md:flex mx-7 font-medium text-xl mt-3'>
            <li className='px-3 py-3'>Home</li>
            <li className='px-3 py-3'>Products</li>
            <li className='px-3 py-3'>About Us</li>
            <div className='px-3 bg-[#AEC670] rounded-xl'>
            <button className='py-3 text-[#ffff]'>Login</button>
            </div>
           </ul>



    </nav>
   );
}

export default Navbar