import {useState} from 'react';
import {Link} from 'react-scroll';
import {FaSearch, FaBars, FaTimes} from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => {
   const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

   return(
    <nav name='navi' className='w-full h-[70px] flex justify-between items-center px-4'>
         <div>
            <h1 className='text-[#344C11] mt-3'>OnlyPlants?</h1>
         </div>
           <div className='flex h-8 mt-3 invisible md:visible'>
            <input type='text' className='bg-[#fffff] rounded-l-full' />
            <button className='bg-[#AEC670] rounded-r-full'><FaSearch size={30} className='p-2'/></button> 
           </div>
           
           <ul className='hidden lg:flex mx-7 font-medium text-xl mt-3'>
            <li className='px-3 py-3'>
            <Link to='#' duration={500} smooth={true}>Home</Link>
            </li>
            <li className='px-3 py-3'>
            <Link to='ourproduct' duration={500} smooth={true}>Product</Link>
            </li>
            <li className='px-3 py-3'>About Us</li>
            <div className='px-3 bg-[#AEC670] rounded-xl'>
            <button className='py-3 text-[#ffff]'>Login</button>
            </div>
           </ul>
       
       <div onClick={handleClick} className='lg:hidden z-40'>
         {!nav ? <FaBars /> : <FaTimes />}
       </div>

       <div className={!nav ? 'hidden' : 'bg-[#F4E6D5] absolute top-0 left-0 w-full h-screen mx-5 flex flex-col justify-center items-center'}>
         <ul>
         <li className='px-3 py-3'>
            <Link to='#' duration={500} smooth={true}>Home</Link>
            </li>
            <li className='px-3 py-3'>
            <Link to='ourproduct' duration={500} smooth={true}>Product</Link>
            </li>
            <li className='px-3 py-3'>About Us</li>
            <div className='px-3 bg-[#AEC670] rounded-xl'>
            <button className='py-3 text-[#ffff]'>Login</button>
            </div>
         </ul>
       </div>


    </nav>
   );
}

export default Navbar