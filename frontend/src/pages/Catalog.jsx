// import  { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"

// // import CourseCard from "../components/Catalog/CourseCard"
// // import CourseSlider from "../components/Catalog/CourseSlider"
// import Footer from "../components/common/Footer"
// import Course_Card from '../components/core/Catalog/Course_Card'
// import Course_Slider from "../components/core/Catalog/Course_Slider"
// import Loading from './../components/common/Loading';

// import { getCatalogPageData } from '../services/operations/pageAndComponentData'
// import { fetchCourseCategories } from './../services/operations/courseDetailsAPI';




// function Catalog() {

//     const { catalogName } = useParams()
//     const [active, setActive] = useState(1)
//     const [catalogPageData, setCatalogPageData] = useState(null)
//     const [categoryId, setCategoryId] = useState("")
//     const [loading, setLoading] = useState(false);

//     // Fetch All Categories
//     useEffect(() => {
//          (async () => {
//             try {
//                 const res = await fetchCourseCategories();
//                 const category_id = res.filter(
//                     (ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName
//                 )[0]._id
//                 setCategoryId(category_id)
//             } catch (error) {
//                 console.log("Could not fetch Categories.", error)
//             }
//         })()
//     }, [catalogName])


//     useEffect(() => {
//         if (categoryId) {
//              (async () => {
//                 setLoading(true)
//                 try {
//                     const res = await getCatalogPageData(categoryId)
//                     setCatalogPageData(res)
//                 } catch (error) {
//                     console.log(error)
//                 }
//                 setLoading(false)
//             })()
//         }
//     }, [categoryId])

//     // console.log('======================================= ', catalogPageData)
//     // console.log('categoryId ==================================== ', categoryId)

//     if (loading) {
//         return (
//             <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//                 <Loading />
//             </div>
//         )
//     }
//     if (!loading && !catalogPageData) {
//         return (
//             <div className="text-white text-4xl flex justify-center items-center mt-[20%]">
//                 Working on it
//             </div>)
//     }



//     return (
//         <>
//             {/* Hero Section */}
//             <div className=" box-content bg-richblack-800 px-4">
//                 <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
//                     <p className="text-sm text-richblack-300">
//                         {`Home / Catalog / `}
//                         <span className="text-yellow-25">
//                             {catalogPageData?.selectedCategory?.name}
//                         </span>
//                     </p>
//                     <p className="text-3xl text-richblack-5">
//                         {catalogPageData?.selectedCategory?.name}
//                     </p>
//                     <p className="max-w-[870px] text-richblack-200">
//                         {catalogPageData?.selectedCategory?.description}
//                     </p>
//                 </div>
//             </div>

//             {/* Section 1 */}
//             <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//                 <div className="section_heading">Courses to get you started</div>
//                 <div className="my-4 flex border-b border-b-richblack-600 text-sm">
//                     <p
//                         className={`px-4 py-2 ${active === 1
//                             ? "border-b border-b-yellow-25 text-yellow-25"
//                             : "text-richblack-50"
//                             } cursor-pointer`}
//                         onClick={() => setActive(1)}
//                     >
//                         Most Populer
//                     </p>
//                     <p
//                         className={`px-4 py-2 ${active === 2
//                             ? "border-b border-b-yellow-25 text-yellow-25"
//                             : "text-richblack-50"
//                             } cursor-pointer`}
//                         onClick={() => setActive(2)}
//                     >
//                         New
//                     </p>
//                 </div>
//                 <div>
//                     <Course_Slider
//                         Courses={catalogPageData?.selectedCategory?.courses}
//                     />
//                 </div>
//             </div>

//             {/* Section 2 */}
//             <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//                 <div className="section_heading">
//                     Top courses in {catalogPageData?.differentCategory?.name}
//                 </div>
//                 <div>
//                     <Course_Slider
//                         Courses={catalogPageData?.differentCategory?.courses}
//                     />
//                 </div>
//             </div>

//             {/* Section 3 */}
//             <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//                 <div className="section_heading">Frequently Bought</div>
//                 <div className="py-8">
//                     <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//                         {catalogPageData?.mostSellingCourses
//                             ?.slice(0, 4)
//                             .map((course, i) => (
//                                 <Course_Card course={course} key={i} Height={"h-[300px]"} />
//                             ))}
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </>
//     )
// }

// export default Catalog


import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/class-img1.jpeg"
import BannerImage2 from "../assets/Images/my-class-img.jpeg"
import BannerImage3 from "../assets/Images/vipul-img.jpeg"

import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import Img from "../components/common/Img"
import ReviewSlider from './../components/common/ReviewSlider';

import { motion } from 'framer-motion';
import { fadeIn } from "../components/common/motionFrameVarients"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import CourseCard from "../components/core/HomePage/CourseCard"


const Catalog = () => {
    return (
      <div>
        <section className="bg-richblack-700">
          <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
            {/* <motion.header
              className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]"
            >
              <motion.p
                variants={fadeIn('down', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
              > Driving Innovation in Digital Solutions and training for a
                <HighlightText text={" Future"} />
              </motion.p>
  
              <motion.p
                variants={fadeIn('up', 0.1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.1 }}
                className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%] ">
                Beekoder is at the forefront of driving innovation in Digital Solutions and Training. We're passionate about creating a brighter future by
                offering cutting-edge products, leveraging emerging technologies,
                and nurturing a vibrant learning community.
              </motion.p>
            </motion.header> */}
  
            <div className="sm:h-[90px] lg:h-[150px]"></div>
  
            <div className=" absolute bottom-0 left-[50%] grid w-[130%]  translate-x-[-50%] translate-y-[30%] grid-cols-1 gap-3 lg:gap-5 my-0 ">
              <Img src={BannerImage1} alt="" />
              {/* <Img src={BannerImage2} alt="" />
              <Img src={BannerImage3} alt="" /> */}
            </div>
          </div>
        </section>
  
        <section className="border-b border-richblack-700">
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
            <div className="h-[100px] "></div>
            {/* <Quote /> */}
          </div>
        </section>
  
        
    
        {/* <StatsComponenet /> */}
  
        <section className="mx-auto mt-24 mb-90 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white ">
          <LearningGrid />
          <TimelineSection/>
          <ExploreMore/>

         {/* <TimelineSection/> */}
         
          
        </section>
        <div className="hidden lg:block lg:h-[500px]"></div>
        <ContactFormSection/>
        
        
        {/* Reviws from Other Learner */}
        <div className=" my-20 px-5 text-white ">
          {/* <h1 className="text-center text-4xl font-semibold mt-8">
            Reviews from other learners
          </h1> */}
          {/* <ReviewSlider /> */}
        </div>
  
        {/* footer */}
        <Footer />
      </div>
    )
  }

export default Catalog





