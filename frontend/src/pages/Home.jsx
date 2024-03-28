import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';

import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
// import ReviewSlider from '../components/common/ReviewSlider'
// import Course_Slider from '../components/core/Catalog/Course_Slider'

import { getCatalogPageData } from '../services/operations/pageAndComponentData'

import { MdOutlineRateReview } from 'react-icons/md'
import { FaArrowRight } from "react-icons/fa"

import { motion } from 'framer-motion'
import { fadeIn, } from './../components/common/motionFrameVarients';

// background random images
import backgroundImg1 from '../assets/Images/random bg img/f-02.jpg'
// import backgroundImg2 from '../assets/Images/random bg img/code-bg2.webp'

import ContactFormSection from '../components/core/AboutPage/ContactFormSection';

import ClientsList from '../components/core/AboutPage/Clients';
import TechGrid from '../components/core/AboutPage/Technologies';
import StatReview from '../components/common/StatReview';
import CourseCard from '../components/core/HomePage/CourseCard';
import VideoDetailsSidebar from '../components/core/ViewCourse/VideoDetailsSidebar';
import Tab from '../components/common/Tab';

// import backgroundImg3 from '../assets/Images/random bg img/coding bg3.jpg'
// import backgroundImg4 from '../assets/Images/random bg img/coding bg4.jpg'
// import backgroundImg5 from '../assets/Images/random bg img/coding bg5.jpg'
// import backgroundImg6 from '../assets/Images/random bg img/coding bg6.jpeg'
// import backgroundImg7 from '../assets/Images/random bg img/coding bg7.jpg'
// import backgroundImg8 from '../assets/Images/random bg img/coding bg8.jpeg'
// import backgroundImg9 from '../assets/Images/random bg img/coding bg9.jpg'
// import backgroundImg10 from '../assets/Images/random bg img/coding bg10.jpg'
// import backgroundImg111 from '../assets/Images/random bg img/coding bg11.jpg'


const randomImges = [
    backgroundImg1
    // backgroundImg2
];

// hardcoded



