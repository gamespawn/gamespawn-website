import React from "react";
import Image from "next/image";
import Link from "next/link";
const Card = ({ id, name, image }) => {
  return (
    <Link
      href={`/projects/details?id=${id}`}
      className="border-2 border-black rounded-3xl shadow text-center !no-underline text-black p-3"
    >
      <Image src={image} alt="picture of project" className="rounded-3xl" />
      <div className=" mt-2 font-russo font-bold text-xl">{name}</div>
    </Link>
  );
};

export default Card;
