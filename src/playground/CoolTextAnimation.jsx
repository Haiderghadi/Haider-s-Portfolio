import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CoolTextAnimation.css";

const profiles = [
  { name: "Shabbir", src: "./assets/arun.jpeg" },
  { name: "Haider", src: "./assets/ashok.jpeg" },
  { name: "Tasneem", src: "./assets/jane.jpeg" },
  { name: "Adnan", src: "./assets/john.jpeg" },
];

const CoolTextAnimation = () => {
  const nameRefs = useRef([]);
  const imgRefs = useRef([]);

  // Split text into span-wrapped letters
  const splitText = (el) => {
    const text = el.textContent;
    el.innerHTML = "";
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      span.className = "letter";
      span.textContent = text[i] === " " ? "\u00A0" : text[i];
      el.appendChild(span);
    }
  };

  useEffect(() => {
    const headings = nameRefs.current.map((nameDiv) =>
      nameDiv.querySelector("h1")
    );
    headings.forEach(splitText);

    const defaultLetters = nameRefs.current[0].querySelectorAll(".letter");
    gsap.set(defaultLetters, { y: "0%" });

    for (let i = 1; i < nameRefs.current.length; i++) {
      const letters = nameRefs.current[i].querySelectorAll(".letter");
      gsap.set(letters, { y: "100%" });
    }

    imgRefs.current.forEach((img, idx) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, {
          width: 140,
          height: 140,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to(defaultLetters, {
          y: "100%",
          ease: "power4.out",
          duration: 0.75,
          stagger: { each: 0.025, from: "center" },
        });

        const letters = nameRefs.current[idx + 1]?.querySelectorAll(".letter");
        if (letters) {
          gsap.to(letters, {
            y: "0%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.025, from: "center" },
          });
        }
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(img, {
          width: 70,
          height: 70,
          duration: 0.5,
          ease: "power2.out",
        });

        const letters = nameRefs.current[idx + 1]?.querySelectorAll(".letter");
        if (letters) {
          gsap.to(letters, {
            y: "100%",
            ease: "power4.out",
            duration: 0.75,
            stagger: { each: 0.025, from: "center" },
          });
        }

        gsap.to(defaultLetters, {
          y: "0%",
          ease: "power4.out",
          duration: 0.75,
          stagger: { each: 0.025, from: "center" },
        });
      });
    });
  }, []);

  return (
    <div className="animation-container">
      <div className="image-container">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="img"
            ref={(el) => (imgRefs.current[index] = el)}
            data-index={index}
          >
            <img src={profile.src} alt={profile.name} />
          </div>
        ))}
      </div>

      <div className="profile-images">
        <div className="name default" ref={(el) => (nameRefs.current[0] = el)}>
          <h1>Default</h1>
        </div>
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="name"
            ref={(el) => (nameRefs.current[index + 1] = el)}
          >
            <h1>{profile.name}</h1>
          </div>
        ))}
      </div>
      <div className="text-container">
        <h1
          className="uppercase text-[10px] text-neutral-500"
          style={{ letterSpacing: "0.05rem" }}
        >
          [ Hover over the images ]{" "}
        </h1>
      </div>
    </div>
  );
};

export default CoolTextAnimation;
