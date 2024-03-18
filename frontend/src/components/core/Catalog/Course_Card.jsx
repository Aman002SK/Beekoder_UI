import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../common/RatingStars";
import Img from './../../common/Img';

const mockCourses = [
  {
    _id: 1,
    thumbnail: "course1.jpg",
    courseName: "Web Development Course",
    instructor: {
      firstName: "John",
      lastName: "Doe"
    },
    ratingAndReviews: [
      // Mock rating and reviews data
    ],
    price: 100
  },
  {
    _id: 2,
    thumbnail: "course2.jpg",
    courseName: "", // No course name
    instructor: {
      firstName: "Jane",
      lastName: "Smith"
    },
    ratingAndReviews: [
      // Mock rating and reviews data
    ],
    price: 150
  },
  // Add more courses as needed
];

function Course_Card({ course, Height }) {
  const avgReviewCount = course.ratingAndReviews.length > 0 ? GetAvgRating(course.ratingAndReviews) : 0;

  return (
    <div className='hover:scale-[1.03] transition-all duration-200 z-50 '>
      <Link to={`/courses/${course._id}`}>
        <div className="">
          <div className="rounded-lg">
            <Img
              src={course.thumbnail}
              alt="course thumnail"
              className={`${Height} w-full rounded-xl object-cover `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-5">{course.courseName}</p>
            <p className="text-sm text-richblack-50">
              {course.instructor.firstName} {course.instructor.lastName}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-5">{avgReviewCount}</span>
              <RatingStars Review_Count={avgReviewCount} />
              <span className="text-richblack-400">
                {course.ratingAndReviews.length} Ratings
              </span>
            </div>
            <p className="text-xl text-richblack-5">Rs. {course.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

// Component to render the mock courses
function CoursesList({ Height }) {
  const coursesWithContent = mockCourses.filter(course => course.courseName && course.thumbnail && course.price && course.instructor);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {coursesWithContent.map((course) => (
        <Course_Card key={course._id} course={course} Height={Height} />
      ))}
    </div>
  );
}

export default CoursesList;
