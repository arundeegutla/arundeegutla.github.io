'use client';
import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import {
  FaAws,
  FaDocker,
  FaGolang,
  FaJava,
  FaJenkins,
  FaPython,
  FaReact,
} from 'react-icons/fa6';
import { TbBrandCpp } from 'react-icons/tb';
import { SiFlask, SiMysql, SiOpengl, SiTypescript } from 'react-icons/si';

const fun_things = [
  FaReact,
  TbBrandCpp,
  FaJava,
  FaPython,
  FaGolang,
  SiTypescript,
  FaAws,
  SiOpengl,
  SiMysql,
  BiLogoPostgresql,
  SiFlask,
  FaDocker,
  FaJenkins,
];

export default function ScrollComp() {
  const repeatedSkills = Array(5).fill(fun_things).flat();
  return (
    <div className="relative left-0 bottom-0 w-screen overflow-hidden">
      <div className="flex h-fit animate-scroll whitespace-nowrap">
        {repeatedSkills.map((Icon, index) => (
          <div
            key={index}
            className="mr-3 h-fit flex-shrink-0 rounded-md bg-gray-100 bg-opacity-65 p-2 px-20 backdrop-blur-xl">
            <Icon className="text-2xl text-gray-600" repeatCount={-1} />
          </div>
        ))}
      </div>
    </div>
  );
}
