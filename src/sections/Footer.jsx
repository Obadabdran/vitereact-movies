import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white flex flex-col items-center md:flex-row md:justify-center p-3">
      <div className="flex flex-col items-center md:flex-row md:justify-center space-x-3">
        <div > copyright@2024 </div>
        <div>www.moviestimegmail.com</div>
      </div>
     <div className="flex flex-row ml-3 md:ml-10 mt-1 space-x-2">
      <CiFacebook/> <FaInstagram/> <FaTelegramPlane/>
     </div>
   </div>
    
  )
}

export default Footer