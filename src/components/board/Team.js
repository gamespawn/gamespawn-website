import React from "react";
import Profile from "@/components/board/Profile";
import BOARD from "@/data/Board";

const Team = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-3 items-stretch justify-items-center gap-y-4 my-10">
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
  );
};

export default Team;
