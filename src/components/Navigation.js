"use client";

import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo.webp";
import { items } from "@/data/NavItems";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      className="bg-game-black flex items-center justify-between w-full"
    >
      <Navbar.Brand className="flex items-center">
        <Link
          as={Link}
          className="flex justify-between items-center text-4xl w-full hover:no-underline"
          href="/"
          onClick={() => {
            setSelected("");
          }}
        >
          <Image src={Logo} alt="Gamespawn logo" className="w-16 pr-3" />
          <div className="font-russo text-white">GAMESPAWN</div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className=""
        aria-controls="basic-navbar-nav"
      ></Navbar.Toggle>
      <Navbar.Collapse className="flex justify-end items-center">
        <Nav className="">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              onClick={() => {
                setSelected(item.name);
              }}
              className={`font-monda hover:text-game-blue-100 text-2xl py-2 pl-5 ${
                selected === item.name ? "text-game-blue-100" : "text-white"
              }`}
            >
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
