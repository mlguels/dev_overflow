"use client";

import React from "react";
import Image from "next/image";
import { Input } from "../../ui/input";

interface CustomInputPropts {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputPropts) => {
  return (
    <div className="relative w-full max-w-[609px]">
      <div
        className={`
          background-light800_darkgradient
          relative
          flex
          min-h-[56px]
          grow
          items-center
          gap-1
          rounded-xl
          px-4
         ${otherClasses}`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            alt="Search icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}

        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />

        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            alt="Search icon"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearchbar;
