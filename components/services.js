import React, { useState } from "react";
import HorizonatalCard from "./horizonatalCard";
import { Content } from "./objects/content";
import { Parallax } from "react-scroll-parallax";
export default function Services() {





  return (
    <div className="font-poppins justify-center font-extrabold text-center items-center text-6xl">
      <Parallax scale={[1,4,'easeIn']} opacity={[1,0]}  >
        <h1 className="pt-[50vh] pb-20">SERVICES</h1>
      </Parallax>
      <div>
        <Parallax opacity={[-1, 1]} shouldAlwaysCompleteAnimation={true}>
          <p className="font-poppins text-[32px] font-bold p-96 text-left pt-96">
            {Content.website}
          </p>
        </Parallax>
      </div>
    </div>
  );
}
