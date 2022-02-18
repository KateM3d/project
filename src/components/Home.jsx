import { useEffect, useRef } from "react";
import { gsap } from "gsap/all";

export default function Home() {
  const headerRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.to(headerRef.current, { x: -70, duration: 1 });
    gsap.to(textRef.current, { rotation: "360", duration: 1 });
  });

  return (
    <div className="container-home">
      <div className="home">
        <h2 ref={headerRef} className="home-header">
          There are many planetary systems like ours in the universe, with
          planets orbiting a host star. Our planetary system is named the "solar
          system" because our Sun is named Sol, after the Latin word for Sun,
          "solis," and anything related to the Sun we call "solar."
        </h2>
        <p ref={textRef} className="home-text">
          Our solar system consists of our star, the Sun, and everything bound
          to it by gravity – the planets Mercury, Venus, Earth, Mars, Jupiter,
          Saturn, Uranus, and Neptune; dwarf planets such as Pluto; dozens of
          moons; and millions of asteroids, comets, and meteoroids. Beyond our
          own solar system, we have discovered thousands of planetary systems
          orbiting other stars in the Milky Way.
        </p>
      </div>
    </div>
  );
}
