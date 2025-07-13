import { useRef, useState } from "react";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconExchange,
  IconHome,
  IconNewSection,
  IconPlayerStop,
  IconTerminal2,
} from "@tabler/icons-react";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { Link } from "react-router-dom";

const FloatingDock = () => {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500" />,
      href: "/",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500" />,
      href: "/products",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-500" />,
      href: "/components",
    },
    {
      title: "Haider Ghadi",
      icon: <IconPlayerStop className="h-full w-full text-neutral-500" />,
      href: "/haider",
    },
    {
      title: "Changelog",
      icon: <IconExchange className="h-full w-full text-neutral-500" />,
      href: "/changelog",
    },
    {
      title: "Twitter",
      icon: <IconBrandTwitter className="h-full w-full text-neutral-500" />,
      href: "https://twitter.com",
    },
    {
      title: "Github",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500" />,
      href: "https://github.com",
    },
  ];

  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className=" flex items-center justify-center gap-4 bg-neutral-600 inset-x-0 px-4 rounded-2xl mt-20 mb-20 h-16 w-fit mx-auto z-50"
    >
      {links.map((el) => (
        <IconContainer key={el.title} el={el} mouseX={mouseX} />
      ))}
    </motion.div>
  );
};

const IconContainer = ({ el, mouseX }) => {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    }
  );
  const height = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    }
  );

  const widthIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 40, 20]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    }
  );
  const heightIcon = useSpring(
    useTransform(distance, [-150, 0, 150], [20, 40, 20]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    }
  );

  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={el.href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="flex relative items-center justify-center bg-neutral-700 rounded-full"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 0, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              transition={{ duration: 0.2 }}
              className="absolute text-xs bg-neutral-700 rounded-md left-1/2 -translate-x-1/2 -top-8 px-2 py-0.5 w-fit whitespace-pre"
            >
              {el.title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {el.icon}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default FloatingDock;
