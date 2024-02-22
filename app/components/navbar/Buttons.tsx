"use client";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div>
      <button
        style={{ margin: "10px" }}
        className="rounded-full bg-primary p-3 py-2 lg:p-5 lg:py-4 hover:bg-secondary transition-all"
      >
        <FontAwesomeIcon icon={faHome} className="size-xl" color="#ffffff" />
      </button>

      <button
        style={{ margin: "10px" }}
        className="rounded-full bg-primary p-3 py-2 lg:p-5 lg:py-4 hover:bg-secondary transition-all"
      >
        <Link href="/protected">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="size-xl"
            color="#ffffff"
          />
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
