import '../css/Ourproduct.css';
import SnakePlant from '../assets/snakeplant.jpg';
import EmptyPot from '../assets/emptypot.jpg';

const Ourproduct = () => {
    return(

        <div name='ourproduct' className="w-full min-h-screen">
            <div className='pt-10'>
            <h1 className='text-center text-4xl font-bold'>Our Product</h1>
            </div>
        <div className='backg1 w-full grid grid-cols sm:grid-cols-3 justify-center items-center'>
        <div className='mx-4 my-3'>
            <img src={SnakePlant} alt='html logo' className='w-[200px] mx-auto my-4'/>
          </div>
          <div className='x-4 my-3 mt-10'>
            <img src={EmptyPot} alt='html logo' className='w-[200px] mx-auto my-4'/>
          </div>
          <div>
            <img alt='Product 3'/>
         </div>
         </div>
         
         <div className='backg2'>

         </div>

        </div>
    )
}

export default Ourproduct