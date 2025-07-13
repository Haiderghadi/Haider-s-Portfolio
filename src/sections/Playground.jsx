import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import CoolTextAnimation from "../playground/CoolTextAnimation";
import TestimonialComp from "../playground/TestinomialSlider";
import FloatingDock from "../playground/FloatingDock";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const Playground = () => {
  const navigate = useNavigate();
  const items = [
    {
      id: 1,
      component: <CoolTextAnimation />,
      title: "Cool Text Animation Over Hover",
    },
    { id: 2, component: <TestimonialComp />, title: "Testimonial Slider" },
    { id: 3, component: <FloatingDock />, title: "Floating Dock Menu" },
    // { id: 4, component: <PhotoTrailMain />, title: "Photo Trail Animation" },
  ];

  return (
    <section id="playground" className="bg-black text-white">
      <div className="flex h-48 items-center justify-start px-8">
        <IconArrowLeft
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h2 className="head-text pl-2  text-white">My Playground</h2>
      </div>
      <HorizontalScrollCarousel items={items} />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up to explore more
        </span>
      </div>
    </section>
  );
};

const HorizontalScrollCarousel = ({ items }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjust the transform values based on number of items
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["1%", `-${(items.length - 1) * 28}%`]
  );

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-8">
          {items.map((item) => {
            return <PlaygroundCard key={item.id} item={item} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const PlaygroundCard = ({ item }) => {
  return (
    <div className="group relative h-[500px] w-[800px] overflow-hidden bg-neutral-800 rounded-lg border border-neutral-700 flex-shrink-0">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/80 to-transparent p-6">
        <h3 className="text-2xl font-bold text-white">
          {item.id}. {item.title}
        </h3>
      </div>

      {/* Component Container */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-0 ">
        <div className="w-full h-full overflow-hidden rounded-lg bg-neutral-900/50 backdrop-blur-sm  flex items-center justify-center">
          <div className="scale-75 transform-gpu">{item.component}</div>
        </div>
      </div>

      {/* Hover overlay */}
      {/* <div className="absolute inset-0 z-30 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/60 to-transparent h-20" />
    </div>
  );
};

export default Playground;
