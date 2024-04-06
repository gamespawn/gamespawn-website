import React from "react";
import Image from "next/Image";
import Link from "next/link";

const Profile = ({ name, email, title, image, year, major }) => {
  return (
    <div className="border-2 border-black w-72 rounded-xl">
      <Image
        src={image}
        alt="picture of board member"
        className="mt-4 mr-auto ml-auto"
      />

      <div className="ml-3 mt-4">
        <div className="font-russo font-bold text-xl mt-3">{name}</div>

        <div>
          <Link
            href={"mailto:" + email}
            className="font-monda text-black underline decoration-1 underline-offset-2"
          >
            {email}
          </Link>
        </div>

        <br />

        <div className="font-monda text-xl mb-1">{title}</div>

        <div className="font-monda mb-4">
          {year} - {major}
        </div>
      </div>
    </div>
  );
};

export default Profile;
