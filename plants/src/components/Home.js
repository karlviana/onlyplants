import '../css/Home.css';
import {FaShoppingCart} from 'react-icons/fa';
import manyPlant from '../assets/manyplant.jpg'

const Home = () => {
    return(
        <div name='home' className='content w-full min-h-screen'>
            <div className='flex justify-start pt-10 min-h-screen'>
                <div className='mx-5 sm:mx-20'>
                <h1 className='text-lg font-bold w-[200px] sm:w-[400px] mx-0 sm:mx-12 px-2 sm:text-5xl'>"Grow Love, Sow Kindness, Harvest Happiness."</h1>
                <p className='text-sm font-light w-[150px] sm:w-[300px] mx-0 sm:mx-12 my-8 px-2 sm:text-lg'>The best plant shop you should visit offers a variety of plants that you may like. Check it out!</p>
                <div className='w-[200px] sm:w-[400px] grid px-2'>
                    <button className='bg-[#AEC670] justify-self-end w-[100px] sm:w-[140px] p-2 text-sm sm:text-lg font-light flex rounded-md'><FaShoppingCart className='mx-1 sm:mx-3 my-1' />Get Plant</button>
                </div>
                </div>
                <div className='invisible lg:visible mx-5 items-start'>
                 <img src={manyPlant} alt='Many Plants' className='w-[450px] rounded-3xl'/>
                </div>
            </div>
        </div>
             
    );
}

export default Home