import React from "react";
import Link from "next/link";

const Constitution = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-4xl lg:text-6xl font-russo lg:mb-2 text-center">
        Constitution
      </div>
      <Link href="https://drive.google.com/file/d/1lEpBL23hLlHtkyTcpyQ3c8gnIy3PouNT/view">
        <div>
          <p>Gamespawn Constitution.pdf</p>
        </div>
      </Link>
    </div>
  );
};

export default Constitution;
