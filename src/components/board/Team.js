import React from "react";
import Profile from "@/components/board/Profile";
import BOARD from "@/data/Board";

const Team = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
