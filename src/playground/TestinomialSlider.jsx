import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const testimonials = [
  {
    feedback:
      "This service transformed the way our team works. The support team was fantastic and very responsive.",
    name: "Sarah Thompson",
    designation: "Project Manager",
    picture: "./public/assets/woman1.jpeg",
  },
  {
    feedback:
      "A seamless experience from start to finish. The user interface is intuitive and easy to navigate.",
    name: "Michael Brown",
    designation: "UI/UX Designer",
    picture: "./public/assets/man1.jpg",
  },
  {
    feedback:
      "Outstanding performance and incredible customer service. I highly recommend this company.",
    name: "Emily Davis",
    designation: "Marketing Specialist",
    picture: "./public/assets/woman2.jpg",
  },
  {
    feedback:
      "Their solutions were tailor-made for our needs, and we saw immediate improvements in our workflow.",
    name: "James Wilson",
    designation: "Operations Manager",
    picture: "./public/assets/man2.jpg",
  },
  {
    feedback:
      "I am amazed by the results we achieved using this product. A must-try for any organization.",
    name: "Olivia Martinez",
    designation: "Data Analyst",
    picture: "./public/assets/woman3.jpg",
  },
  {
    feedback:
      "This company goes above and beyond to ensure customer satisfaction. Truly impressive.",
    name: "David Johnson",
    designation: "Business Consultant",
    picture: "./public/assets/man3.jpg",
  },
  {
    feedback:
      "The features are innovative, and the implementation was flawless. I’m thoroughly impressed.",
    name: "Sophia Garcia",
    designation: "Product Manager",
    picture: "./public/assets/woman4.jpg",
  },
];

const TestimonialComp = ({ autoplay = false }) => {
  const [active, setActive] = useState(0);
  const [RotateY, setRotateY] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * 21) - 10;
    setRotateY(randomValue);
  }, []);

  return (
    <div className="max-w-sm md:max-w-4xl mt-6 rounded-lg mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20 bg-[#212121]">
      <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.picture}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: RotateY,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : RotateY,
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: RotateY,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.picture}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-white-500 ">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-white-800 mt-8 ">
              {testimonials[active].feedback.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComp;
