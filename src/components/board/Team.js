import React from "react";
import Profile from "@/components/board/Profile";
import BOARD from "@/data/Board";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-10">
      <div className="flex flex-wrap items-end justify-center w-9/12 space-x-4 space-y-4">
        {BOARD.map((person, index) => (
          <Profile
            key={index}
            name={person.name}
            email={person.email}
            title={person.title}
            image={person.image}
            year={person.year}
            major={person.major}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
