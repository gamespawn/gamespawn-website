import bannerPic from "/public/assets/banner.png";
import Image from "next/image";

const Banner = ({ title }) => {
  return (
    <div className="bg-game-blue-100 relative-w-screen">
      <Image
        src={bannerPic}
        className="object-cover md:h-48 w-full "
        alt="background banner pic"
      />
      <div className="hidden text-3xl md:block font-russo absolute top-32 inset-x-0 text-white lg:text-5xl text-center">
        {title}
      </div>
    </div>
  );
};

export default Banner;