const Home = () => {

    // get background random images
    const [backgroundImg, setBackgroundImg] = useState(null);

    useEffect(() => {
        const bg = randomImges[Math.floor(Math.random() * randomImges.length)]
        setBackgroundImg(bg);
    }, [])

    // console.log('bg ==== ', backgroundImg)

    // get courses data
    const [CatalogPageData, setCatalogPageData] = useState(null);
    const categoryID = "6506c9dff191d7ffdb4a3fe2" // hard coded
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCatalogPageData = async () => {

            const result = await getCatalogPageData(categoryID, dispatch);
            setCatalogPageData(result);
            // console.log("page data ==== ",CatalogPageData);
        }
        if (categoryID) {
            fetchCatalogPageData();
        }
    }, [categoryID])


    // console.log('================ CatalogPageData?.selectedCourses ================ ', CatalogPageData)


    return (
        <React.Fragment>
            {/* background random image */}
            <div>
                <div className="w-full h-[680px] md:h-[730px] lg:h-[995px]  absolute top-10  left-0 opacity-[0.3] overflow-hidden object-cover ">
                    <img src={backgroundImg} alt="Background"
                        className="w-full h-full object-cover "
                    />

                    <div className="absolute left-0 bottom-0 w-full h-[250px] opacity_layer_bg "></div>
                </div>
            </div>

            <div className=' '>
                {/*Section1  */}
                <div className='relative h-[450px] md:h-[550px] justify-center mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white '>

                    <Link to={"/signup"}>
                        <div className='z-0 group p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                                        transition-all duration-200 hover:scale-95 w-fit'>
                            {/* <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                              transition-all duration-200 group-hover:bg-richblack-900'>
                                <p>Become/Hire an Instructor</p>
                                <FaArrowRight />
                            </div> */}
                        </div>

                    </Link>

                    <motion.div
                        variants={fadeIn('left', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className='text-center text-3xl lg:text-4xl font-semibold mt-7  '
                    >
                        Creating Excellence in Digital the
                        <HighlightText text={" Beekoder Way"} />
                    </motion.div>

                    <motion.div
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.1 }}
                        className=' mt-4 w-[90%] text-center text-base lg:text-lg font-bold text-richblack-300'
                    >
                       Beekoder powers digital excellence through a multifaceted approach. From empowering individuals with 
                       comprehensive skill development to crafting cutting-edge digital products, we redefine possibilities in the digital realm.
                    </motion.div>


                    <div className='flex flex-row gap-7 mt-8'>
                        <CTAButton active={true} linkto={"/contact"}>
                            Learn More
                        </CTAButton>

                        {/* <CTAButton active={true} linkto={"/login"}>
                            Book a Demo
                        </CTAButton> */}
                    </div>
                </div>

                {/* animated code */}
                {/* <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'> */}
                    {/* Code block 1 */}
                    
                    {/* <div className=''>
                        
                        <CodeBlocks
                            position={"lg:flex-row"}
                            heading={
                                <div className='text-3xl lg:text-4xl font-semibold'>
                                    Unlock Your
                                    <HighlightText text={"coding potential "} />
                                    with our online courses
                                </div>
                            }
                            subheading={
                                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                            }
                            ctabtn1={
                                {
                                    btnText: "try it yourself",
                                    linkto: "/signup",
                                    active: true,
                                }
                            }
                            ctabtn2={
                                {
                                    btnText: "learn more",
                                    linkto: "/login",
                                    active: false,
                                }
                            }

                            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                            codeColor={"text-yellow-25"}
                            backgroundGradient={"code-block1-grad"}
                        />
                    </div> */}


                    {/* Code block 2 */}
                    {/* <div>
                        <CodeBlocks
                            position={"lg:flex-row-reverse"}
                            heading={
                                <div className="w-[100%] text-3xl lg:text-4xl font-semibold lg:w-[50%]">
                                    Start
                                    <HighlightText text={"coding in seconds"} />
                                </div>
                            }
                            subheading={
                                "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                            }
                            ctabtn1={{
                                btnText: "Continue Lesson",
                                link: "/signup",
                                active: true,
                            }}
                            ctabtn2={{
                                btnText: "Learn More",
                                link: "/signup",
                                active: false,
                            }}
                            codeColor={"text-white"}
                            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                            backgroundGradient={"code-block2-grad"}
                        />
                    </div> */}

                    {/* course slider */}
                    {/* <div className='mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'>
                        <h2 className='text-white mb-6 text-2xl '>
                            Top Services for you
                        </h2>
                        <Course_Slider Courses={CatalogPageData?.selectedCategory?.courses} />
                    </div>
                    <div className=' mx-auto box-content w-full max-w-maxContentTab px- py-12 lg:max-w-maxContent'> */}
                        {/* <h2 className='text-white mb-6 text-2xl '>
                            Top Enrollments Today 🔥
                        </h2> */}
                    
                        {/* <Course_Slider Courses={CatalogPageData?.mostSellingCourses} />
                    </div> */}
                  
                    {/* <ExploreMore /> */}
                {/* </div> */}
                   
                {/*Section 2  */}
                <div className='bg-richblack-900 text-richblack-100 '>
                    {/* <div className='homepage_ h-[310px]'>
                        <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                            <div className='h-[150px]'></div>
                            <div className='flex flex-row gap-7 text-white mt-10'> */}
                                {/* <CTAButton active={true} linkto={"/"}>
                                    <div className='flex items-center gap-3 ' >
                                        Explore Full Catalog
                                        <FaArrowRight />
                                    </div>
                                </CTAButton> */}
                                {/* <div className=''>
                        <CodeBlocks
                            position={"lg:flex-row"}
                            heading={
                                <div className='text-3xl lg:text-4xl font-semibold'>
                                    Unlock Your
                                    <HighlightText text={"coding potential "} />
                                    with our online courses
                                </div>
                            }
                            subheading={
                                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                            }
                            ctabtn1={
                                {
                                    btnText: "try it yourself",
                                    linkto: "/signup",
                                    active: true,
                                }
                            }
                            ctabtn2={
                                {
                                    btnText: "learn more",
                                    linkto: "/login",
                                    active: false,
                                }
                            }

                            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                            codeColor={"text-yellow-25"}
                            backgroundGradient={"code-block1-grad"}
                        />
                    </div> */}
                                {/* <CTAButton active={false} linkto={"/contact"}>
                                    <div>
                                        Learn more
                                    </div>
                                </CTAButton> */}
                            {/* </div>
                        </div>
                    </div> */}

                    <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>
                        <div className='flex flex-col lg:flex-row gap-5 mb-40 mt-[10]px lg:mt-[350px]'>
                            <div className='text-3xl lg:text-4xl font-semibold w-full lg:w-[48%] mt-[50px]'>
                                Transform Your
                                <HighlightText text={" Thought Into Reality"} />
                                <div className='gap-5 mt-[60px] text-center' >
                                <CTAButton active={true} linkto={"/contact"}>
                                    <div>
                                        Learn more
                                    </div>
                                </CTAButton>
                                </div>
                            </div>
                           
                            <div className=''>
                        <CodeBlocks
                            position={"lg:flex-row"}
                            heading={
                                <div className='text-3xl lg:text-4xl font-semibold'>
                                    Unlock Your
                                    <HighlightText text={"coding potential "} />
                                    with our online courses
                                </div>
                            }
                            subheading={
                                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                            }
                            ctabtn1={
                                {
                                    btnText: "try it yourself",
                                    linkto: "/signup",
                                    active: true,
                                }
                            }
                            ctabtn2={
                                {
                                    btnText: "learn more",
                                    linkto: "/login",
                                    active: false,
                                }
                            }

                            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n</head>\n<body>\n<h1><a href="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`}
                            codeColor={"text-yellow-25"}
                            backgroundGradient={"code-block1-grad"}
                        />
                    </div>
                            {/* <div className='flex flex-col gap-10 w-full lg:w-[40%] items-center lg:items-start '>
                                <div className='text-[16px]'>
                                In today's digital landscape, turning your vision into a reality often requires customized software solutions. At BeeKoder, we specialize in coding bespoke products tailored to your unique needs and goals. From web applications to mobile apps, our team of experienced developers is dedicated to bringing your ideas to life.
                                </div>
                                <CTAButton active={true} linkto={"/contact"}>
                                    <div>
                                        Learn more
                                    </div>
                                </CTAButton>
                            </div> */}
                        </div>
                        
    

                <TechGrid/>

                        {/* leadership */}
                        {/* <TimelineSection /> */}

                        {/* <LearningLanguageSection /> */}


                    </div>
   
                </div>
                <ClientsList/>
                <div className='mt-14 w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
                    {/* <InstructorSection /> */}

                    {/* Reviws from Other Learner */}
                    <h1 className="text-center text-3xl lg:text-4xl font-semibold mt-40 flex justify-center items-center gap-x-3 ">
                        Reviews from our clients <MdOutlineRateReview className=' from-[#FF512F] to-[#F09819]' />
                    </h1>
                    
                </div>
                <StatReview/>
                {/* <ReviewSlider /> */}

                    <ContactFormSection/>

                {/*Section 3 */}
               

                {/*Footer */}
                <Footer />
            </div >
        </React.Fragment>
    )
}

export default Home
