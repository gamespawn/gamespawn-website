import React from "react";
import Profile from "@/components/board/Profile";

const Team = ({ yearFilters, boardData }) => {
  const filteredBoard = Object.entries(boardData)
    .filter(([year]) =>
      (yearFilters.length === 0 ? ["2023"] : yearFilters).includes(year)
    )
    .map(([, members]) => members)
    .flat();
  return (
    <div className="flex justify-center items-center my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  h-full gap-8">
        {filteredBoard.map((person, index) => (
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
