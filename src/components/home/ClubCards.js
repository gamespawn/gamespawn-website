import React from "react";
import ClubCard from "/src/components/home/ClubCard.js";
import { MdOutlineAdsClick } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";

const ClubCards = () => {
  return (
    <div className="flex w-full justify-center mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4 md:w-10/12">
        <ClubCard
          title="WORKSHOPS"
          description="Our student-led 
        workshops cater towards all experience levels. Learn about 
        3D modeling, sound design, programming, and more!"
          icon={<MdOutlineAdsClick size={75} />}
        />

        <ClubCard
          title="PROJECTS"
          description="Our members have made 
        many brilliant games over the years. Join one of our active 
        projects or share one of your own!"
          icon={<HiLightBulb size={75} />}
        />

        <ClubCard
          title="SOCIALS"
          description="Sit back, relax, and 
        hang out with the Gamespawn family at our fun socials! We'll 
        bring games and snacks!"
          icon={<FaPeopleGroup size={75} />}
        />
      </div>
    </div>
  );
};

export default ClubCards;
