import React, { useEffect, useState } from "react"


// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// import {  Pagination } from "swiper"

import Course_Card from "./Course_Card"

// let courses = [{_id:"",  thumbnail:"", instructor:{firstName: "Aman", lastName:"Rai"}, ratingAndReviews:[
//   {
//     "rating": 4.5,
//     "review": "Great course!",
//     "user": "user1"
//   },
//   {
//     "rating": 5,
//     "review": "Highly recommended!",
//     "user": "user2"
//   }
// ], price:49.99}]

function Course_Slider({ Courses }) {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          // modules={[ Pagination]}

          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem] pt-8 px-2"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex flex-col sm:flex-row gap-6 ">
          <p className=" h-[201px] w-full rounded-xl  skeleton"></p>
          <p className=" h-[201px] w-full rounded-xl hidden lg:flex skeleton"></p>
          <p className=" h-[201px] w-full rounded-xl hidden lg:flex skeleton"></p>
        </div>
      )}
    </>
  )
}

export default Course_Slider

// import React from "react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
// import Course_Card from "./Course_Card";

// function CourseSlider({ Courses }) {
//   return (
//     <>
//       {Courses?.length ? (
//         <Swiper
//           slidesPerView={1}
//           spaceBetween={25}
//           loop={true}
//           breakpoints={{
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//           className="max-h-[30rem] pt-8 px-2 mySwiper"
//         >
//           {Courses?.map((course, i) => (
//             <SwiperSlide key={i}>
//               <Course_Card course={course} height="250px" />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       ) : (
//         <div className="flex flex-col sm:flex-row gap-6">
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className="h-48 w-full rounded-xl bg-gray-200 animate-pulse"
//             ></div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default CourseSlider;

