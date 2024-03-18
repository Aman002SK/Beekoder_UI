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





const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <motion.header
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
              className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Beekoder is at the forefront of driving innovation in Digital Solutions and Training. We're passionate about creating a brighter future by
              offering cutting-edge products, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </motion.p>
          </motion.header>

          <div className="sm:h-[70px] lg:h-[150px]"></div>

          <div className=" absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <Img src={BannerImage1} alt="" />
            <Img src={BannerImage2} alt="" />
            <Img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          {/* <Quote /> */}
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <motion.div
              variants={fadeIn('right', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.1 }}
              className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#FF512F] to-[#F09819]  bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Beekoder was born from a collective frustration and a shared vision for 
              digital excellence. It started with a group of passionate individuals who 
              recognized a glaring gap in the digital landscape: the disparity between the 
              rapidly evolving skills required in the digital sphere and the often stagnant 
              approaches to talent management.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Frustrated by the disconnect between what businesses needed and what traditional
               education and recruitment avenues provided, our founders came together with a 
               mission to bridge this gap. They envisioned a platform that would not only empower 
               individuals with the skills necessary to thrive in the digital age but also provide 
               businesses with a reliable source of top-tier talent.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Driven by this vision, Beekoder was founded with a clear purpose: to revolutionize 
              the way skills are developed, nurtured, and harnessed in the digital era.
              </p>
            </motion.div>

            <motion.div
             variants={fadeIn('left', 0.1)}
             initial='hidden'
             whileInView={'show'}
             viewport={{ once: false, amount: 0.1 }}
            >
              <div>
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
                    </div>
              {/* <Img
                src={FoundingStory}
                alt="FoundingStory"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              /> */}
            </motion.div>
          </div>

          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              At Beekoder, we envision a world where digital excellence is not a luxury 
              but a fundamental requirement for success. We believe in empowering individuals 
              with the skills they need to thrive in an ever-evolving digital landscape, and in 
              providing businesses with a reliable source of top-tier talent to drive innovation and growth.

Our vision is to be the leading platform for digital empowerment and talent acquisition, bridging 
the gap between skills requirement and management to create a future where every individual 
has the opportunity to unlock their full potential and every business has access to the talent 
they need to succeed in the digital age.
              </p>
            </div>

            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission at Beekoder is simple yet ambitious: to make digital excellence accessible to all. 
              We are committed to providing individuals with the resources, training, and support they need to 
              acquire the skills demanded by the digital economy, 
              whether they are just starting their journey or looking to upskill and stay ahead of the curve.

Simultaneously, we are dedicated to helping businesses navigate the complex landscape of digital talent acquisition and management. 
By leveraging cutting-edge technology, data-driven insights, and a deep understanding of industry trends, we connect businesses with the 
right talent at the right time, empowering them to innovate, grow, and thrive in a rapidly changing world.

Together, we are building a community of digital pioneers, trailblazers, and innovators, united by a shared commitment to excellence, 
empowerment, and transformation. Join us on this journey as we redefine the future of work, one skill at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      {/* <StatsComponenet /> */}

      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        {/* <LearningGrid /> */}
        <ContactFormSection />
      </section>

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

export default About