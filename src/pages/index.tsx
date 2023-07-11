import gsap from "gsap";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useLayoutEffect, useRef } from "react";

const Home: NextPage = () => {
  const logo = useRef(null);
  const spot = useRef(null);
  const circle = useRef<HTMLDivElement[] | null>([]);
  const tweens = useRef<GSAPTween[]>([]);

  const didAnimate = useRef(false);
  // useEffect(() => {
  //   // gsap.set([logo.current, spot.current], {
  //   //   transformOrigin: "50% 50%",
  //   // });
  //   // gsap.to([logo.current, spot.current], {
  //   //   duration: 2,
  //   //   rotate: 360,
  //   // });
  //   // console.log(logo.current);
  // }, []);

  const handleExitAnimationFunction = () => {
    tweens.current?.forEach((tween) => tween.reverse());
  };

  const handlePlayAnimationFunction = () => {
    tweens.current?.forEach((tween) => tween.play());
  };

  useEffect(() => {
    if (didAnimate.current) return;
    didAnimate.current = true;
    const spotTween = gsap.from(spot.current, {
      x: -300,
      opacity: 0,
      duration: 1,
      scale: 0.3,
    });

    // gsap.from([circle.current], {
    //   duration: 1,
    //   opacity: 0,
    //   y: () => Math.random() * 400 - 200,
    //   stagger: 0.2,
    // });

    const circleTween = gsap.from([circle.current], {
      duration: 1,
      opacity: 0,
      y: "random(-300, 300)",
      stagger: 0.2,
    });

    tweens.current?.push(circleTween);
    tweens.current?.push(spotTween);
  }, []);

  return (
    <div>
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="ChiPoPo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>ChiPoPo</div>
        <div id="demo" className="flex items-center justify-center gap-5">
          {/* <img
            ref={logo}
            className="logo w-[200px] h-auto"
            src="/images/logo.png"
            alt="Heart in Hand"
          /> */}

          <img
            ref={spot}
            className="logo w-[200px] h-auto"
            src="/images/spot.webp"
            alt="Heart in Hand"
          />

          <div
            ref={(element: HTMLDivElement) => {
              circle.current?.push(element);
            }}
            className="w-[50px] h-[50px] rounded-full bg-orange-500"
          ></div>
          <div
            ref={(element: HTMLDivElement) => {
              circle.current?.push(element);
            }}
            className="w-[50px] h-[50px] rounded-full bg-red-500"
          ></div>
          <div
            ref={(element: HTMLDivElement) => {
              circle.current?.push(element);
            }}
            className="w-[50px] h-[50px] rounded-full bg-blue-500"
          ></div>
          <div
            ref={(element: HTMLDivElement) => {
              circle.current?.push(element);
            }}
            className="w-[50px] h-[50px] rounded-full bg-green-500"
          ></div>
          <div
            ref={(element: HTMLDivElement) => {
              circle.current?.push(element);
            }}
            className="w-[50px] h-[50px] rounded-full bg-purple-500"
          ></div>
        </div>

        <div className="flex gap-[50px]">
          <button
            onClick={handlePlayAnimationFunction}
            className="rounded-xl border-[3px] p-[5px]"
          >
            Play
          </button>
          <button
            onClick={handleExitAnimationFunction}
            className="rounded-xl border-[3px] p-[5px]"
          >
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
