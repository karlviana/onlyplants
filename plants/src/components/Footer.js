import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='w-full maxh-screen sm:h-[200px] bg-[#344C11]'>
      <div className='grid grid-cols-1 sm:grid-cols-4 pt-1'>
        <div className='mt-5'>
          <h1 className='font-bold text-3xl text-[#AEC09A] mx-5'>OnlyPlants?</h1>
          <div className='flex mx-5 mt-10'>
          <FaFacebook color='#F4E6D5' size={25} className='mx-2'></FaFacebook>
          <FaInstagram color='#F4E6D5' size={25} className='mx-2'></FaInstagram>
          <FaTwitter color='#F4E6D5' size={25} className='mx-2'></FaTwitter>
          <FaPinterest color='#F4E6D5' size={25} className='mx-2'></FaPinterest>
          </div>
        </div>
        <div className='mt-5 mx-5 sm:mx-0'>
          <ul>
            <h1 className='font-semibold text-2xl text-[#AEC09A]'>Navigation</h1>
            <li className='font-normal text-md text-[#fefeff] hover:text-[#CAB69E] w-10 my-1 '>Home</li>
            <li className='font-normal text-md text-[#fefeff] hover:text-[#CAB69E] w-10 my-1 '>Product</li>
            <li className='font-normal text-md text-[#fefeff] hover:text-[#CAB69E] w-10 my-1 '>Shop</li>
          </ul>
        </div>
        <div className='mt-5 mx-5 sm:mx-0'>
          <ul>
            <h1 className='font-semibold text-2xl text-[#AEC09A]'>Information</h1>
            <li className='font-normal text-md text-[#fefeff] hover:text-[#CAB69E] my-1 w-20'>About Us</li>
            <li className='font-normal text-md text-[#fefeff] hover:text-[#CAB69E] my-1 w-44'>Terms & Conditions</li>
            <li className='font-normal text-md text-[#fefeff] hover:text-[#CAB69E] my-1 w-44'>Refund Policy</li>
          </ul>
        </div>
        <div className='mt-5 mx-5 mb-5 sm:mx-0'>
          <ul>
          <h1 className='font-semibold text-2xl text-[#AEC09A]'>Contact Us</h1>
            <p className='font-normal text-md my-1 text-[#fefeff]'>(00) 1234 5678</p>
            <p className='font-normal text-md my-1 text-[#fefeff]'>(00) 1234 5678</p>
            <li className='font-normal text-md my-1 text-[#fefeff]'><a href="mailto:">onlyplants.shop@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className='bg-[#1A2902] mt-0 px-5 text-[#fefeff] sm:mt-9'>2023OnlyPlants?</div>
    </footer>
  )
}

export default Footer