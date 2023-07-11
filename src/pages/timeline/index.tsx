import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { NextPage } from "next";
import { useEffect, useRef } from "react";

const Home: NextPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const a = useRef<HTMLDivElement>(null);
  const b = useRef<HTMLDivElement>(null);
  const c = useRef<HTMLDivElement>(null);
  const ghost = useRef<HTMLDivElement>(null);

  const didAnimate = useRef(false);

  useEffect(() => {
    if (didAnimate.current) return;
    didAnimate.current = true;

    // const tl = gsap.timeline();

    gsap.to(a.current, {
      scrollTrigger: {
        trigger: a.current,
        toggleActions: "restart reset restart none",
      },
      duration: 3,
      rotate: 360,
      ease: "in",
      repeat: 1,
      x: 400,
    });

    // gsap.to(b.current, {
    //   scrollTrigger: {
    //     trigger: a.current, // use other element to trigger this element
    //     start: "top 50px", // "param1: position of element param2: position of scroll"
    //     endTrigger: c.current,
    //     end: () => "bottom 80%",
    //     markers: true,
    //     toggleActions: "restart reset restart none",
    //   },
    //   duration: 3,
    //   rotate: 360,
    //   x: 400,
    // });

    // gsap.to(b.current, {
    //   scrollTrigger: {
    //     trigger: a.current, // use other element to trigger this element
    //     start: "top 50px", // "param1: position of element param2: position of scroll"
    //     endTrigger: c.current,
    //     end: () => "bottom 80%",
    //     markers: true,
    //     toggleActions: "restart reset restart none",
    //   },
    //   duration: 3,
    //   rotate: 360,
    //   x: 400,
    // });

    gsap.to(c.current, {
      scrollTrigger: {
        trigger: c.current,
        toggleActions: "restart reset restart none",
      },
      duration: 3,
      rotate: 360,
      x: 400,
    });
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="my-[100px] flex flex-col gap-[1000px]">
        <div ref={a} className="w-[200px] h-[200px] text-white bg-green-500">
          a
        </div>

        <div className="relative">
          <div
            ref={c}
            className="absolute top-0 left-0 w-[200px] h-[200px] text-white bg-blue-500"
          >
            b
          </div>

          <div
            ref={ghost}
            className="absolute top-0 left-0 w-[200px] h-[200px] text-white bg-gray-500"
          >
            ghost
          </div>
        </div>

        <div ref={b} className="w-[200px] h-[200px] text-white bg-red-500">
          b
        </div>
      </div>
    </div>
  );
};

export default Home;
