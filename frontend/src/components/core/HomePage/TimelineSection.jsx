import React from 'react'

// import Logo1 from "../../../assets/discussion-form.png"
import Logo2 from "../../../assets/live-class.png"
// import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/certification.png"
import Logo5 from "../../../assets/Images/WEB APP.png"
import Logo6 from "../../../assets/Images/MACHINE LEARNING.png"
import Logo7 from "../../../assets/Images/DEVLOPS.png"
import Logo1 from "../../../assets/Images/right-arrow.png"



import timelineImage from '../../../assets/Images/TimelineImage.png'

import Img from './../../common/Img';

import { motion } from 'framer-motion'
import { fadeIn } from '../../common/motionFrameVarients';



const timeline1 = [
    {
         Logo: Logo1,
        // heading: "Leadership",
        Description: "We provide corporate training services to IT companies to enhance employee growth and productivity acceleration/upskilling.",
    },
    {
         Logo: Logo2,
        // heading: "Responsibility",
        Description: "Classroom training, and Online Training.",
    },
    {
        Logo: Logo4,
        // heading: "Flexibility",
        Description: "Awards 'Certification'",
    },

    {
        Logo: Logo5,
        // heading: "Solve the problem",
        Description: "problem-solving skills",
    },
];

const timeline2 = [
    {
         Logo: Logo1,
        // heading: "Leadership",
        Description: " Beekoder offer the best Placement and IT training for all our courses which will help you step into MNCs and Top Corporates..",
    },
    {
        Logo: Logo5,
        // heading: "Responsibility",
        Description: "Full Stack Development",
    },
    {
        Logo: Logo6,
        // heading: "Flexibility",
        Description: "Machine Learning",
    },

    {
        Logo: Logo7,
        // heading: "Solve the problem",
        Description: "DevOps",
    },
];

const TimelineSection = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-15 items-center justify-center lg:ml-32'>
           
                <motion.div
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className='w-full lg:w-[45%] flex flex-col gap-5'>
                         <h1 className=' font-bold text-4xl mb-10'>Corporate Training</h1>
                    {
                        timeline1.map((element, index) => {
                            return (
                              
                                <div className='flex flex-row gap-6' key={index}>

                                    <div className='w-[50px] h-[50px]  bg-richblue-500 flex justify-center items-center'>
                                        <img src={element.Logo} />
                                        
                                    </div>

                                    <div>
                                        <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                        <p className='text-base'>{element.Description}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </motion.div>
                <motion.div
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className='w-full lg:w-[45%] flex flex-col gap-5'>
                        <h1 className=' font-bold text-4xl mb-10'>Retail Training</h1>
                    {
                        timeline2.map((element, index) => {
                            return (
                                <div className='flex flex-row gap-6' key={index}>

                                    <div className='w-[50px] h-[50px]  bg-richblue-500 flex justify-center items-center'>
                                        <img src={element.Logo} />
                                        
                                    </div>

                                    <div>
                                        <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                                        <p className='text-base'>{element.Description}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </motion.div>
                {/* <motion.div
                    variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.1 }}
                    className='relative shadow-blue-200'>

                    <Img src={timelineImage}
                        alt="timelineImage"
                        className='shadow-white object-cover h-fit scale-x-[-1] w-[550px] '
                    />

                    <div className=' absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7
                            left-[50%] translate-x-[-50%] translate-y-[-70%] rounded-3xl'>
                        <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                            <p className='text-2xl lg:text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-xs lg:text-sm'>Years of Experience</p>
                        </div>

                        <div className='flex gap-5 items-center px-7'>
                            <p className='text-2xl lg:text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-xs lg:text-sm'>TYpe of Courses</p>
                        </div>

                    </div>

                </motion.div> */}
            </div>
        </div>
    )
}

export default TimelineSection
