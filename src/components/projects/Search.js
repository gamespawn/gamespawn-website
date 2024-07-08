"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex items-center justify-center px-3 rounded ">
      <FaSearch className="mx-2 text-xl" />
      <input
        className="focus:outline-none bg-gray-100 h-[40px] w-full"
        placeholder="Search"
        value={searchParams.get("search") ?? ""}
        onChange={(e) =>
          router.replace(
            pathname + "?" + createQueryString("search", e.target.value)
          )
        }
      />
      <MdCancel
        className="mx-2 text-xl text-gray-500 hover:opacity-50 hover:cursor-pointer"
        onClick={() =>
          router.replace(pathname + "?" + createQueryString("search", ""))
        }
      />
    </div>
  );
};

export default Search;
