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
      <Navbar.Brand className="flex items-center pl-2">
        <Link
          as={Link}
          className="flex justify-between items-center hover:no-underline"
          href="/"
          onClick={() => {
            setSelected("");
          }}
        >
          <Image src={Logo} alt="Gamespawn logo" className="w-16 pr-3" />
          <div className="font-russo text-white text-4xl">GAMESPAWN</div>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="bg-white"
        aria-controls="basic-navbar-nav"
      ></Navbar.Toggle>
      <Navbar.Collapse className="flex lg:justify-end justify-center items-center pr-2">
        <Nav className="flex items-center">
          {items.map((item, index) => (
            <Nav.Link
              as={Link}
              key={index}
              href={item.link}
              onClick={() => {
                setSelected(item.name);
              }}
              className={`font-monda hover:!text-game-blue-100 duration-300 text-2xl py-2 ml-5 ${
                selected === item.name ? "!text-game-blue-100" : "text-white"
              }`}
            >
              {item.name}
            </Nav.Link>
          ))}
          <Nav.Link
            as={Link}
            href="https://discord.com/invite/ejzg2Wb"
            className="font-monda text-white text-2xl py-2 px-3 ml-5 bg-game-blue-200 hover:bg-game-blue-400 rounded-full"
          >
            join now
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
