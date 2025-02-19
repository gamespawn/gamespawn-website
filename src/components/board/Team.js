import React from "react";
import Profile from "@/components/board/Profile";

const Team = ({ boardData }) => {
  const filteredBoard = Object.entries(boardData)
    .map(([year, members]) => members.map((member) => ({ ...member, year }))) // Attach year to each member
    .flat();

  // Group members by year
  const groupedBoard = filteredBoard.reduce((acc, member) => {
    acc[member.year] = acc[member.year] || [];
    acc[member.year].push(member);
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center my-12">
      {Object.entries(groupedBoard).map(([year, members]) => (
        <div key={year} className="w-full max-w-6xl">
          {/* Year Heading */}
          <div className="text-center text-xl font-semibold my-6">
            {year} Year
          </div>
          <hr className="border-t-2 border-gray-300 mb-6" />
          {/* Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {members.map((person, index) => (
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
      ))}
    </div>
  );
};

export default Team;
