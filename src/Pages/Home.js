import React from "react";
import homeImg1 from "../assests/bg.jpg";
import homeImg2 from "../assests/clown.jpg";
import homeImg3 from "../assests/pngwing.com copy 5.png";
export default function Home() {
  return (
    <div className="md:flex justify-end pt-1">
      <img
        src={homeImg2}
        alt="Home image 2"
        className="object-cover w-[100vw] h-[80vh]"
      ></img>
    </div>
  );
}
