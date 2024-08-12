

// const Stats = [
//   { count: "100+", label: "Clients" },
//   { count: "10+", label: "Developer" },
//   { count: "10+", label: "Mentors" },
//   { count: "20+", label: "Technologies" },
// ];

// const ClientsList = () => {
//   return (
//     <div className="bg-richblack-700">
//       {/* Stats */}
//       <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
//         <div className="grid grid-cols-2 md:grid-cols-4 text-center">
//           {Stats.map((data, index) => {
//             return (
//               <div className="flex flex-col py-10" key={index}>
//                 <h1 className="text-[30px] font-bold text-richblack-5">
//                   {data.count}
//                 </h1>
//                 <h2 className="font-semibold text-[16px] text-richblack-500">
//                   {data.label}
//                 </h2>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientsList;

import { useState, useEffect } from 'react';
import HighlightText from '../HomePage/HighlightText';

const Stats = [
  { initialCount: 100, label: "Clients", sumLimit: 120 },
  { initialCount: 1, label: "Developer", sumLimit: 15 },
  { initialCount: 1, label: "Mentors", sumLimit: 15 },
  { initialCount: 10, label: "Technologies", sumLimit: 25 },
];

const ClientsList = () => {
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts =>
        prevCounts.map(stat => ({
          ...stat,
          count: stat.count < stat.sumLimit ? stat.count + 1 : stat.count // Increment the count if it's less than the sum limit
        }))
      );
    }, 300); // Increase every half second

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Initialize the counts
    setCounts(
      Stats.map(({ initialCount, label, sumLimit }) => ({
        count: initialCount,
        label,
        sumLimit
      }))
    );
  }, []);

  return (
    <div className="bg-richblack-700">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {counts.map((data, index) => (
            <div className="flex flex-col py-10" key={index}>
              <h1 className="text-[30px] font-bold text-richblack-5">
               <HighlightText text={data.count === data.sumLimit ? `${data.count}+` : data.count}/> 
              </h1>
              <h2 className="font-semibold text-[16px] text-richblack-500">
                {data.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsList;



