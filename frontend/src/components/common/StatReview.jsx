import React from "react";
import ReactStars from "react-rating-stars-component";
import Img from './Img';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FaStar } from "react-icons/fa";
import HighlightText from "../core/HomePage/HighlightText";

function StatReview() {
  const reviews = [
    {
      user: {
        firstName: "Tessa",
        lastName: "Parmar",
        image: "user1.jpg"
      },
      rating: "5",
      review: "They have Brilliant Development team who helped me to developed a project which was based on machine learing.",
      course: {
        courseName: "AI Tessa"
      }
    },
    {
      user: {
        firstName: "Radheshyam",
        lastName: "Mishra",
        image: "user2.jpg"
      },
      rating: "4.5",
      review: "Very knowledgeable and supportive team",
      course: {
        courseName: "Parkwiz"
      }
    },
    {
        user: {
          firstName: "Dheeraj",
          lastName: "Somani",
          image: "user2.jpg"
        },
        rating: "5",
        review: "Great Mentor, helped me gain practical knowledge by giving us to work on a real project",
        course: {
          courseName: "Full Stack Developer"
        }
      },
      {
        user: {
          firstName: "Supriya",
          lastName: "Sutar",
          image: "user2.jpg"
        },
        rating: "5",
        review: "After getting mentorship from sir, i became confident in coding and developed different mern stack projects with his help",
        course: {
          courseName: "Mern Stack Developer"
        }
      }
    // Add more reviews as needed
  ];

  const truncateWords = 15;

  return (
    <div className="text-white mb-40">
      <div className="my-[50px] h-[184px] max-w-maxContentTab lg:max-w-full mx-10">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="w-full "
        >
          {reviews.map((review, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col gap-3 bg-richblack-800 p-3 text-[14px] text-richblack-25 min-h-[180px] max-h-[180px] glass-bg">
                <div className="flex items-center gap-4">
                  <Img
                    src={review.user.image ? review.user.image : `https://api.dicebear.com/5.x/initials/svg?seed=${review.user.firstName}%20${review.user.lastName}`}
                    alt=""
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    {/* <h1 className="font-semibold text-richblack-5 capitalize">{`${review.user.firstName} ${review.user.lastName}`}</h1> */}
                    <HighlightText text={`${review?.user?.firstName} ${review?.user?.lastName}`} />

                    <h2 className="text-[12px] font-medium text-richblack-500">
                      {review.course.courseName}
                    </h2>
                  </div>
                </div>

                <p className="font-medium text-richblack-25">
                  {review.review.split(" ").length > truncateWords
                    ? `${review.review.split(" ").slice(0, truncateWords).join(" ")} ...`
                    : `${review.review}`}
                </p>

                <div className="flex items-center gap-2 ">
                  <h3 className="font-semibold ">
                    {review.rating}
                  </h3>
                  <ReactStars
                    count={5}
                    value={parseInt(review.rating)}
                    size={20}
                    edit={false}
                    activeColor="#e99a2b"
                    emptyIcon={<FaStar />}
                    fullIcon={<FaStar />}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default StatReview;
