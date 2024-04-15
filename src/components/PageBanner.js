import bannerPic from "/public/assets/banner.png";
import Image from "next/image";

const Banner = ({ title }) => {
  return (
    <div>
      <div className="bg-game-blue-100 overflow-hidden w-full h-60">
        <Image
          src={bannerPic}
          className="object-cover h-full w-full"
          alt="background banner pic"
        />
      </div>
      <div className="z-2">{title}</div>
    </div>
  );
};

export default Banner;
