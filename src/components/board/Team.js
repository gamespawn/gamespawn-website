import React from "react";
import Profile from "@/components/board/Profile";
import BOARD from "@/data/Board";

const Team = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-rows-3 xl:grid-cols-3 items-stretch justify-items-center gap-y-4 mx-44 my-10">
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
