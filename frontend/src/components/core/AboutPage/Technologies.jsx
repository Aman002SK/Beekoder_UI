
import HighlightText from "../../../components/core/HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const TechnologiesGrid = [
  {
    order: -1,
    heading: "What is our ",
    highlightText: "Expertise",
    description:
    "With over 100 projects under our belt and counting, we excel in digital solutions. From inception to deployment, we handle every aspect of research, development, security and analysis ensuring top-notch quality and a seamless experience, the Beekoder way.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Web App Development",
    description:
      "Transform your ideas into reality with our web app development services. With our expert team & latest technologies, we assure you an end-to-end product for your unique needs.",
  },

  {
    order: 2,
    heading: "Mobile App Design",
    description:
      "With mobile applications which are built in technologies like React Native and Flutter, unleash the full potential of your business.",
  },
  {
    order: 2,
    heading: "UI/UX Design",
    description:
      "Get unique designs for your product, guaranteed to be user-centric and a visual treat!",
  },
  {
    order: 3,
    heading: "Cyber Security",
    description:
      "Protect your digital assets and safeguard your business with our comprehensive cyber security services.",
  },
  {
    order: 4,
    heading: `Machine Learning`,
    description:
    "Leverage data effectively with our Machine Learning solutions. Our experts extract insights and build models tailored to your needs, driving innovation and competitive advantage for your business.",
  },
  
  {
    order: 5,
    heading: "Devops",
    description:
    "Optimize your development and operations with our DevOps solutions. We automate processes, enhance collaboration, and ensure faster software delivery using top tools like Docker, Kubernetes, Jenkins, and GitLab.",
  },
];

const TechGrid = () => {

  return (
    <div className="grid mx-auto w-[350px] lg:w-fit grid-cols-1 lg:grid-cols-4 mb-60">
      {TechnologiesGrid.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "lg:col-span-2 lg:h-[294px]"}  ${card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                  ? "bg-richblack-800 h-[294px]"
                  : "bg-transparent"
              } ${card.order === 3 && "lg:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="lg:w-[90%] flex flex-col gap-3 pb-10 lg:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  {/* <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton> */}
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechGrid;