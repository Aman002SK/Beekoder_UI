// import React from 'react'
// import {Link} from "react-router-dom"

// const Button = ({children, active, linkto}) => {
//   return (
//     <Link to={linkto}>

//         <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold
//         ${active ? "bg-yellow-50 text-black":" bg-richblack-800"}
//         hover:scale-95 transition-all duration-200
//         `}>
//             {children}
//         </div>

//     </Link>
//   )
// }

// export default Button
import React from 'react';
import { Link } from 'react-router-dom';

const CustomButton = ({ children, active, linkto }) => {
    return (
        <Link to={linkto}>
            {/* <button
                className={`text-center text-lg font-bold py-2 px-6 rounded-lg shadow-md
                    ${active ? 'bg-yellow-200 text-white' : 'bg-gray-200 text-gray-800'}
                    hover:bg-yellow-500 hover:text-white transition-colors duration-200`}
            >
                {children}
            </button> */}
    <button
    className={`text-center text-lg font-bold py-2 px-6 rounded-lg shadow-md
        bg-gradient-to-r from-[#FF512F] to-[#F09819] text-white
        hover:from-[#FF512F] hover:to-[#F09819] transition-colors duration-200`}
>
    {children}
</button>





        </Link>
    );
};

export default CustomButton;
