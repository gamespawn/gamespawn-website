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
    <div className="flex items-center border-2 border-gray-100 bg-gray-100 px-3 py-2 w-full rounded my-2">
      <FaSearch className="mx-2 text-xl" />
      <input
        className="w-full focus:outline-none bg-gray-100"
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
