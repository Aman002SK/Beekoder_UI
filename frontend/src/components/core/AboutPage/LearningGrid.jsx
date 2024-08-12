import React from "react";
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

import img1 from '../../../assets/affordable-fee.png';
import img2 from '../../../assets/assesment.png';
import img3 from '../../../assets/alert notification.png';
import img4 from '../../../assets/offline video lecture.png';
import img5 from '../../../assets/curriculum.png';
import img6 from '../../../assets/trusted content.png';
import img7 from '../../../assets/certification.png';

import img8 from '../../../assets/affordable-fee.png';
import img9 from '../../../assets/discussion-form.png';
import img10 from '../../../assets/Ebooks.png';
import img11 from '../../../assets/live-class.png';
import img12 from '../../../assets/faculty.png';
import img13 from '../../../assets/quiz.png';



const LearningGridArray = [
  // {
  //   order: -1,
  //   heading: "World-Class Learning for",
  //   highlightText: "Anyone, Anywhere",
  //   description:
  //     "Beekoder partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
  //   BtnText: "Learn More",
  //   BtnLink: "/",
  // },
  {
    order: 1,
    heading: "WORLD-CLASS FACULTY",
    description:
      "Learn from the accomplished teachers with an in-depth understanding of the subject.",
      imgSrc:img12,
  },
  {
    order: 2,
    heading: "CUTTING EDGE CURRICULUM",
    description:
      "Educate yourself with the top-notch study material designed by the EXPERTS.",
      imgSrc:img5,

  },
  {
    order: 1,
    heading: "CERTIFICATIONS",
    description:
      "Discover a plethora of industry-recognized certifications offered through training & internship programs.",
      imgSrc:img7,
  },
  {
    order: 4,
    heading: "LIVE CLASSES",
    description:
      "Learn concepts, practice questions & get your doubts cleared instantly in the LIVE Classes.",
      imgSrc:img11,
  },
  {
    order: 5,
    heading: "STUDENT DISCUSSION FORM",
    description:
      "Get access to 24*7 Live Discussion group with batchmates & faculties.",
      imgSrc:img9,
  },
  {
    order: 2,
    heading: "QUIZ & ASSIGNMENTS",
    description:
      "Practice chapter-wise Quizzes & solve Assignments to learn and revise concepts.",
      imgSrc:img13,
  },
  {
    order: 1,
    heading: "VIDEO LECTURES",
    description:
      "Learn through high-quality & easy to understand video lectures.",
      imgSrc:img4,
  },
  {
    order: 2,
    heading: "EBOOKS",
    description:
      "Get Important topics & formulas for last-minute revision in the PDF format.",
      imgSrc:img10,
  },
];

const LearningGrid = () => {

  return (
    <>
    <div className="text-center mt-20 sm:mt-60" style={{ fontSize: "3.25rem" }}>Our platform <HighlightText text={"features"} style={{ fontSize: "3.25rem" }}/></div>

    <div className="grid mx-auto w-[350px] lg:w-fit grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
      
  {LearningGridArray.map((card, i) => {
    return (
      
      <div
        key={i}
        className={`${i === 0 && "lg:col-span-1 lg:h-[294px]"}  ${
          card.order % 2 === 1
            ? "bg-richblack-700 hover:bg-richblack-600 transition duration-300 ease-in-out"
            : card.order % 2 === 0
            ? "bg-richblack-800 hover:bg-richblack-700 transition duration-300 ease-in-out"
            : "bg-transparent"
        } ${card.order === 3 && "lg:col-start-2 "}  `}
      >
        {card.order < 0 ? (
          <div className="lg:w-[90%] flex flex-col gap-3 pb-5 lg:pb-0">
            <div className="text-4xl font-semibold">
            <img src={card.imgSrc} alt="" className="w-12 h-12" />
              {card.heading}
              <HighlightText text={card.highlightText} />
            </div>
            <p className="text-richblack-300 font-medium">
              {card.description}
            </p>

            <div className="w-fit mt-2">
              <CTAButton active={true} linkto={card.BtnLink}>
                {card.BtnText}
              </CTAButton>
            </div>
          </div>
        ) : (
          <div className="p-14 flex flex-col gap-8">
  <div className="flex items-center gap-4"> {/* Wrapper for the heading and the image */}
    <img src={card.imgSrc} alt="" className="w-12 h-12" /> {/* Image */}
    <HighlightText text={card.heading}/>
     {/* Heading */}
  </div>
  <p className="text-richblack-300 font-medium">
    {card.description}
  </p>
</div>

        )}
      </div>
    );
  })}
</div></>
    

  );
};

export default LearningGrid;