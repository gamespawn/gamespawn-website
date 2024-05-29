"use client";

import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/logo.webp";
import { items } from "@/data/NavItems";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  const [show, setShow] = useState(false);
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
          {items
            .filter((item) => item.link !== "/")
            .map((item, index) => (
              <div key={index}>
                {item.sub ? (
                  <NavDropdown
                    show={show}
                    onMouseEnter={() => setShow(true)}
                    onMouseLeave={() => setShow(false)}
                    className="[&>*]:!bg-transparent"
                    title={
                      <div className="font-monda hover:!text-game-blue-100 hover:no-underline duration-300 text-white text-2xl py-2 mx-2">
                        {item.name}
                        <style>
                          {`
                            .dropdown-toggle:after {
                                display: none;
                            }
                          `}
                        </style>
                      </div>
                    }
                  >
                    {item.sub.map((page, index) => (
                      <NavDropdown.Item
                        key={index}
                        href={page.link}
                        className="flex justify-center font-monda bg-white !text-game-blue-100 text-xl"
                      >
                        {page.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    as={Link}
                    href={item.link}
                    onClick={() => {
                      setSelected(item.name);
                    }}
                    className={`font-monda hover:!text-game-blue-100 duration-300 text-2xl py-2 mx-2 ${
                      selected === item.name
                        ? "!text-game-blue-100"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Nav.Link>
                )}
              </div>
            ))}
          <Nav.Link
            as={Link}
            href="https://discord.com/invite/ejzg2Wb"
            className="font-monda text-white text-2xl py-2 px-3 ml-2 bg-game-blue-200 hover:bg-game-blue-400 rounded-full"
          >
            join now
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
