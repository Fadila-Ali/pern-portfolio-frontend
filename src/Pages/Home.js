import React from "react";
import homeImg1 from "../assests/pngwing.com copy.png";
import homeImg2 from "../assests/pngwing.com copy 4.png";
import homeImg3 from "../assests/pngwing.com copy 5.png";
export default function Home() {
  return (
    <div className="md:flex justify-end pt-1">
      <img
        src={homeImg1}
        alt="Home image 1"
        className="object-fit w-96 transform -scale-x-100"
      ></img>
      <img
        src={homeImg2}
        alt="Home image 2"
        className="object-contain w-72 h-[80vh]"
      ></img>
      <img
        src={homeImg3}
        alt="Home iamge 3"
        className="object-contain w-96 h-[80vh]"
      ></img>
      <img src={homeImg1} alt="Home image 1" className="object-fit w-72"></img>
    </div>
  );
}
